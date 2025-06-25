<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de los Sistemas de Información en el Contexto empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4(data-aos="fade-left")
          p En la actualidad, las organizaciones operan en entornos altamente competitivos y dinámicos, lo que exige una gestión eficiente de la información. En este contexto, los Sistemas de Información (SI) se han convertido en herramientas esenciales para recopilar, procesar, almacenar y distribuir datos, respaldando la toma de decisiones estratégicas y operativas.
          p Estos sistemas integran componentes tecnológicos y humanos para transformar los datos en información útil, mejorando así la eficiencia y eficacia organizacional. Su implementación permite:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Automatizar procesos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reducir errores
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Optimizar recursos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Aumentar la productividad y competitividad
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Adaptarse a cambios del mercado
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Innovar en productos y servicios

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Un ejemplo clave son los Sistemas de Información Administrativa (Management Information Systems – MIS), que proporcionan a los gerentes informes y análisis para la planificación y control de operaciones.
    
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, la digitalización y el uso de tecnologías emergentes como la inteligencia artificial y el data analytics han ampliado las capacidades de los SI, posibilitando una gestión más proactiva y predictiva. Estos avances tecnológicos han impulsado a las organizaciones a replantear sus modelos de negocio y estrategias, convirtiendo los SI en elementos clave para la innovación y el desarrollo sostenible.
        p Comprender los fundamentos de los SI es crucial en la administración de empresas, ya que permite diseñar estrategias que alineen la tecnología con los objetivos organizacionales. Esta unidad brindará al estudiante las herramientas necesarias para:
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Analizar el impacto de los SI en la gestión empresarial

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Comprender su rol en la toma de decisiones estratégicas
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Prepararse para los desafíos de la era digital

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Introducción a los sistemas de información en los negocios globales

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                p En la era digital, los SI son fundamentales para las organizaciones en contextos globalizados. Integran tecnología, procesos y personas para facilitar la toma de decisiones empresariales. Además, permiten a las organizaciones:
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Superar barreras geográficas y temporales
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Fortalecer la comunicación y coordinación entre unidades de negocio dispersas globalmente
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Un ejemplo relevante es el uso de sistemas de planificación de recursos empresariales (Enterprise Resource Planning – ERP), que integran operaciones financieras, logísticas y de recursos humanos a nivel internacional. Para comprender mejor las aplicaciones y funciones de los principales SI en el entorno empresarial global, se presenta la siguiente comparativa de sistemas de información clave:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="ERP (<em>Enterprise Resource Planning</em>)")
            p Integra funciones empresariales clave (finanzas, logística, RR.HH.) en una sola plataforma a nivel global
    
          .div(titulo="BI (<em>Business Intelligence</em>)")
            p Analiza grandes volúmenes de datos para detectar tendencias del mercado, comportamientos del consumidor y desempeño organizacional
    
          .div(titulo="MIS (<em>Management Information Systems</em>)")
            p Genera informes y análisis para apoyar la planificación, el control y la toma de decisiones gerenciales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Además, la adopción de sistemas de inteligencia empresarial (Business Intelligence – BI) permite el análisis masivo de datos, brindando información valiosa y en tiempo real que facilita la adaptación estratégica en mercados dinámicos. No obstante, el éxito en la implementación de SI no depende únicamente de la tecnología, sino también de capacidades humanas clave como:
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Pensamiento crítico
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Adaptabilidad
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Comunicación intercultural
        p Estas habilidades permiten interpretar la información adecuadamente y tomar decisiones efectivas en contextos multiculturales y cambiantes. En conclusión, los sistemas de información son herramientas esenciales para operar eficientemente en el entorno global. Su uso estratégico, junto con el fortalecimiento de competencias humanas, es indispensable para lograr el éxito organizacional en el siglo XXI.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Impacto de los sistemas de información en la eficiencia y competitividad
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Con el avance de la globalización y la transformación digital, los Sistemas de Información (SI) se han consolidado como herramientas vitales para el mejoramiento de la eficiencia operativa y el fortalecimiento de la competitividad organizacional. Al integrar tecnologías, procesos y personas, los SI permiten recopilar, procesar y distribuir información clave para la toma de decisiones estratégicas y operativas.
    
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          p La implementación efectiva de estos sistemas posibilita:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La automatización de procesos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La reducción de errores humanos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La optimización de recursos
        p Estos beneficios se traducen en una mayor productividad y mejor capacidad de respuesta frente a los cambios del mercado. Por ejemplo, los sistemas <em>Enterprise Resource Planning</em> (ERP) integran áreas como finanzas, recursos humanos y logística, mejorando la coordinación y la eficacia administrativa. Otros sistemas, como los <em>Management Information Systems</em> (MIS) y los <em>Decision Support Systems</em> (DSS), también desempeñan un papel crucial en la mejora organizacional.
    
    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/11.svg" alt="" style="width: 90px")
          h4.text-center ERP (<em>Enterprise Resource Planning</em>)
          p.mb-0.text-center Integra funciones organizacionales para mejorar la coordinación y el control operativo
    
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.svg" alt="" style="width: 90px")
          h4.text-center MIS (<em>Management Information Systems</em>)
          p.mb-0.text-center Proporciona informes gerenciales para la planificación y supervisión de operaciones
    
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/13.svg" alt="" style="width: 90px")
          h4.text-center DSS (<em>Decision Support Systems</em>)
          p.mb-0.text-center Apoya la evaluación de alternativas estratégicas mediante el análisis de datos y modelos predictivos

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La adopción de tecnologías emergentes, como la inteligencia artificial y el big data, ha ampliado las capacidades analíticas de los SI, haciendo posible una gestión más proactiva y adaptativa. Gracias a estas herramientas, las organizaciones pueden ajustar sus estrategias en tiempo real y mantener su ventaja competitiva en mercados cada vez más dinámicos.

        p(data-aos="fade-left") No obstante, el éxito de los SI no depende únicamente de la infraestructura tecnológica. Es igualmente esencial el desarrollo de habilidades blandas en los profesionales, tales como:
    
    .bg-full-width.bg-color-8
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Pensamiento crítico
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Adaptabilidad
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Comunicación efectiva
        p Estas competencias son fundamentales para interpretar correctamente la información y tomar decisiones sólidas en entornos complejos, cambiantes y altamente competitivos.
    
    .bg-full-width.bg-color-9.mb-5.border-top.color-primario
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-5(data-aos="flip-up") Caso Práctico Resuelto: Transformación Digital en la Empresa AGROSOL S.A.S.
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Caso Práctico Resuelto: Transformación Digital en la Empresa AGROSOL S.A.S., donde se aborda el proceso de modernización tecnológica de una empresa agroindustrial colombiana mediante la implementación de un sistema ERP. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Caso Práctico Resuelto: Transformación Digital en la Empresa AGROSOL S.A.S.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Tendencias y evolución de la digitalización empresarial 
    
    p.mb-4 La digitalización empresarial ha transformado profundamente la forma en que las organizaciones operan y compiten. Este fenómeno, acelerado en las últimas décadas, responde a tres grandes motores: el avance tecnológico, los cambios en las expectativas del cliente y la presión por adaptarse a entornos dinámicos y competitivos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7
              h5 Integración de tecnologías emergentes
              p Incorporación de tecnologías como la inteligencia artificial (IA), el aprendizaje automático y la automatización de procesos. Permiten: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Optimizar operaciones 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mejorar la eficiencia 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Personalizar la experiencia del cliente 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Acelerar la toma de decisiones. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7
              h5 Adopción de soluciones en la nube
              p <em>Cloud computing</em> como base de la infraestructura digital. Ofrece:  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Flexibilidad en el acceso a recursos 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Escalabilidad según el crecimiento  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Reducción de costos operativos 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Colaboración remota en tiempo real. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7
              h5 Seguridad digital como prioridad
              p La ciberseguridad se posiciona como un eje estratégico, no solo técnico. Las organizaciones invierten en: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Protección de datos 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Privacidad de la información 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cumplimiento normativo 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Defensa frente a amenazas digitales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7
              h5 Evolución del modelo de negocio
              p Transformación hacia modelos más ágiles e innovadores. Enfoque en: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Metodologías ágiles (<em>Scrum, Kanban</em>, etc.)  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cultura de innovación permanente  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Adaptación ágil al cambio 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
              p Promueve organizaciones resilientes y competitivas. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/23.png")
            .col-lg-7
              h5 Nuevas competencias profesionales
              p El capital humano es clave para la transformación digital. Se requieren habilidades como: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Pensamiento crítico 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Adaptabilidad al cambio 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Colaboración interdisciplinaria 
              p Estas competencias impulsan el cambio desde dentro de la organización.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1  
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En 2024, las organizaciones enfrentan el desafío de conectar la innovación tecnológica con el desarrollo de habilidades humanas. La convergencia entre lo digital y lo humano ha generado una transformación profunda en los modelos de negocio, los procesos operativos y las competencias profesionales.
        p(data-aos="fade-left") Las tendencias actuales no solo modifican el cómo se trabaja, sino también quiénes lo hacen y bajo qué principios éticos. A continuación, se presentan cinco tendencias clave que están marcando la evolución digital empresarial, acompañadas de sus implicaciones prácticas y ejemplos ilustrativos:
    

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Revolución de la inteligencia artificial (IA)")
            p Redefine el procesamiento de datos y la toma de decisiones. El 70 % de las empresas la considera una ventaja competitiva. Requiere formación especializada y gestión ética de datos. 
            p <b>Ejemplo</b>: una cadena de supermercados utiliza IA para predecir la demanda de productos frescos según el clima y eventos locales, optimizando pedidos y reduciendo desperdicios.

          .div(titulo="Automatización de procesos empresariales")
            p Libera al personal de tareas repetitivas, permitiendo que se enfoquen en actividades de mayor valor agregado como la creatividad y el análisis. Implica cambios en los perfiles profesionales. 
            p <b>Ejemplo</b>: una empresa contable emplea RPA para automatizar la facturación y los reportes, permitiendo a los empleados dedicarse a asesoría financiera personalizada.
    
          .div(titulo="Ciberseguridad como prioridad estratégica")
            p La protección de los activos digitales es esencial. Requiere formación continua y una cultura organizacional enfocada en la seguridad. 
            p <b>Ejemplo</b>: una firma legal implementa doble autenticación, capacita a su personal y realiza simulacros de ciberataques, fortaleciendo la confianza del cliente y el cumplimiento normativo.

          .div(titulo="Integración entre tecnología y habilidades humanas")
            p El éxito digital depende de equipos multidisciplinarios que combinen capacidades técnicas con soft skills como comunicación, empatía y adaptabilidad.  
            p <b>Ejemplo</b>: una <em>startup</em> tecnológica crea una app de bienestar laboral con equipos mixtos (ingenieros, UX, psicólogos), logrando alta funcionalidad y diseño centrado en el usuario.

          .div(titulo="Desafíos éticos y sociales en la transformación digital")
            p El uso de la tecnología debe estar guiado por principios de equidad, transparencia e inclusión. Es fundamental trabajar en la reducción de la brecha digital.   
            p <b>Ejemplo</b>: una plataforma educativa mejora su accesibilidad para personas con discapacidad visual e impulsa la alfabetización digital en zonas rurales, promoviendo el acceso equitativo al conocimiento.

    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Estas tendencias evidencian que la transformación digital no es un hecho puntual, sino un proceso evolutivo y estratégico, que requiere un enfoque equilibrado entre tecnología, ética y personas. La ventaja competitiva sostenible ya no se basa solo en la innovación técnica, sino en la capacidad de integrar valores humanos con capacidades digitales para adaptarse, aprender y liderar en un mundo en constante cambio.

        
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ceipa.edu.co/index.php/lupa/article/view/560" target="_blank" rel="noopener noreferrer") Montoya, C. A. (2011). Los sistemas de información como herramienta para la competitividad organizacional. Lupa Empresarial. Recuperado de  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.umng.edu.co/bitstreams/64925a4d-6bb6-4148-b333-2190bf92c71a/download" target="_blank" rel="noopener noreferrer") Sierra, J.R. (2020). El sistema de información gerencial SIG, como herramienta de gestión estratégica y toma de decisiones en la Administración Pública. Recuperado de 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.unal.edu.co/handle/unal/9526" target="_blank" rel="noopener noreferrer") Rodríguez Ahumada, R. (2011). Diseño de un sistema de información gerencial alineado con la orientación estratégica de la empresa para el soporte en la toma de decisiones a nivel estratégico. Recuperado de 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dx.doi.org/10.15517/isucr.v19i39.34067" target="_blank" rel="noopener noreferrer") Alvarado, Richard, Acosta, Karla, & Buonaffina, Yesenia V, Mata de. (2018). Necesidad de los sistemas de información gerencial para la toma de decisiones en las organizaciones. InterSedes , 19 (39), 17-31. Recuperado de 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dx.doi.org/10.22458/rna.v13i1.4236 " target="_blank" rel="noopener noreferrer") Morera Carballo, Mario. (2022). Los sistemas de información gerencial y su evolución hacia la cuarta revolución industrial. Revista Nacional de Administración , 13 (1), e4236. Recuperado de 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ce.entel.cl/articulos/sistemas-de-informacion-administrativa/" target="_blank" rel="noopener noreferrer") Centro de Estudios Entel. (2024). Conoce los sistemas de información administrativa. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.obsbusiness.school/blog/tipos-de-sistemas-de-informacion-mas-utilizados-por-las-empresas" target="_blank" rel="noopener noreferrer") OBS Business School. (2024). Tipos de sistemas de información más utilizados por las empresas. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ecuador.unir.net/actualidad-unir/sistemas-informacion-empresarial/" target="_blank" rel="noopener noreferrer") Universidad Internacional de La Rioja (UNIR). (2025). Sistemas de Información Empresarial: Conceptos, clasificación y ejemplos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Inteligencia_empresarial" target="_blank" rel="noopener noreferrer") Wikipedia. (2025). Inteligencia empresarial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Administraci%C3%B3n_de_las_tecnolog%C3%ADas_de_la_informaci%C3%B3n " target="_blank" rel="noopener noreferrer") Wikipedia. (2025). Administración de las tecnologías de la información. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://clientify.com/blog/marketing/sistemas-de-informacion" target="_blank" rel="noopener noreferrer") Clientify. (2024). Sistemas de información en empresas: definición, tipos y ejemplos. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ecuador.unir.net/actualidad-unir/sistemas-informacion-empresarial/" target="_blank" rel="noopener noreferrer") Universidad Internacional de La Rioja (UNIR). (2025). Sistemas de Información Empresarial: Conceptos, clasificación y ejemplos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://virtual.uniminuto.edu/blog/el-impacto-de-los-sistemas-de-la-informacion-en-la-gestion-empresarial/" target="_blank" rel="noopener noreferrer") Universidad Minuto de Dios. (2023). El impacto de los sistemas de la información en la gestión empresarial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech" target="_blank" rel="noopener noreferrer") McKinsey & Company. (2024). McKinsey technology trends outlook 2024. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.tendencias.kpmg.es/2024/01/5-claves-transformacion-digital-empresas-en-2024/" target="_blank" rel="noopener noreferrer") KPMG. (2024). Las 5 claves para la transformación digital de las empresas en 2024. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.walkme.com/blog/digital-transformation-trends/ " target="_blank" rel="noopener noreferrer") WalkMe. (2024). Top 18 Digital Transformation Trends. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.tdscode.dev/blog/introduccion-a-los-sistemas-de-informacion-que-son-y-como-influyen-en-la-gestion-empresarial" target="_blank" rel="noopener noreferrer") DSCode. (2023). Introducción a los sistemas de información: Qué son y cómo influyen en la gestión empresarial. 


         

          

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=1F1nRyyswSk  " target="_blank" rel="noopener noreferrer") U.C. (2020, 10 de septiembre). Gestión de sistemas empresariales. Universidad Continental [Vídeo] YouTube.       



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
