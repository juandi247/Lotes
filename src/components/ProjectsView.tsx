import React, { useState } from 'react';
import { Map } from './Map';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';
import { mockProjects } from '../data/mockData';

interface ProjectsViewProps {
  onClose: () => void;
}

export function ProjectsView({ onClose }: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">Lotes</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={onClose} className="text-white hover:text-blue-200">Inicio</button>
              <a href="#contacto" className="text-white hover:text-blue-200">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center h-14">
            <div className="flex space-x-4">
              {mockProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedProject.id === project.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Project Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{selectedProject.name}</h1>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{selectedProject.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Lotes disponibles:</span>
                  <span>{selectedProject.lots.filter(lot => lot.status === "DISPONIBLE").length}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Área desde:</span>
                  <span>{Math.min(...selectedProject.lots.map(l => l.metrosCuadrados))}m²</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Precio desde:</span>
                  <span className="text-green-600 font-semibold">
                    ${Math.min(...selectedProject.lots.map(l => l.precio)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <Map 
            projectId={selectedProject.id}
            center={selectedProject.mapCenter}
            lots={selectedProject.lots}
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2 text-blue-600" />
              <span>info@lotes.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}