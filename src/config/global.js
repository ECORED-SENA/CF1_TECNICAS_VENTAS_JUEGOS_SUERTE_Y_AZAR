export default {
  global: {
    componenteFormativo:
      'Servicio al cliente y portafolio para juegos de suerte y azar',
    descripcionCurso:
      'A través de este recurso educativo, se exponen conceptos de comunicación, servicio al cliente, portafolio de servicios, manejo de equipos y sistemas de información, requeridos dentro de los procesos necesarios en las ventas para juegos de suerte y azar de Colombia. Este recurso educativo, le facilitará al aprendiz la adquisición de conocimientos para el presente programa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La comunicación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos generales de la comunicación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Niveles de comunicación comercial',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas y habilidades',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Perfil del cliente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Sugerencias para la atención al cliente según sus características',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Promociones y consejos para ofertar productos y servicios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Portafolio de productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de productos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Dinámica y aplicación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manejo de equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de equipos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Interfaces',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Coljuegos. (2019). Apuestas deportivas.',
      link: 'https://www.coljuegos.gov.co/publicaciones/300440/novedosos/',
    },
    {
      referencia: 'Coljuegos. (2019). Lotería tradicional.',
      link:
        'https://www.coljuegos.gov.co/publicaciones/300668/juego_de_loteria_tradicional/',
    },
    {
      referencia:
        'Coljuegos. (2019). Perfil del apostador Colombiano. Estudio de mercado. Bandstrar.',
      link:
        'https://www.coljuegos.gov.co/publicaciones/306308/perfil-del-apostador-colombiano/',
    },
    {
      referencia: 'Coljuegos. (2021). Rifas',
      link: 'https://www.coljuegos.gov.co/publicaciones/300638/rifas_/',
    },
    {
      referencia:
        'Instituto Nacional de Tecnologías Educativas y de Formación del Profesorado. (2007). Elementos de la comunicación. INTEF - Ministerio de educación.',
      link:
        'http://recursos.cnice.mec.es/lengua/profesores/eso1/t1/teoria_1.htm',
    },
    {
      referencia:
        'Leyva, M. R. (2008). Diseño curricular por competencias. Asociación Nacional de Facultades y Escuelas de Ingeniería.',
    },
    {
      referencia:
        'López, R. V. (2017). Comunicación y atención al cliente en hostelería y turismo. IC Editorial.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8742',
    },
    {
      referencia:
        'Martínez, C. (2017). ¿Qué es la comunicación comercial y cuáles son sus niveles? telcel.com.',
      link:
        'https://www.telcel.com/empresas/tendencias/notas/que-es-comunicacion-comercial',
    },
    {
      referencia:
        'Nuño, A. (2018). La comunicación asertiva en ventas, la más correcta. linkedin.com.',
      link:
        'https://www.linkedin.com/pulse/la-comunicaci%C3%B3n-asertiva-en-ventas-m%C3%A1s-correcta-agustin-nu%C3%B1o/?originalSubdomain=es',
    },
  ],
  glosario: [
    {
      termino: 'Chatbots',
      significado:
        'Chat robot o bot es un software con componentes de inteligencia artificial que permite simular conversaciones con personas a través de respuestas automáticas.',
    },
    {
      termino: 'Cibernético',
      significado:
        'Ciencia que estudia los sistemas de comunicación y de regulación automática de los seres vivos y los aplica a sistemas electrónicos y mecánicos que se parecen a ellos. En este caso, todo lo relacionado con la internet y nuevas tendencias tecnológicas.',
    },
    {
      termino: 'Estrategia precio-gancho',
      significado:
        'El gancho comercial o gancho publicitario, es una técnica utilizada por empresas para la captación de clientes potenciales. Dicha estrategia consiste en publicitar ofertas con precios de mercado por debajo de la media con el objetivo de llamar la atención del cliente y provocar una visita al establecimiento del mismo.',
    },
    {
      termino: 'Impresión térmica',
      significado:
        'Impresión a través del calor como medio para producir la imagen o el texto en papel, por lo que no se necesita tinta o tóner. Sin embargo, sí requiere de un papel térmico que permita la impresión.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'Programa de computación diseñado para realizar determinadas operaciones que se consideran propias de la inteligencia humana, como el autoaprendizaje o dar respuestas bajo un contexto específico.',
    },
    {
      termino: 'POS',
      significado:
        '<i>Point of sale</i>, sistema de punto de venta. Computadoras y sistemas de información cuya funcionalidad está orientada a facturar y ejecutar programas de ventas. Puede existir uno o muchos puntos de venta o cajas conectados a un sistema central de control.',
    },
  ],
  complementario: [
    {
      tema: 'Servicio al cliente',
      referencia: 'Coljuegos. (2019). Perfil del apostador Colombiano.',
      tipo: 'Artículo Perfil del apostador Colombiano. (2015, 2017, 2019).',
      link:
        'https://www.coljuegos.gov.co/publicaciones/306308/perfil-del-apostador-colombiano/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios Regional - Cauca',
      },
      {
        nombre: 'Alex García',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios Regional - Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Yuly RWilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo Front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
