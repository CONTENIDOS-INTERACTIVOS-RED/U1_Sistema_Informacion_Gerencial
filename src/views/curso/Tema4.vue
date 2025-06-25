<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Estrategias para la implementación de sistemas de información'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") En el entorno empresarial actual, caracterizado por la constante evolución tecnológica y la creciente competitividad, la implementación efectiva de sistemas de información (SI) se ha convertido en un factor determinante para el éxito organizacional. Estos sistemas no solo permiten automatizar procesos y gestionar datos de forma eficiente, sino que también constituyen una base sólida para la toma de decisiones estratégicas.
    
        .bg-color-3.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La adopción de SI requiere una planificación cuidadosa y estrategias bien definidas que consideren las particularidades de cada organización. Es esencial alinear los sistemas con los objetivos estratégicos institucionales y garantizar el compromiso de la alta dirección para asegurar su éxito.
        p La aplicación sectorial de estrategias de implementación es: 
    
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-9
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/3.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="15%" y="74.5%" numero="+")
                h5 Salud
                p Implementación de sistemas de información gerencial como herramienta para mejorar la calidad del servicio y la satisfacción del usuario (De-Armas y Chirino-García, 2023).
    
              .bg-color-white.box-shadow.p-3(x="44%" y="74.5%" numero="+")
                h5 Educación
                p Integración de tecnologías emergentes como Big Data para analizar indicadores de eficiencia y optimizar la gestión institucional y la calidad educativa (Baig et al., 2020).
    
              .bg-color-white.box-shadow.p-3(x="90.5%" y="74.5%" numero="+")
                h5 Gestión informática
                p Uso de SI para la gestión de recursos informáticos, promoviendo la automatización de procesos y el fortalecimiento de la infraestructura tecnológica (Romero et al., 2023).

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estos ejemplos subrayan la <b>necesidad de adaptar las estrategias</b> de implementación de SI según las características y demandas de cada sector.
    
    h2.mb-5(data-aos="fade-left") Elementos clave en la implementación de SI

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") Para una gestión exitosa de estos procesos, es fundamental que los futuros profesionales en Administración de Empresas desarrollen competencias específicas en torno a los siguientes elementos:
    
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Evaluación de necesidades organizacionales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Selección de tecnologías adecuadas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Gestión del cambio.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Capacitación del personal.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Desarrollo de habilidades blandas como el liderazgo, la comunicación efectiva y la adaptabilidad.
        p Al finalizar esta unidad, se espera que los estudiantes sean capaces de diseñar e implementar estrategias de SI alineadas con los objetivos estratégicos de las organizaciones, contribuyendo así a su competitividad y sostenibilidad en el mercado actual.


    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Factores críticos para una implementación efectiva de SI en la empresa

    p.mb-4 La implementación efectiva de sistemas de información en las organizaciones es un proceso complejo que exige una planificación meticulosa y la atención a múltiples factores críticos de éxito. A continuación, se describen los principales elementos identificados en estudios recientes, organizados para facilitar su comprensión:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Compromiso de la alta dirección")
            p Esencial para asignar recursos, definir objetivos claros y liderar el cambio. La falta de apoyo puede generar resistencia y fallas en la implementación.
    
          .div(titulo="Participación de los usuarios finales")
            p Involucrarlos desde el inicio permite adaptar el SI a las necesidades reales, mejorar su aceptación y reducir la resistencia al cambio.
    
          .div(titulo="Gestión del cambio organizacional")
            p Implica comunicar beneficios, capacitar al personal y gestionar expectativas. La transformación de procesos requiere un enfoque estructurado de cambio.
    
          .div(titulo="Planificación y evaluación de requerimientos")
            p Una planificación detallada evita desviaciones en costos, plazos y alcance. Identificar requisitos y riesgos anticipadamente asegura la alineación con los objetivos.

          .div(titulo="Capacitación y desarrollo de competencias")
            p La formación continua mejora la eficiencia en el uso del SI. Debe adaptarse a los distintos perfiles de usuarios y fomentar habilidades técnicas y <em>soft skills</em>.
    
          .div(titulo="Evaluación y monitoreo continuo")
            p Permite medir el desempeño del sistema, detectar oportunidades de mejora y mantener la alineación con los objetivos estratégicos. Se evalúan calidad del sistema, satisfacción del usuario y beneficios netos.
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white La atención a estos factores resulta esencial para garantizar el éxito de los sistemas de información, ya que contribuyen de forma directa al cumplimiento de los objetivos estratégicos y al fortalecimiento de la competitividad organizacional.
    
    h2(data-aos="fade-left") Estudio de caso: implementación de un sistema de información en una empresa de logística
    p.mb-5 Este estudio de caso presenta la experiencia de TransLogística S.A.S., una empresa dedicada al transporte de mercancías a nivel nacional, en la implementación de un Sistema de Información (SI) con el objetivo de optimizar la trazabilidad de envíos, mejorar la atención al cliente y reducir costos operativos. El proyecto contempló la implementación de un sistema ERP integrado con un módulo CRM.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/7.png")
            .col-lg-7
              h5 Compromiso de la alta dirección
              p La dirección participó activamente desde la planeación. Se asignó presupuesto, se definieron indicadores de éxito y se creó un comité estratégico para el seguimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/8.png")
            .col-lg-7
              h5 Participación de los usuarios finales
              p Se organizaron grupos focales por áreas operativas. Los usuarios participaron en el diseño del sistema, lo que incrementó el sentido de pertenencia y disminuyó la resistencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/9.png")
            .col-lg-7
              h5 Gestión del cambio organizacional
              p Se ejecutó un plan de cambio que incluyó comunicaciones internas, sesiones informativas y capacitaciones con ejemplos reales de mejora, como la reducción en tiempos de entrega.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/10.png")
            .col-lg-7
              h5  Planificación y evaluación de requerimientos
              p Se realizó un diagnóstico de procesos internos y se definieron requerimientos funcionales y técnicos antes de seleccionar el sistema, evitando módulos innecesarios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/11.png")
            .col-lg-7
              h5 Capacitación y desarrollo de competencias
              p Se ofrecieron capacitaciones específicas por rol, acompañadas de manuales y simulaciones. Se promovió el trabajo colaborativo y el desarrollo de <em>soft skills</em>.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/12.png")
            .col-lg-7
              h5 Evaluación y monitoreo continuo
              p Se establecieron KPIs para monitoreo posterior. En el primer semestre se evidenció una mejora del 25 % en eficiencia operativa y un aumento del 30 % en la satisfacción del cliente.

    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Este caso demuestra que el éxito en la implementación de un sistema de información no depende únicamente de la tecnología adoptada, sino del enfoque estratégico y humano aplicado. En TransLogística S.A.S., la participación activa de todos los niveles, la planificación rigurosa y la gestión del cambio organizacional fueron los pilares fundamentales que aseguraron resultados positivos y medibles.
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Retos organizacionales y soluciones en procesos de transformación digital

    .row.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/14.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") La transformación digital representa un proceso complejo que implica cambios profundos en la cultura, la estructura y los procesos de las organizaciones. No se trata únicamente de incorporar nuevas tecnologías, sino de una reconfiguración integral que exige una gestión eficaz del cambio, una visión estratégica clara y la actualización continua de competencias. A continuación, se presentan los principales retos organizacionales asociados a este proceso, así como las soluciones más efectivas para abordarlos:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Resistencia al cambio cultural")
            p La adopción de nuevas tecnologías suele enfrentar resistencia por parte de los empleados, quienes pueden sentirse inseguros ante la posibilidad de perder sus empleos o enfrentar dificultades para adaptarse a los nuevos sistemas. Para mitigar esta resistencia, es fundamental implementar programas de formación continua y comunicar claramente los beneficios de la transformación digital, fomentando una cultura organizacional abierta al cambio.
    
          .div(titulo="Integración de sistemas heredados")
            p Muchas organizaciones cuentan con sistemas heredados que no son compatibles con las nuevas tecnologías, lo que dificulta la integración y puede generar ineficiencias. Una solución efectiva consiste en adoptar arquitecturas modulares y utilizar interfaces de programación de aplicaciones (APIs) que permitan la interoperabilidad entre sistemas antiguos y nuevos sin necesidad de reemplazarlos por completo.
    
          .div(titulo="Brechas en habilidades digitales")
            p La falta de competencias digitales entre los empleados puede limitar el aprovechamiento de las nuevas tecnologías. Para superar esta brecha, es esencial invertir en programas de capacitación y desarrollo de habilidades digitales. Además, se debe fomentar una cultura de aprendizaje continuo, que permita al personal adaptarse a los cambios tecnológicos y enfrentar los desafíos emergentes del entorno digital.
    
          .div(titulo="Ciberseguridad y protección de datos")
            p La digitalización aumenta la exposición a riesgos de ciberseguridad y vulnerabilidades en la protección de datos. Es necesario implementar políticas de seguridad robustas, realizar auditorías periódicas para detectar fallas o debilidades, y educar a los empleados sobre prácticas seguras. Estas medidas son clave para proteger la información sensible y mantener la confianza de los clientes y usuarios.

          .div(titulo="Liderazgo y visión estratégica")
            p La falta de liderazgo comprometido y una visión estratégica clara pueden obstaculizar el éxito de la transformación digital. Los líderes deben asumir un rol activo en el proceso, definiendo objetivos claros, alineando la transformación con la estrategia organizacional y motivando a los empleados a participar activamente en el cambio. El liderazgo efectivo es un factor decisivo para guiar a la organización hacia una cultura digital sólida y sostenible.
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Abordar estos retos no implica únicamente soluciones tecnológicas. Se requiere un enfoque integral que combine el desarrollo del capital humano, el fortalecimiento del liderazgo organizacional y la creación de una cultura institucional receptiva al cambio. Al aplicar estas estrategias de forma coordinada, las organizaciones estarán en condiciones de avanzar hacia una transformación digital exitosa, mejorar su competitividad y adaptarse con agilidad a las demandas del entorno actual.
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Integración de sistemas en la empresa digital: interoperabilidad y alineación estratégica

    p.mb-4 En la era digital, las empresas enfrentan el desafío de integrar diversos sistemas tecnológicos con el fin de mejorar su eficiencia operativa y alcanzar una ventaja competitiva sostenible. La interoperabilidad y la alineación estratégica son componentes esenciales para lograr una integración tecnológica efectiva que responda a las necesidades dinámicas del entorno empresarial.

     TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Interoperabilidad" :icon="require('@/assets/bullets/4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-lg-2
            h4 Interoperabilidad
            p Se refiere a la capacidad de diferentes sistemas y organizaciones para trabajar conjuntamente de manera efectiva, compartiendo información y procesos sin restricciones. Esta capacidad facilita la integración de nuevas tecnologías, promoviendo la innovación y aumentando la competitividad organizacional.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/17.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Alineación estratégica" :icon="require('@/assets/bullets/5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-lg-2
            h4 Alineación estratégica
            p Implica que las decisiones tecnológicas estén directamente vinculadas con la visión, misión y objetivos estratégicos de la organización. Una arquitectura empresarial bien definida permite estructurar y gestionar tanto la infraestructura tecnológica como los procesos de negocio de forma coherente.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/18.png', alt='')

    .bg-full-width.bg-color-8
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            h2(data-aos="fade-left") Ejemplo práctico
            p(data-aos="fade-left") Una empresa del sector logístico logró integrar su sistema de gestión de almacenes con su plataforma de atención al cliente mediante el uso de APIs. Esta interoperabilidad permitió que los operadores accedieran a información sobre inventarios, rutas de distribución y solicitudes de clientes desde un único sistema. Como resultado, se redujeron los tiempos de respuesta en un 35 % y se mejoró significativamente la satisfacción del cliente.
            h2(data-aos="fade-left") Desarrollo de habilidades blandas
            p(data-aos="fade-left") El proceso de integración de sistemas no solo tiene un impacto técnico, sino también organizacional, ya que fomenta el desarrollo de habilidades blandas como la colaboración interdisciplinaria, la resolución de problemas y la comunicación efectiva. Estas competencias son esenciales para los administradores que lideran proyectos tecnológicos, ya que contribuyen a su sostenibilidad en el tiempo y a la cohesión de los equipos involucrados.
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Inteligencia de negocios y análisis de datos
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Inteligencia de negocios y análisis de datos, donde se aborda el papel fundamental de la inteligencia empresarial y el análisis de datos en la gestión moderna.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Inteligencia de negocios y análisis de datos.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/20.png', alt='')
        
   







    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.abacademies.org/articles/MULTIPLE-CORRESPONDENCE-ANALYSIS-OF-CRITICAL-SUCCESS-FACTORS-FOR-ENTERPRISE-RESOURCE-PLANNING-SYSTEM-IMPLEMENTATION-1532-5806-23-3-190.pdfAllied Business Academies" target="_blank" rel="noopener noreferrer") Epizitone, A., & Olugbara, O. O. (2020). Multiple correspondence analysis of critical success factors for enterprise resource planning system implementation. Journal of Management Information and Decision Sciences, 23(3), 176-190. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://luceit.com/blog/innovacion-y-tecnologia/los-retos-mas-comunes-en-la-transformacion-digital-de-las-empresas-y-como-superarlos/ " target="_blank" rel="noopener noreferrer") Luce IT. (2024). Los retos más comunes en la transformación digital de las empresas (y cómo superarlos). 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://datacloud-latam.com/retos-transformacion-digital/ " target="_blank" rel="noopener noreferrer") DataCloud Latam. (2024.). Retos de la transformación digital: cuáles son los desafíos más comunes y cómo afrontarlos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.wearedrew.co/es/tech/software-insights/tecnologia/desafios-de-la-transformacion-digital-como-superarlos-en-2025" target="_blank" rel="noopener noreferrer") We Are Drew. (2025). Desafíos de la transformación digital: cómo superarlos en 2025. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elcapitalfinanciero.com/transformacion-digital-en-el-sector-salud-retos-de-ciberseguridad/ " target="_blank" rel="noopener noreferrer") El Capital Financiero. (2025). Transformación digital en el sector salud: Retos de ciberseguridad. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.emerald.com/insight/content/doi/10.1108/dts-08-2023-0061/full/html" target="_blank" rel="noopener noreferrer") Emerald Insight. (2023). Organizational digital transformation: from evolution to future trends. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://hrdtoolkit.org/interoperabilidad/" target="_blank" rel="noopener noreferrer") HRD Toolkit. (2025). Interoperabilidad: ¿Qué es y cómo implementarla en tu organización? 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://fundacionlazarus.org/impacto-de-la-interoperabilidad-en-la-innovacion/" target="_blank" rel="noopener noreferrer") Fundación Lazarus. (2024). Impacto de la interoperabilidad en la innovación. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones describe mejor un sistema ERP?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Herramienta para gestionar las redes sociales de la empresa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Sistema que integra y automatiza los procesos internos de una organización',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Plataforma de videoconferencias para equipos de trabajo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Programa que traduce contenido comercial a diferentes idiomas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué es Business Intelligence (BI)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Proceso de diseño de productos atractivos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Conjunto de tecnologías para transformar datos en información útil para la toma de decisiones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Plataforma de facturación electrónica',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aplicación para reclutamiento de personal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Cuál es una característica del análisis predictivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Utiliza datos históricos para anticipar comportamientos futuros',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Se basa exclusivamente en encuestas manuales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Solo se aplica a empresas financieras',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Es útil únicamente para recursos humanos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes es un ejemplo de herramienta de visualización de datos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Excel sin macros',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tableau',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Outlook',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'WhatsApp Business',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué permite un sistema CRM en una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Mejorar la relación con los clientes mediante seguimiento y personalización',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Automatizar procesos contables',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Administrar inventarios físicos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Controlar la seguridad informática interna ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
