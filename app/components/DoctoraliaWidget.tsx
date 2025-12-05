'use client';
import { useEffect } from 'react';

export default function DoctoraliaWidget() {
    useEffect(() => {
        // Inicializar el widget de Doctoralia
        // Este código es una adaptación del script proporcionado por Doctoralia
        // para funcionar dentro del ciclo de vida de React
        const scriptId = "zl-widget-s";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "//platform.docplanner.com/js/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="w-full flex justify-center bg-white rounded-2xl overflow-hidden shadow-sm my-6">
            <a
                id="zl-url"
                className="zl-url"
                href="https://www.doctoralia.es/cristina-rosillo-lizana/psicologo/cornella-de-llobregat"
                rel="nofollow"
                data-zlw-doctor="cristina-rosillo-lizana"
                data-zlw-type="big_with_calendar"
                data-zlw-opinion="false"
                data-zlw-hide-branding="true"
                data-zlw-saas-only="true"
                data-zlw-a11y-title="Widget de reserva de citas médicas"
                style={{ display: 'block', minHeight: '500px', width: '100%' }} // Placeholder style
            >
                Cargando calendario de Cristina Rosillo...
            </a>
        </div>
    );
}
