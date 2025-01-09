import casaRuitoque from "../images/casaruitoque.jpg"
import casaRuitoque2 from "../images/casaruitoque2.jpg"
import casaRuitoque3 from "../images/Ruitoque3.jpg"
import casaRuitoque4 from "../images/Ruitoque4.jpg"
import casaRuitoque5 from "../images/Ruitoque5.jpeg"
import loterui from "../images/LoteRuitoque2.jpg"






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
    image:loterui,
    //image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
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
      "imagen": casaRuitoque,
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
      "imagen": casaRuitoque2,
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
      "imagen": casaRuitoque3,
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
      "imagen": casaRuitoque4,
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
      "imagen": casaRuitoque5,
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
        { "lat": 7.038451489513441, "lng": -73.08698420744223 },
        { "lat": 7.038671626099203, "lng": -73.08731460614149 },
        { "lat": 7.038408982662834, "lng": -73.087452607385 }
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
      }
    ]
  },
  
  {
    id: 3,
    name: "Praderas",
    description: "Tu hogar en un entorno natural privilegiado",
    location: "Valle Alto",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    mapCenter: { "lat": 7.038782740174735, "lng": -73.08616524735902 },
    lots: [
      {
        id_lote: 301,
        numeroLote: 1,
        precio: 95000,
        metrosCuadrados: 250,
        coordenadas: [
          { "lat": 7.037127484370684, "lng": -73.08490157436799 },
          { "lat": 7.036958031541879, "lng": -73.08482304860014 },
          { "lat": 7.037141446792946, "lng": -73.08440943299432 },
          { "lat": 7.037303172952629, "lng": -73.08447404235768 },
          { "lat": 7.037127484370684, "lng": -73.08490157436799 }
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
          { "lat": 7.036970255827299, "lng": -73.08436000569408 },
          { "lat": 7.037115745648705, "lng": -73.08441622547471 },
          { "lat": 7.036943227744737, "lng": -73.08480370544194 },
          { "lat": 7.036782988657171, "lng": -73.08473824139537 },
          { "lat": 7.036970255827299, "lng": -73.08436000569408 }
        ],
        imagen: null,
        "status": "DISPONIBLE"
      },
      {
        id_lote: 303,
        numeroLote: 3,
        precio: 45000,
        metrosCuadrados: 300,
       coordenadas: [
    { "lat": 7.037023424702407, "lng": -73.08407316486466 },
    { "lat": 7.037392256654052, "lng": -73.0842287915677 },
    { "lat": 7.037321049309428, "lng": -73.08444142667307 },
    { "lat": 7.03695191044003, "lng": -73.0842684481517 },
    { "lat": 7.037023424702407, "lng": -73.08407316486466 }
  ],
        imagen: null,
        "status": "DISPONIBLE"
      },
      {
        id_lote: 304,
        numeroLote: 5,
        precio: 18000,
        metrosCuadrados: 160,
       coordenadas: [
    { "lat": 7.036804365081801, "lng": -73.08427706989949 },
    { "lat": 7.036957023854516, "lng": -73.08434032283682 },
    { "lat": 7.036777852501794, "lng": -73.08473366935098 },
    { "lat": 7.036619911414767, "lng": -73.08468028115844 },
    { "lat": 7.036804365081801, "lng": -73.08427706989949 }
  ],
        imagen: null,
        status: "VENDIDO"
      },
      {
        id_lote: 306,
        numeroLote: 6,
        precio: 68000,
        metrosCuadrados: 660,
        coordenadas: [
          { "lat": 7.037043875455369, "lng": -73.08405263863213 },
          { "lat": 7.037125567950846, "lng": -73.08389290482764 },
          { "lat": 7.037494478066935, "lng": -73.08408415337968 },
          { "lat": 7.037407621019085, "lng": -73.08421847083811 },
          { "lat": 7.037043875455369, "lng": -73.08405263863213 }
        ],
        imagen: null,
        "status": "DISPONIBLE"
      },
      {
        id_lote: 307,
        numeroLote: 7,
        precio: 68000,
        metrosCuadrados: 660,
        coordenadas: [
          { "lat": 7.036589417748685, "lng": -73.08466447932298 },
          { "lat": 7.036442524660377, "lng": -73.08460084462968 },
          { "lat": 7.03663787461371, "lng": -73.08418780844904 },
          { "lat": 7.036794223037463, "lng": -73.08426156597434 },
          { "lat": 7.036589417748685, "lng": -73.08466447932298 }
        ],
        imagen: null,
        status: "VENDIDO"
      }
    ]
  }
];