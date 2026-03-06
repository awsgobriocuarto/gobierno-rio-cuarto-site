import { fetchAreas, fetchAreaBySlug } from "@/app/lib/DataAreas";
import ContactGuide from "@/app/ui/layout/Contacts";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({
    title: "Guía de Contactos",
    description:
        "Directorio completo de contactos de todas las áreas y sus dependencias del Gobierno de Río Cuarto.",
});

export default async function ContactsPage() {
    const areasList = await fetchAreas();
    const areas = (
        await Promise.all(
            areasList.map((area) => fetchAreaBySlug(area.slug))
        )
    ).filter(Boolean);
    return (
        <main className="contacts-page">
            <div className="container">
                <div className="contacts-header">
                    <div className="contacts-header__icon">
                        <i className="fas fa-address-book"></i>
                    </div>
                    <div className="contacts-header__text">
                        <h1>Guía de Contactos</h1>
                        <p>Directorio de áreas y dependencias municipales</p>
                    </div>
                </div>
                <ContactGuide areas={areas} />
            </div>
        </main>
    );
}
