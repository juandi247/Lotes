interface Project {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
  mapCenter: {
    lat: number;
    lng: number;
  };
  lots: Lot[];
}

interface Lot {
  id_lote: number;
  numeroLote: number;
  precio: number;
  metrosCuadrados: number;
  coordenadas: Array<{ lat: number; lng: number }>;
  imagen: string | null;
  status: "DISPONIBLE" | "VENDIDO";
}

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "Valle Verde",
    description: "Un exclusivo proyecto residencial rodeado de naturaleza",
    location: "San José del Valle",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    mapCenter: { lat: 6.893873, lng: -73.027623 },
    lots: [
    {
      "id_lote": 101,
      "numeroLote": 1,
      "precio": 85000,
      "metrosCuadrados": 200,
      "coordenadas": [
        { "lat": 6.893873743262778, "lng": -73.02762370319054 },
        { "lat": 6.892969475865089, "lng": -73.0283264496685 },
        { "lat": 6.891713321850561, "lng": -73.02618917630294 },
        { "lat": 6.892697116055325, "lng": -73.02565458317154 }
      ],
      "imagen": null,
      "status": "DISPONIBLE"
    },
    {
      "id_lote": 102,
      "numeroLote": 2,
      "precio": 92000,
      "metrosCuadrados": 220,
      "coordenadas": [
        { "lat": 6.894533237007803, "lng": -73.02715497196768 },
        { "lat": 6.893971912315219, "lng": -73.02754007325522 },
        { "lat": 6.892804409375398, "lng": -73.02564185364245 },
        { "lat": 6.893422764235278, "lng": -73.02523371942925 }
      ],
      "imagen": null,
      "status": "VENDIDO"
    },
    {
      "id_lote": 103,
      "numeroLote": 3,
      "precio": 78000,
      "metrosCuadrados": 180,
      "coordenadas": [
        { "lat": 6.895181186307395, "lng": -73.0267026798611 },
        { "lat": 6.894599507625585, "lng": -73.02705410761078 },
        { "lat": 6.893509689920472, "lng": -73.02516584303895 },
        { "lat": 6.894147231916865, "lng": -73.0247860901825 }
      ],
      "imagen": null,
      "status": "DISPONIBLE"
    },
    {
      "id_lote": 105,
      "numeroLote": 5,
      "precio": 88000,
      "metrosCuadrados": 210,
      "coordenadas": [
        { "lat": 6.892201462756359, "lng": -73.02873178349766 },
        { "lat": 6.891486960268677, "lng": -73.02908533012851 },
        { "lat": 6.890566159460911, "lng": -73.02750223540849 },
        { "lat": 6.89122686832923, "lng": -73.02705507106187 }
      ],
      "imagen": null,
      "status": "DISPONIBLE"
    },
    {
      "id_lote": 106,
      "numeroLote": 6,
      "precio": 90000,
      "metrosCuadrados": 220,
      "coordenadas": [
        { "lat": 6.890931627880649, "lng": -73.02678726794292 },
        { "lat": 6.890387897765562, "lng": -73.02718645193221 },
        { "lat": 6.889811603511182, "lng": -73.02622499108166 },
        { "lat": 6.890437296790764, "lng": -73.02561622634492 }
      ],
      "imagen": null,
      "status": "DISPONIBLE"
    }
  ]
  },
  {
    "id": 2,
    "name": "Lomas del Sol",
    "description": "Terrenos con la mejor vista de la ciudad",
    "location": "Santa María",
    "image": "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "mapCenter": { "lat": 7.038782740174735, "lng": -73.08616524735902 },
    "lots": [
      {
        "id_lote": 201,
        "numeroLote": 1,
        "precio": 75000,
        "metrosCuadrados": 200,
        "coordenadas": [
          { "lat": 7.037932552422086, "lng": -73.08779229995815 },
          { "lat": 7.037784388158609, "lng": -73.08724423354658 },
          { "lat": 7.038049063281785, "lng": -73.0870962882726 },
          { "lat": 7.038283953944575, "lng": -73.08752536513563 }
        ],
        "imagen": null,
        "status": "DISPONIBLE"
      },
      {
        "id_lote": 202,
        "numeroLote": 2,
        "precio": 82000,
        "metrosCuadrados": 210,
        "coordenadas": [
          { "lat": 7.038408982662834, "lng": -73.087452607385 },
          { "lat": 7.037948662115406, "lng": -73.08686890160836 },
          { "lat": 7.038153830896133, "lng": -73.0866441256575 },
          { "lat": 7.038451489513441, "lng": -73.08698420744223 }
        ],
        "imagen": null,
        "status": "VENDIDO"
      },
      {
        "id_lote": 203,
        "numeroLote": 3,
        "precio": 79000,
        "metrosCuadrados": 190,
        "coordenadas": [
          { "lat": 7.038701196903329, "lng": -73.08731973170666 },
          { "lat": 7.038168928653303, "lng": -73.08661428429708 },
          { "lat": 7.038372347397028, "lng": -73.08641124598583 },
          { "lat": 7.038976764459715, "lng": -73.08719418348153 }
        ],
        "imagen": null,
        "status": "DISPONIBLE"
      },
      {
        "id_lote": 204,
        "numeroLote": 4,
        "precio": 90000,
        "metrosCuadrados": 230,
        "coordenadas": [
          { "lat": 7.039055204784054, "lng": -73.08713421104147 },
          { "lat": 7.038396979010448, "lng": -73.08641622899761 },
          { "lat": 7.038608356602793, "lng": -73.08614528201846 },
          { "lat": 7.039337019971954, "lng": -73.0870030367706 }
        ],
        "imagen": null,
        "status": "VENDIDO"
      },
      {
        "id_lote": 205,
        "numeroLote": 5,
        "precio": 85000,
        "metrosCuadrados": 220,
        "coordenadas": [
          { "lat": 7.039372748713144, "lng": -73.08699847483928 },
          { "lat": 7.038640695515317, "lng": -73.08607618248287 },
          { "lat": 7.038758542373365, "lng": -73.08584308785235 },
          { "lat": 7.039198750889835, "lng": -73.08628263564661 },
          { "lat": 7.039576499538348, "lng": -73.0868923858142 }
        ],
        "imagen": null,
        "status": "DISPONIBLE"
      },
      {
        "id_lote": 206,
        "numeroLote": 6,
        "precio": 88000,
        "metrosCuadrados": 240,
        "coordenadas": [
          { "lat": 7.039648854844747, "lng": -73.08687526921591 },
          { "lat": 7.038742649315127, "lng": -73.08622350193195 },
          { "lat": 7.038853489515444, "lng": -73.08593148587332 },
          { "lat": 7.039128495411754, "lng": -73.08652129871916 }
        ],
        "imagen": null,
        "status": "VENDIDO"
      }
    ]
  },
  
  {
    id: 3,
    name: "Praderas",
    description: "Tu hogar en un entorno natural privilegiado",
    location: "Valle Alto",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    mapCenter: { lat: 6.897873, lng: -73.031623 },
    lots: [
      {
        id_lote: 301,
        numeroLote: 1,
        precio: 95000,
        metrosCuadrados: 250,
        coordenadas: [
          { lat: 6.898873, lng: -73.032623 },
          { lat: 6.898973, lng: -73.032523 },
          { lat: 6.898773, lng: -73.032423 },
          { lat: 6.898673, lng: -73.032523 }
        ],
        imagen: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        status: "DISPONIBLE"
      },
      {
        id_lote: 302,
        numeroLote: 2,
        precio: 98000,
        metrosCuadrados: 260,
        coordenadas: [
          { lat: 6.898673, lng: -73.032323 },
          { lat: 6.898773, lng: -73.032223 },
          { lat: 6.898573, lng: -73.032123 },
          { lat: 6.898473, lng: -73.032223 }
        ],
        imagen: null,
        status: "VENDIDO"
      }
    ]
  }
];