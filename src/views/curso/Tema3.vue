<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Sistemas de información para la gestión organizacional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-8.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            p(data-aos="fade-left").mb-4 A continuación, se  explora el papel fundamental de los sistemas de información en el entorno empresarial actual, destacando su impacto en la toma de decisiones, la integración organizacional y la transformación digital.
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Aplicaciones empresariales: características e integración en la organización
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") Las aplicaciones empresariales se han convertido en herramientas fundamentales para optimizar procesos y mejorar la eficiencia organizacional. Estas soluciones de software automatizan tareas, facilitan la comunicación entre departamentos y proporcionan información en tiempo real, lo que permite tomar decisiones más informadas y ágiles.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Se caracterizan por su escalabilidad, adaptabilidad e integración con otros sistemas. Gracias a su diseño modular, las organizaciones pueden implementar solo los componentes que necesitan, lo que reduce costos y mejora la eficiencia operativa. Además, suelen ofrecer interfaces intuitivas y personalizables que facilitan su adopción y reducen la resistencia al cambio.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") La integración de estas aplicaciones es crucial para eliminar silos de información y fomentar una mayor colaboración. Esto permite obtener una visión integral de las operaciones y adaptarse rápidamente a los cambios del entorno. Un ejemplo de esta integración es la implementación de un sistema <b>ERP (<em>Enterprise Resource Planning</em>)</b> que centraliza recursos humanos, finanzas y operaciones, reduciendo redundancias y mejorando la precisión de los datos.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Además, el desarrollo de habilidades blandas —como la adaptabilidad, la comunicación efectiva y el pensamiento crítico— es esencial para aprovechar al máximo estas herramientas. Los profesionales que comprenden y utilizan las aplicaciones empresariales están mejor preparados para liderar procesos de transformación digital e impulsar una cultura de innovación.
    
    .titulo-figura.mb-4
      h5 Tabla 3.
      span Aplicaciones empresariales: tipos, definiciones y ejemplos
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-9 Tipo de Aplicación Empresarial
            th.bg-color-9 Definición
            th.bg-color-9 Ejemplos
        tbody.bg-color-white
          tr
            td ERP <em>(Enterprise Resource Planning)</em>
            td Sistema que integra procesos empresariales clave como finanzas, recursos humanos y cadena de suministro en una única plataforma.
            td SAP, Oracle ERP Cloud, Microsoft Dynamics 365
          tr
            td CRM (<em>Customer Relationship Management</em>)
            td Software para gestionar relaciones con clientes desde la captación hasta la fidelización.
            td Salesforce, Zoho CRM, HubSpot
          tr
            td SCM (<em>Supply Chain Management</em>)
            td Herramienta para gestionar y optimizar la cadena de suministro, desde la adquisición hasta la entrega.
            td Infor SCM, SAP SCM, Oracle SCM Cloud
          tr
            td BI (<em>Business Intelligence)</em>
            td Conjunto de herramientas para recolectar, analizar y presentar datos estratégicos.
            td Power BI, Tableau, Qlik Sense
          tr
            td HRM (<em>Human Resource Management</em>)
            td Sistema para gestionar el talento humano: contratación, capacitación, evaluación y nómina.
            td Workday, BambooHR, ADP
          tr
            td Gestión de proyectos
            td Software que facilita la planificación, ejecución y seguimiento de proyectos.
            td Asana, Trello, Microsoft Project
          tr
            td Gestión financiera
            td Aplicaciones para registrar, procesar y analizar finanzas: presupuestos, ingresos y gastos.
            td QuickBooks, Xero, FreshBooks
          tr
            td Plataformas de colaboración
            td Herramientas de comunicación y colaboración en tiempo real, especialmente útiles en entornos virtuales.
            td Microsoft Teams, Slack, Google Workspace
          tr
            td Gestión de relaciones con proveedores
            td Sistemas para optimizar adquisiciones y relaciones contractuales con proveedores.
            td SAP Ariba, Coupa, Jaggaer

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] CRM y ERP: fundamentos, funcionalidades y beneficios estratégicos

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/5.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En el entorno empresarial contemporáneo, la eficiencia operativa y la gestión efectiva de las relaciones con los clientes son pilares fundamentales para lograr la competitividad. En este contexto, los sistemas ERP (<em>Enterprise Resource Planning</em>) y CRM (<em>Customer Relationship Management</em>) emergen como herramientas estratégicas. Al integrarse, ofrecen una visión holística de la organización y potencian su capacidad de respuesta ante un mercado cada vez más dinámico.
    
    h2.mb-5(data-aos="fade-left") Fundamentos y funcionalidades

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") El sistema ERP se centra en la integración de los procesos internos de la empresa, abarcando áreas como finanzas, recursos humanos, producción y logística. Su propósito es optimizar la gestión de recursos y mejorar la eficiencia operativa a través de la automatización y centralización de la información (Addvantit, 2023).
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Por su parte, el CRM se orienta a la gestión de interacciones con los clientes, facilitando la recopilación y el análisis de datos para mejorar la experiencia del cliente y construir relaciones sostenibles. Entre sus funcionalidades destacan la gestión de contactos, el seguimiento de oportunidades de venta, la automatización del marketing y el soporte al cliente (Formación Cámara Bilbao, 2025).
    
    h2.mb-5(data-aos="fade-left") Beneficios estratégicos

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") La implementación conjunta de ERP y CRM genera beneficios significativos. Su integración permite una visión unificada de la organización, mejora la toma de decisiones y potencia la eficiencia operativa. Además, facilita la personalización de estrategias comerciales, gracias al acceso a datos precisos y actualizados sobre los clientes (QualitaHub, 2025).
    
        .bg-color-7.p-4(data-aos="fade-left")
          p.mb-0 Un ejemplo práctico de esta sinergia es el de una empresa manufacturera que, tras implementar un sistema ERP, logró optimizar su cadena de suministro, reduciendo costos y tiempos de producción. De manera simultánea, el uso de un CRM permitió elevar la satisfacción del cliente al ofrecer un servicio más personalizado y eficaz.
    
    h2(data-aos="fade-left") Desarrollo de habilidades blandas
    p.mb-5 Para maximizar el impacto de estos sistemas, los profesionales deben fortalecer habilidades blandas como la adaptabilidad, la comunicación efectiva y el pensamiento crítico. Estas competencias son clave para liderar procesos de transformación digital, gestionar el cambio tecnológico y fomentar una cultura de innovación y mejora continua.

    .titulo-figura.mb-4
      h5 Tabla 4.
      span Comparación: ERP vs. CRM
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-9 Aspecto
            th.bg-color-9 ERP (<em>Enterprise Resource Planning</em>)
            th.bg-color-9 CRM (<em>Customer Relationship Management</em>)
        tbody.bg-color-white
          tr
            td Objetivo principal
            td Optimizar procesos internos y la gestión de recursos organizacionales.
            td Mejorar la relación con los clientes y aumentar las ventas.
          tr
            td Áreas de aplicación
            td Finanzas, recursos humanos, logística, producción, compras.
            td Marketing, ventas, atención al cliente, fidelización.
          tr
            td Tipo de información gestionada
            td Datos operativos y financieros internos.
            td Datos de clientes, historial de compras, preferencias.
          tr
            td Beneficio estratégico
            td Reducción de costos operativos y aumento de eficiencia.
            td Incremento de ingresos mediante atención personalizada.
          tr
            td Impacto en la organización
            td Automatiza y centraliza procesos clave.
            td Personaliza las estrategias comerciales y fidelización.
          tr
            td Ejemplos de software
            td SAP, Oracle ERP Cloud, Microsoft Dynamics 365.
            td Salesforce, HubSpot, Zoho CRM.
          tr
            td Integración conjunta
            td Ofrece una base sólida de datos internos para análisis y planificación.
            td Complementa al ERP con una visión centrada en el cliente.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Casos de éxito en la implementación de ERP y CRM en diferentes sectores
              
    p.mb-4 La transformación digital ha impulsado a organizaciones de diversos sectores a adoptar sistemas ERP (<em>Enterprise Resource Planning</em>) y CRM (<em>Customer Relationship Management</em>) para optimizar sus operaciones y fortalecer las relaciones con los clientes. A continuación, se presentan casos destacados de implementación exitosa, ilustrando cómo estas herramientas pueden adaptarse a contextos específicos y generar impactos positivos en la gestión organizacional.

    .bg-full-width.bg-color-12
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Manufactura
                p.text-center Una empresa colombiana del sector electrónico implementó un ERP para integrar procesos productivos y logísticos. Resultado: mejora de la eficiencia, calidad del producto y toma de decisiones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Financiero
                p.text-center <em>Discover Financial Services</em> migró a un ERP en la nube para consolidar sistemas. Resultado: visión unificada del rendimiento, mayor eficiencia y mejor planificación financiera.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Retail
                p.text-center Una cadena de tiendas implementó un ERP para optimizar la cadena de suministro. Resultado: automatización de procesos, inventario más preciso y mejor experiencia del cliente.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Salud
                p.text-center Alephoo, <em>software</em> latinoamericano, fue implementado en clínicas y hospitales. Resultado: digitalización de procesos, eficiencia operativa y mejora en la atención al paciente.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Automotor
                p.text-center Wecaria integró una aplicación y un CRM para gestionar talleres y flotas. Resultado: aumento de eficiencia operativa y mejora en la calidad del servicio, tanto en flotas públicas como privadas.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema3/8.png', alt='')

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Estos casos de éxito demuestran que la implementación adecuada de sistemas ERP y CRM transforma profundamente las operaciones organizacionales. La clave del éxito radica en una planificación cuidadosa, la adaptación a las necesidades específicas de cada sector y el compromiso de todos los niveles de la empresa.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Para los estudiantes de Administración de Empresas, estos ejemplos ofrecen valiosas lecciones sobre la importancia de la transformación digital y brindan herramientas conceptuales y prácticas para liderar procesos de cambio en sus futuras trayectorias profesionales.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.35381/gep.v8i9.52" target="_blank" rel="noopener noreferrer") De-Armas, L. M., & Chirino-García, R. C. (2023). Sistema de información gerencial como estrategia de éxito organizacional en las empresas del sector salud. Gestio et Productio, 5(9). 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.innovaciondigital360.com/software/integracion-de-aplicaciones-empresariales-que-significa-y-los-retos-para-las-empresas/" target="_blank" rel="noopener noreferrer") InnovaciónDigital360. (2023). Integración de aplicaciones empresariales: qué significa y los retos para las empresas. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.creative-tim.com/blog/educational-tech/top-enterprise-application-examples-for-every-organization/ " target="_blank" rel="noopener noreferrer") Creative Tim. (2023). Top 10 Enterprise Application Examples For Every Organization. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://axial-erp.co/estudios-de-caso-implementaciones-exitosas-de-erp-y-lecciones-aprendidas/" target="_blank" rel="noopener noreferrer") Axial ERP. (s.f.). Estudios de Caso: Implementaciones exitosas de ERP y lecciones aprendidas.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.oracle.com/mx/erp/what-is-erp/erp-implementation-case-study/" target="_blank" rel="noopener noreferrer") Oracle México. (2023). 3 casos prácticos de implementación de sistemas de ERP. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ticnus.com/noticias/erp-y-crm/casos-de-exito-en-la-implementacion-de-erp-mejora-la-eficiencia-empresarial-y-aumenta-la-rentabilidad/ " target="_blank" rel="noopener noreferrer") TICNUS. (2024). Casos de Éxito en la Implementación de ERP: Mejora la Eficiencia Empresarial y Aumenta la Rentabilidad. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Alephoo" target="_blank" rel="noopener noreferrer") Wikipedia. (2025). Alephoo. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elpais.com/economia/horizonte-4-0/2024-12-05/gigantes-a-hombros-de-gigantes.html" target="_blank" rel="noopener noreferrer") El País. (2024). Gigantes a hombros de gigantes.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.incotec.es/blog/como-gestionar-innovacion-empresarial/" target="_blank" rel="noopener noreferrer") Incotec. (2023). Cómo gestionar la innovación empresarial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=0lbsqFeJTms" target="_blank" rel="noopener noreferrer") Ministerio TIC. (2021, 3 de agosto). Plan estratégico de tecnologías de la información-Fase 2. Ministerio TIC Colombia [Vídeo] YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
