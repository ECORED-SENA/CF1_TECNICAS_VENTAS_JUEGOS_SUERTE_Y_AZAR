export default {
  global: {
    componenteFormativo:
      'Servicio al cliente y portafolio para juegos de suerte y azar',
    descripcionCurso:
      'A través de este recurso educativo, se exponen conceptos de comunicación, servicio al cliente, portafolio de servicios, manejo de equipos y sistemas de información, requeridos dentro de los procesos necesarios en las ventas para juegos de suerte y azar de Colombia. Este recurso educativo, le facilitará al aprendiz la adquisición de conocimientos para el presente programa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
            titulo: 'Niveles de la comunicación',
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
            titulo: '2.1.	Perfil del cliente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sugerencias para la atención al cliente',
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
      referencia:
        'Arismendy, A. (2013). ¿Cómo vender?, manual de ventas y atención al cliente. A. Arismendy.',
    },
    {
      referencia: 'Barbera, G. E. (2013). El estilo e-portafolio. UOC. ',
    },
    {
      referencia:
        'Cajal, F., A. (2020). Portafolio de servicios: tipos, partes y ejemplos. Lifeder. ',
    },
    {
      referencia:
        'Cámara de Comercio de Medellín. (s. f.). Protocolo de atención a personas en situación de discapacidad. ',
      link:
        'https://www.camaramedellin.com.co/portals/0/transparencia/documentos/2019/protocolo_atencion_%20personas_en_situaci%c3%b3n_de_discapacidad_ccma.pdf',
    },
    {
      referencia:
        'Carrera, F., Jiménez, G., A., y Viera, L., L. (2019). Técnicas de comunicación. IC Editorial',
    },
    {
      referencia:
        'Fernández, A. M. (2021). Definición de relaciones interpersonales. Tipos, instancias y rasgos. Definicion.com',
      link: 'https://definicion.com/relaciones-interpersonales/',
    },
    {
      referencia:
        'Funiber.org. (2017). Beneficios de incorporar tecnología a las empresas.',
      link:
        'https://blogs.funiber.org/direccion-empresarial/2017/06/14/funiber-beneficios-tecnologia-empresas',
    },
    {
      referencia:
        'IMF-formación.com. (2019). Atención al cliente a través de medios tecnológicos. Blog marketing.',
      link:
        'https://blogs.imf-formacion.com/blog/marketing/atencion-al-cliente-medios-tecnologicos/?sp=6358541982459737508418/page/4',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad. (2020). Cómo proteger la información de los clientes.',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/proteger-informacion-personal-los-clientes-empresa',
    },
    {
      referencia: 'Julia, M. U. (2020). Características de la comunicación.',
      link: 'https://www.caracteristicas.co/comunicacion',
    },
    {
      referencia:
        'Mateos, M. Á. (2012). Atención básica al cliente. IC Editorial.',
    },
    {
      referencia:
        'Models, Inc., & Communication. (2011). Shannon and weaver model of communication. Communication theory.',
      link:
        'https://www.communicationtheory.org/shannon-and-weaver-model-of-communication/',
    },
    {
      referencia:
        'Novella, R., Repetto, A., Robino, C., & Rucci, G. (2018). Millennials en América Latina y el Caribe: ¿trabajar o estudiar? (resumen ejecutivo). Interamerican Development Bank. ',
      link: 'https://doi.org/10.18235/0001411',
    },
    {
      referencia:
        'Oliveras, R., I. (2009). El cliente y la calidad en el servicio. Editorial Trillas.',
    },
    {
      referencia:
        'Pérez, R., W. (2021). El protocolo en la atención al cliente.',
      link:
        'https://www.protocolo.org/social/etiqueta-social/el-protocolo-en-la-atencion-al-cliente.html',
    },
    {
      referencia: 'Tiposde.com. (2017). Tipos de relaciones interpersonales.',
      link: 'https://www.tiposde.com/relaciones_interpersonales.html',
    },
  ],
  glosario: [
    {
      termino: 'Canal de comunicación',
      significado:
        'medio físico a través del cual se puede comunicar, sirve para el intercambio de información entre el emisor y el receptor ya sea oral, escrito, lenguaje de señas, etc.',
    },
    {
      termino: 'Comunicación',
      significado:
        'acción consciente de intercambio entre dos o más personas para recibir o trasmitir información',
    },
    {
      termino: 'Etiqueta',
      significado:
        'norma de conducta que cumple expectativas en el comportamiento social, gana importancia en los eventos públicos y privados que requieran de ceremonia.',
    },
    {
      termino: 'Jerarquización',
      significado:
        'estructura que establece orden, refiere ordenar algo según la jerarquía de niveles, grados, importancia, etc.',
    },
    {
      termino: 'Normatividad',
      significado:
        'conjunto de leyes o reglamentos que contienen las conductas y procedimientos que deben cumplir las personas en instituciones, empresas, países, etc. ',
    },
    {
      termino: 'Portafolio de productos y servicios',
      significado:
        'recopilación de productos y servicios ofrecidos por las empresas, es una herramienta fundamental para las ventas.',
    },
    {
      termino: 'Protocolo',
      significado:
        'sistema de reglas que establecen la estandarización tanto de la comunicación como de procesos que se llevan a cabo en una empresa.',
    },
    {
      termino: 'Recursos tecnológicos',
      significado:
        'medio que se vale de la tecnología para cumplir el propósito para el cual se hizo, puede ser una computadora, un teléfono móvil, una máquina, etc.',
    },
    {
      termino: 'Relaciones interpersonales',
      significado:
        'interacción entre dos o más personas, se trata de relaciones sociales donde se dan sentimientos, emociones como por ejemplo el amor, los gustos, los intereses, etc.',
    },
  ],
  complementario: [
    {
      texto:
        '<em>ISO Tools Excellence</em>. (2017). Seguridad de la información. ',
      tipo: 'Blog',
      link:
        'https://www.pmg-ssi.com/2017/08/norma-iso-27002-politica-seguridad/ ',
    },
    {
      texto:
        'Blanco, G., C. (2013). Comunicación y atención al cliente. Macmillan Iberia, S.A. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/42955 ',
    },
    {
      texto:
        'Orozco, L., J. D. D. (2016). Protocolo para la organización de actos oficiales y empresariales. IC Editorial. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44621 ',
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
