# Web Cristina Rosillo

Web profesional para la psicóloga Cristina Rosillo.
Desarrollada con **Next.js** (Static Export) y **Tailwind CSS**.

## Características

*   **Diseño Premium**: Estética cuidada y relajante.
*   **Blog Autogestionable**: Conversión automática de archivos `.docx` a artículos web.
*   **Contacto Seguro**: Formulario protegido contra spam (Netlify Forms) y botón de WhatsApp.
*   **Privacidad**: Ofuscación de datos de contacto para evitar crawlers.

## Estructura del Proyecto

*   `app/`: Código fuente de la web (Páginas y Componentes).
*   `docx_posts/`: **Carpeta para subir los artículos en formato Word (.docx)**.
*   `posts/`: Carpeta donde se generan automáticamente los archivos Markdown (no editar manualmente).
*   `public/`: Imágenes y archivos estáticos.
*   `scripts/`: Scripts de utilidad (conversión de DOCX).

## Desarrollo Local

1.  Instalar dependencias:
    ```bash
    pnpm install
    ```

2.  Arrancar servidor de desarrollo:
    ```bash
    pnpm dev
    ```

3.  Visitar `http://localhost:3000`.

## Despliegue en Netlify

Esta web está optimizada para desplegarse en **Netlify**.

1.  Conectar el repositorio a Netlify.
2.  Configuración de construcción (se detecta automáticamente):
    *   **Build command**: `pnpm build`
    *   **Publish directory**: `out`
3.  **Importante**: Para que el formulario de contacto funcione, asegúrate de que el plugin "Netlify Forms" está activo (lo está por defecto).

## Gestión de Contenidos (Blog)

Para publicar un nuevo artículo:
1.  Escribir el texto en Microsoft Word. La **primera línea** será el título.
2.  Guardar como `.docx` (ej: `ansiedad.docx`).
3.  Subir el archivo a la carpeta `docx_posts/`.
4.  Al desplegar, el sistema lo convertirá y publicará automáticamente.
