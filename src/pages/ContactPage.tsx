// src/pages/ContactPage.tsx
import Contact from "../components/homeComponents/Contact";
import Layout from "../components/Layout";

function ContactPage() {
  return (
    <Layout>
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl">Estamos aquí para responder tus preguntas</p>
        </div>
      </div>
      <Contact />
    </Layout>
  );
}

export default ContactPage;
