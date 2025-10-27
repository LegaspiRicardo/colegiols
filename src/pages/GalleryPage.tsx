// src/pages/GalleryPage.tsx
import Gallery from "../components/homeComponents/Gallery";
import Layout from "../components/Layout";

function GalleryPage() {
  return (
    <Layout>
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Galería</h1>
          <p className="text-xl">
            Momentos especiales de nuestra comunidad educativa
          </p>
        </div>
      </div>
      <Gallery />
    </Layout>
  );
}

export default GalleryPage;
