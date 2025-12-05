const imap = require('imap-simple');
const { simpleParser } = require('mailparser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const config = {
    imap: {
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASS,
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

const ALLOWED_SENDER = process.env.ALLOWED_SENDER || 'cristinarosillo22@gmail.com';
const MAILBOX_FOLDER = process.env.MAILBOX_FOLDER || 'BLOG_PENDING';
const DOWNLOAD_DIR = path.join(__dirname, '../docx_posts');

async function processEmails() {
    console.log(`🔄 Iniciando comprobación en carpeta: ${MAILBOX_FOLDER}...`);

    if (!config.imap.user || !config.imap.password) {
        console.error('❌ Error: Faltan credenciales EMAIL_USER o EMAIL_PASS');
        process.exit(1);
    }

    try {
        const connection = await imap.connect(config);

        // Intentar abrir la carpeta específica para NO TOCAR el Inbox principal
        try {
            await connection.openBox(MAILBOX_FOLDER);
        } catch (e) {
            console.error(`❌ Error: No se pudo abrir la carpeta "${MAILBOX_FOLDER}". Asegúrate de que existe en Gmail (puede ser una Etiqueta).`);
            connection.end();
            return;
        }

        // Buscar correos NO LEÍDOS en esa carpeta específica
        const searchCriteria = ['UNSEEN'];
        const fetchOptions = {
            bodies: ['HEADER', 'TEXT', ''],
            markSeen: false // Lo marcamos como visto manualmente solo si lo procesamos con éxito o descartamos
        };

        const messages = await connection.search(searchCriteria, fetchOptions);

        if (messages.length === 0) {
            console.log('📭 No hay correos nuevos.');
            connection.end();
            return;
        }

        console.log(`📬 Procesando ${messages.length} correos nuevos...`);

        for (const message of messages) {
            const all = message.parts.find(part => part.which === '');
            const id = message.attributes.uid;
            const idHeader = "HEADER";
            const headerPart = message.parts.find(part => part.which === idHeader);

            const parsed = await simpleParser(all.body);
            const from = parsed.from.value[0].address;

            console.log(`📧 Nuevo correo de: ${from} - Asunto: ${parsed.subject}`);

            // VERIFICACIÓN DE SEGURIDAD
            if (from !== ALLOWED_SENDER) {
                console.warn(`⛔ Remitente no autorizado (${from}). Ignorando correo.`);
                // Opcional: Marcar como leído para no re-procesar, o dejarlo
                await connection.addFlags(id, '\\Seen');
                continue;
            }

            // Procesar adjuntos
            if (parsed.attachments && parsed.attachments.length > 0) {
                for (const attachment of parsed.attachments) {
                    if (attachment.filename.endsWith('.docx')) {
                        const safeFilename = attachment.filename.replace(/[^a-z0-9\.\-_]/gi, '_');
                        const filePath = path.join(DOWNLOAD_DIR, safeFilename);

                        // Evitar sobrescribir si ya existe (opcional, o sobrescribir para actualizar)
                        // Aquí sobrescribimos para permitir correcciones
                        fs.writeFileSync(filePath, attachment.content);
                        console.log(`✅ Archivo guardado: ${safeFilename}`);
                    }
                }
            } else {
                console.log('⚠️ El correo no tiene adjuntos.');
            }

            // Marcar como procesado/leído
            await connection.addFlags(id, '\\Seen');
        }

        connection.end();
        console.log('🏁 Proceso completado.');

    } catch (err) {
        console.error('❌ Error general:', err);
        process.exit(1);
    }
}

processEmails();
