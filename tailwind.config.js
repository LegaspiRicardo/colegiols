/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Aquí puedes extender la configuración por defecto
      colors: {
        // Ejemplo de colores personalizados
        primary: '#3b82f6',
        secondary: '#1e40af',
      }
    },
  },
  plugins: [],
}