import ServicesInfo from "./ServicesInfo";

export default function ServicesPage() {
    return (
        <div>
            <ServicesInfo
                id="desarrolloweb"
                title="Servicio de desarrollo web"
                description="Nuestro servicio de desarrollo web incluye:"
                subdescription1="Desarrollo de sitios personalizados."
                subdescription2="Programación eficiente."
                subdescription3="Diseño responsive mobile."
                subdescription4="Integración de base de datos y gestión."
                subdescription5="Aseguramiento de funcionalidad."
            />
            <ServicesInfo
                id="appmobile"
                title="Servicio de aplicaciones móviles"
                description="Nuestro servicio de aplicaciones móviles incluye:"
                subdescription1="Diseño y desarrollo de aplicaciones."
                subdescription2="Interfaz de usuario intuitiva."
                subdescription3="Integración de características avanzadas."
                subdescription4="Pruebas en distintos dispositivos."
                subdescription5="Adaptación a las necesidades del cliente."
            />
            <ServicesInfo
                id="hosting"
                title="Servicio de hosting"
                description="Nuestro servicio de hosting incluye:"
                subdescription1="Alojamiento en servidores de alta eficacia."
                subdescription2="Espacio de almacenamiento escalable."
                subdescription3="Copia de seguridad regulable."
                subdescription4="Soporte técnico 24hs para resolución."
                subdescription5="Planes de hosting ajustables."
            />
            <ServicesInfo
                id="seguridad"
                title="Servicio de seguridad digital"
                description="Nuestro servicio de seguridad digital incluye:"
                subdescription1="Evaluación de riesgos por vulnerabilidades."
                subdescription2="Implementación de firewalls y detección."
                subdescription3="Monitoreo de seguridad en tiempo real."
                subdescription4="Respuestas y recuperación ante incidentes."
                subdescription5="Planes personalizados y adaptables."
            />
            <div className="pb-16 bg-slate-950">
            <ServicesInfo
                id="infraestructurait"
                title="Servicio de infraestructura IT"
                description="Nuestro servicio de infraestructura IT incluye:"
                subdescription1="Diseño y planificación de redes."
                subdescription2="Implementación de hardware y software."
                subdescription3="Monitoreo proactivo y mantenimiento."
                subdescription4="Soluciones de seguridad de datos."
                subdescription5="Optimización para mejorar el rendimiento."
            />
            </div>
        </div>
    )
}