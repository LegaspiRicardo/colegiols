// src/pages/EventsPage.tsx
import Container from "../components/Container";
import Layout from "../components/Layout";

function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Día del Estudiante",
      date: "23 de Mayo, 2024",
      description: "Celebración especial para todos nuestros estudiantes",
      image: "/event1.jpg",
    },
    {
      id: 2,
      title: "Feria Científica",
      date: "15 de Junio, 2024",
      description: "Exposición de proyectos científicos estudiantiles",
      image: "/event2.jpg",
    },
    {
      id: 3,
      title: "Aniversario del Colegio",
      date: "10 de Agosto, 2024",
      description: "Celebramos otro año de excelencia educativa",
      image: "/event3.jpg",
    },
  ];

  return (
    <Layout>
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Eventos</h1>
          <p className="text-xl">Próximas actividades y eventos especiales</p>
        </div>
      </div>

      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Imagen del evento</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default EventsPage;
