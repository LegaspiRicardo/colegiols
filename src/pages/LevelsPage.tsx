// Ejemplo para LevelsPage.tsx
import LevelsPageComponent from '../components/Levels';
import Layout from '../components/Layout';

function LevelsPage() {
  return (
    <Layout>
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Niveles Educativos</h1>
          <p className="text-xl">Conoce nuestra oferta académica completa</p>
        </div>
      </div>
      <LevelsPageComponent />
    </Layout>
  );
}

export default LevelsPage;