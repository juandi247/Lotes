import React from 'react';
import { X, MapPin, Ruler, DollarSign, CircleDot } from 'lucide-react';

interface LotModalProps {
  lote: {
    id_lote: number;
    numeroLote: number;
    precio: number;
    metrosCuadrados: number;
    status: string;
    imagen: string | null;
  } | null;
  onClose: () => void;
}

export function LotModal({ lote, onClose }: LotModalProps) {
  if (!lote) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold">Lote #{lote.numeroLote}</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 p-6 max-h-[calc(90vh-88px)] overflow-y-auto">
          {/* Left side - Image */}
          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
              {lote.imagen ? (
                <img 
                  src={lote.imagen} 
                  alt={`Lote ${lote.numeroLote}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No hay imagen disponible
                </div>
              )}
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Características del lote</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Ubicación privilegiada dentro del proyecto</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Ruler className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Terreno regular y nivelado</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CircleDot className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Todos los servicios disponibles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <DollarSign className="w-8 h-8 text-green-600 mr-2" />
                <span className="text-4xl font-bold text-green-600">
                  ${lote.precio.toLocaleString()}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-600">Área total</span>
                  <p className="text-xl font-semibold">{lote.metrosCuadrados}m²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-600">Estado</span>
                  <p className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    lote.status === 'DISPONIBLE' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {lote.status}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Detalles de financiamiento</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Enganche desde 20%</p>
                <p>• Financiamiento directo hasta 36 meses</p>
                <p>• Sin revisión de buró de crédito</p>
                <p>• Escrituración inmediata</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Documentación necesaria</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Identificación oficial vigente</p>
                <p>• Comprobante de domicilio</p>
                <p>• Acta de nacimiento</p>
                <p>• RFC</p>
              </div>
            </div>

            {lote.status === 'DISPONIBLE' && (
              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                Solicitar información
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}