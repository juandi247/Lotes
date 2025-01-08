import React, { useState } from 'react';
import { ProjectsView } from './components/ProjectsView';
import { Building2, Phone, Mail, MapPin, ArrowRight, Home, Shield, Users } from 'lucide-react';

export default function App() {
  const [showProjects, setShowProjects] = useState(false);

  if (showProjects) {
    return <ProjectsView onClose={() => setShowProjects(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <nav className="relative container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 mr-2 text-white" />
            <span className="text-xl font-bold text-white">TerraPro</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#beneficios" className="text-white hover:text-blue-200">Beneficios</a>
            <a href="#contacto" className="text-white hover:text-blue-200">Contacto</a>
          </div>
        </nav>
        
        <div className="relative container mx-auto px-6 flex items-center h-[calc(100vh-80px)]">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Tu terreno ideal te espera
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Descubre desarrollos exclusivos en las mejores ubicaciones, diseñados para construir el hogar de tus sueños.
            </p>
            <button 
              onClick={() => setShowProjects(true)}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Ver nuestros proyectos
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Seguridad legal</h3>
              <p className="text-gray-600">Todos nuestros terrenos cuentan con documentación en regla y títulos de propiedad.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ubicaciones premium</h3>
              <p className="text-gray-600">Seleccionamos las mejores ubicaciones para nuestros desarrollos.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Asesoría personalizada</h3>
              <p className="text-gray-600">Te acompañamos en todo el proceso de compra con asesores expertos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ¿Interesado en alguno de nuestros proyectos? Déjanos tus datos y un asesor se pondrá en contacto contigo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Llámanos</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-blue-50 rounded-lg">
                <Mail className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@terrapro.com</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-blue-50 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Oficina</h3>
                  <p className="text-gray-600">Av. Principal #123, Ciudad</p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Building2 className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">TerraPro</span>
            </div>
            <div className="flex space-x-6">
              <a href="#beneficios" className="hover:text-blue-400">Beneficios</a>
              <a href="#contacto" className="hover:text-blue-400">Contacto</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 TerraPro. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}