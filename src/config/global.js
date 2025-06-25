export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Organizaciones, Administración y la Empresa en Red',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Fundamentos de los Sistemas de Información en el Contexto empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Introducción a los sistemas de información en los negocios globales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Impacto de los sistemas de información en la eficiencia y competitividad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tendencias y evolución de la digitalización empresarial ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de información y ventaja competitiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Modelos de fuerzas competitivas y su relación con TI',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La cadena de valor en la era digital ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias empresariales basadas en SI ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de información para la gestión organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Aplicaciones empresariales: características e integración en la organización',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'CRM y ERP: fundamentos, funcionalidades y beneficios estratégicos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Casos de éxito en la implementación de ERP y CRM en diferentes sectores',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategias para la implementación de sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Factores críticos para una implementación efectiva de SI en la empresa',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Retos organizacionales y soluciones en procesos de transformación digital',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Integración de sistemas en la empresa digital: interoperabilidad y alineación estratégica',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'López Ortuño, E. (2020). Sistema de información de mercados: (1 ed.). Marcombo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280238',
    },
    {
      referencia:
        'Lezanski, P. Mattio, A. & Merino, S. (2020). Sistema de información contable I: ( ed.). Editorial Maipue. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/147944',
    },
    {
      referencia:
        'Dueñas Nogueras, J. (2023). Sistemas de información y bases de datos: COMT0110: (1 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/229144 ',
    },
    {
      referencia:
        'Izaguirre Castro, A. (2024). Proyectos exitosos de sistemas de información financiera: (1 ed.). Editorial Alfil, S. A. de C. V.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280570',
    },
    {
      referencia:
        'Carmona Romera, G. (2021). Sistema Operativo, búsqueda de información: Internet/Intranet y correo electrónico. ADGG0208: (1 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222252',
    },
    {
      referencia:
        'Chicano Tejada, E. (2024). Gestionar el crecimiento y las condiciones ambientales. IFCT0510: (1 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274766',
    },
    {
      referencia:
        'Lazzati, S. C. & Tailhade, M. (2019). Liderazgo gerencial: ( ed.). Ediciones Granica.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151212',
    },
    {
      referencia:
        'Molero Suárez, L. M. (Il.). (2024). Casos empresariales desde una mirada académica responsable: investigación enfocada a empresas y sus necesidades gerenciales: (1 ed.). Editorial Politécnico Grancolombiano.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279918',
    },
    {
      referencia:
        'Becerra Bizarrón, M. E. Neri Guzmán, J. C. & Domínguez Valdez, B. M. (2020). Gestión empresarial y aprendizaje organizacional: herramientas para el desarrollo de habilidades gerenciales en un contexto de competitividad regional: ( ed.). Plaza y Valdés (México).  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/174181',
    },
    {
      referencia:
        'Macías Joven, M. T. (2020). Guía del gerente financiero: desde el diagnóstico hasta la toma de decisiones: ( ed.). Universidad de La Sabana.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/137823',
    },
    {
      referencia:
        'Ramírez, M. & Tejada Betancourt, L. (Il.). (2020). Gerencia estratégica: ( ed.). Universidad Abierta para Adultos (UAPA). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175881',
    },
    {
      referencia:
        'Espinosa Manríquez, N. (2022). Contabilidad financiera y gerencial. Tomo III: Casos y ejercicios: (1 ed.). Editorial Universidad Alberto Hurtado.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226848',
    },
    {
      referencia:
        'Espinosa Manríquez, N. (2022). Contabilidad financiera y gerencial. Tomo II: Aplicaciones prácticas y soluciones: (1 ed.). Editorial Universidad Alberto Hurtado.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226847',
    },
    {
      referencia:
        'De la Rosa Curiel, E. O., Rodríguez Torres, E. D., & Acero Sánchez, F. (2020). Plan estratégico para fomentar el uso de las TIC en el sector agrícola. Corporación Universitaria Minuto de Dios. ',
      link:
        'https://repository.uniminuto.edu/bitstream/10656/12583/5/TE.PRO_DelaRosaEddie-RodriguezErika-AceroFernando_2020.pdf',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2021). Propuesta metodológica para implementar un marco de referencia para la alineación estratégica de los sistemas de información. ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/80772/75065742.2021.pdf?isAllowed=y&sequence=2',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2020). Diagnóstico sobre el nivel de madurez de alineación estratégica de las tecnologías de la información en las organizaciones. ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/78595/1121819190.2020.pdf?isAllowed=y&sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Análisis predictivo',
      significado:
        'técnica que utiliza datos históricos y algoritmos estadísticos para anticipar comportamientos o resultados futuros.',
    },
    {
      termino: 'Automatización',
      significado:
        'proceso mediante el cual se ejecutan tareas repetitivas mediante sistemas tecnológicos sin intervención humana directa.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto organizado de información que puede ser accedida, gestionada y actualizada fácilmente.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'técnica que consiste en comparar procesos o productos con los de otras organizaciones líderes para mejorar el rendimiento.',
    },
    {
      termino: '<em>Big Data</em>',
      significado:
        'conjunto masivo de datos que requieren herramientas específicas para su almacenamiento, análisis e interpretación.',
    },
    {
      termino: '<em>Business Intelligence</em>',
      significado:
        'conjunto de tecnologías y estrategias que permiten transformar datos en información útil para la toma de decisiones.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'serie de actividades internas de una organización que agregan valor a un producto o servicio desde su concepción hasta su entrega.',
    },
    {
      termino: 'CRM',
      significado:
        'sistema de gestión de relaciones con los clientes que facilita la fidelización y personalización de la atención.',
    },
    {
      termino: 'Cuadro de mando',
      significado:
        'herramienta visual que permite monitorear indicadores clave de rendimiento (KPI) en tiempo real.',
    },
    {
      termino: 'Datos estructurados',
      significado:
        'información organizada en formatos predefinidos como tablas o bases de datos relacionales.',
    },
    {
      termino: 'ERP',
      significado:
        'sistema de planificación de recursos empresariales que integra y automatiza las operaciones internas de una empresa.',
    },
    {
      termino: 'Gestión del cambio',
      significado:
        'conjunto de prácticas destinadas a preparar y acompañar a las personas ante procesos de transformación organizacional.',
    },
    {
      termino: 'Indicadores clave',
      significado:
        'variables medibles que permiten evaluar el progreso hacia objetivos estratégicos definidos.',
    },
    {
      termino: 'Innovación tecnológica',
      significado:
        'aplicación de nuevas tecnologías para transformar procesos, productos o servicios dentro de una organización.',
    },
    {
      termino: 'KPI',
      significado:
        'siglas en inglés de (<em>Key Performance Indicators</em>), métricas utilizadas para evaluar el desempeño de una empresa.',
    },
    {
      termino: '<em>Machine learning</em>',
      significado:
        'subcampo de la inteligencia artificial que permite a los sistemas aprender de datos y mejorar su rendimiento sin programación explícita.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'proceso de exploración de grandes volúmenes de datos para descubrir patrones y relaciones ocultas.',
    },
    {
      termino: 'Panel de control',
      significado:
        'interfaz gráfica que muestra información crítica en tiempo real para facilitar la supervisión y decisiones rápidas.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'conjunto de recursos tecnológicos y humanos que capturan, procesan y comunican información útil para la gestión.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'cambio estructural en las organizaciones mediante la integración estratégica de tecnologías digitales en todos sus niveles.',
    },
  ],
}
