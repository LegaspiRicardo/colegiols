// src/pages/AboutPage.tsx
import About from "../components/homeComponents/About";
import Layout from "../components/Layout";

function AboutPage() {
  return (
    <Layout>
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nosotros</h1>
          <p className="text-xl">Conoce más sobre nuestra institución</p>
        </div>
      </div>
      <About />
    </Layout>
  );
}

export default AboutPage;
