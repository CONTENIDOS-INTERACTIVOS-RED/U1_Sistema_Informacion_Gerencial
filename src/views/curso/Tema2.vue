<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Sistemas de información y ventaja competitiva'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En un entorno empresarial marcado por la competencia constante y la transformación acelerada, las organizaciones buscan estrategias que les permitan diferenciarse y mantenerse vigentes. En este contexto, los Sistemas de Información (SI) se han consolidado como herramientas esenciales para lograr y sostener una ventaja competitiva sostenible.
        p(data-aos="fade-left") Más allá de facilitar la automatización de procesos y aumentar la eficiencia operativa, los SI ofrecen una base sólida para la toma de decisiones estratégicas. Mediante la integración y el análisis de datos relevantes, las organizaciones pueden:
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 Detectar nuevas oportunidades de mercado

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Optimizar la asignación de recursos
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 Responder con agilidad a las demandas del entorno
    
    p.mb-4 Uno de los aportes más significativos de los SI es su capacidad para generar ventajas difíciles de imitar, lo que contribuye al desarrollo de capacidades distintivas. Estas ventajas se manifiestan en:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La personalización de productos y servicios.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La mejora en la relación con los clientes.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La innovación en modelos de negocio.

        p(data-aos="fade-left") Cuando estas capacidades están respaldadas por SI bien diseñados, las empresas pueden posicionarse con propuestas de valor únicas, ganando terreno competitivo frente a sus rivales. Asimismo, la alineación estratégica entre los SI y los objetivos organizacionales es un factor crítico. Un sistema de información que está integrado con la visión y misión de la empresa actúa como un catalizador de transformación y crecimiento, impulsando no solo las operaciones actuales, sino también la evolución futura de la organización.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Modelos de fuerzas competitivas y su relación con TI

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.p-5.mb-3(data-aos="fade-left")
          p.mb-0 En el entorno empresarial actual, hablar de competencia es hablar de estrategia. Uno de los marcos más reconocidos para analizar cómo una empresa puede destacar frente a sus rivales es el modelo de las cinco fuerzas de Michael Porter, el cual permite identificar las amenazas y oportunidades que existen en un sector industrial.

        p(data-aos="fade-left") Aunque el modelo fue propuesto en los años 80, su vigencia sigue intacta. Sin embargo, hoy en día, la tecnología —especialmente los sistemas de información— está redefiniendo el mapa competitivo, influyendo directamente en cada una de estas cinco fuerzas.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Poder de negociación de los clientes
              p Las TI permiten recopilar y analizar datos sobre comportamientos y preferencias, lo que facilita la personalización de productos y servicios, fortaleciendo la fidelización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Poder de los proveedores
              p Plataformas tecnológicas de gestión de compras y <em>supply chain</em> permiten diversificar fuentes, mejorar la trazabilidad y negociar en mejores términos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Amenaza de nuevos entrantes
              p La inversión en tecnologías avanzadas (como IA y automatización) eleva las barreras de entrada, dificultando que nuevos competidores igualen la eficiencia y la innovación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5  Amenaza de productos sustitutos
              p La innovación constante mediante TI hace que los productos y servicios sean más atractivos y diferenciados, reduciendo el riesgo de sustitución.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7
              h5 Rivalidad entre competidores existentes
              p Las estrategias digitales —como <em>e-commerce</em>, analítica avanzada y experiencia de usuario— permiten diferenciarse y ganar cuota de mercado en sectores altamente competitivos.
    
    h2(data-aos="fade-left") Las TI como ventaja estratégica
    p.mb-5 Las Tecnologías de la Información no son solo herramientas de apoyo operativo. Utilizadas estratégicamente, se convierten en fuentes reales de ventaja competitiva. No se trata únicamente de implementar sistemas modernos, sino de comprender cómo estos sistemas impactan directamente en la toma de decisiones, la experiencia del cliente y el modelo de negocio. Ejemplos destacados:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Amazon" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Amazon
            p Ha hecho de la tecnología su pilar estratégico, integrando desde la logística inteligente hasta la personalización de la experiencia del usuario. Esto le permite anticiparse a las necesidades del mercado, optimizar su cadena de suministro y ofrecer recomendaciones precisas que fidelizan al cliente.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Rappi" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Rappi
            p Ha desarrollado una plataforma digital integral que conecta comercios, repartidores y usuarios en tiempo real. Su estructura tecnológica le permite operar de forma eficiente, escalable y con un enfoque claro en el cliente, adaptándose con rapidez a nuevos servicios y dinámicas urbanas.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='')
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white El modelo de Porter no ha perdido relevancia, sino que se potencia cuando se integra con las herramientas digitales actuales. En este nuevo escenario, el éxito empresarial exige formar profesionales capaces de dominar el lenguaje de la estrategia y de la tecnología, y de traducir el potencial de las TI en acciones concretas para fortalecer cada una de las fuerzas competitivas.
    
    h2.mb-5(data-aos="fade-left") Cuadro Comparativo: Modelo de las 5 Fuerzas de Porter y su relación con las Tecnologías de la Información (TI)

    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Este cuadro comparativo presenta cada una de las cinco fuerzas competitivas propuestas por Michael Porter, su interpretación estratégica, la manera en que las Tecnologías de la Información influyen sobre ellas, y un ejemplo práctico para facilitar su comprensión.

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Cuadro Comparativo: Modelo de las 5 Fuerzas de Porter y su relación con las Tecnologías de la Información (TI)
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-9 Fuerza Competitiva
            th.bg-color-9 Interpretación Estratégica
            th.bg-color-9 Relación con TI
            th.bg-color-9 Ejemplo Práctico
        tbody.bg-color-white
          tr
            td Poder de negociación de los clientes
            td Capacidad de los clientes para exigir mejores condiciones.
            td TI permite conocer mejor al cliente, personalizar la oferta y mejorar la experiencia de usuario.
            td Una tienda online utiliza análisis de datos para ofrecer promociones personalizadas y aumentar la fidelidad.
          tr
            td Poder de negociación de los proveedores
            td Influencia que tienen los proveedores sobre los precios y condiciones.
            td Los sistemas ERP ayudan a comparar proveedores y automatizar procesos de compra.
            td Una empresa manufacturera usa un ERP para negociar con varios proveedores y reducir costos.
          tr
            td Amenaza de nuevos entrantes
            td Facilidad con que nuevas empresas pueden entrar al mercado.
            td El uso avanzado de TI crea barreras de entrada como innovación, marca digital o automatización.
            td Una fintech implementa autenticación biométrica avanzada, dificultando que nuevos competidores igualen su nivel de seguridad.
          tr
            td Amenaza de productos sustitutos
            td Riesgo de que otros productos reemplacen la oferta existente.
            td La innovación tecnológica permite mejorar y diferenciar productos constantemente.
            td Una editorial digital lanza libros interactivos para competir frente a los audiolibros y mantenerse vigente.
          tr
            td Rivalidad entre competidores existentes
            td Nivel de competencia entre los actores actuales del mercado.
            td TI permite a las empresas diferenciarse con mejor servicio, canales digitales y atención postventa.
            td Dos cadenas de restaurantes compiten: una lanza una app para pedidos rápidos y fidelización, atrayendo a más clientes.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] La cadena de valor en la era digital 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Hablar de competitividad empresarial en tiempos digitales es hablar de transformación constante. La cadena de valor, concepto desarrollado por Michael Porter, sigue siendo vigente, pero ha evolucionado profundamente para responder a los desafíos del siglo XXI. Hoy no solo permite identificar las actividades clave que generan valor para el cliente, sino que incorpora un componente central: la tecnología.
        .bg-color-1.p-5(data-aos="fade-left")
          p.mb-0 En este contexto, cada eslabón de la cadena —desde la logística hasta el servicio postventa— puede ser potenciado mediante soluciones tecnológicas. Empresas de distintos sectores utilizan sistemas inteligentes para anticipar la demanda, implementan sensores IoT para automatizar procesos logísticos y adoptan plataformas digitales que proporcionan una visión en tiempo real de sus operaciones. Esto se traduce en reducción de costos, mejora de tiempos de entrega y servicios más personalizados.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Un ejemplo concreto lo ofrece una empresa de confecciones que, al incorporar herramientas de diseño asistido por computadora y canales de comercio electrónico, logró reducir en un 40 % el tiempo de desarrollo de productos y expandirse mediante venta directa al consumidor. Este tipo de transformación no solo optimiza recursos, sino que también permite una respuesta ágil frente a los cambios del mercado.
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p.mb-0 No obstante, la tecnología por sí sola no basta. El valor real se logra cuando se combina con talento humano capaz de interpretar datos, colaborar en equipos multidisciplinarios e impulsar la innovación constante. Por ello, en la era digital se valora cada vez más el desarrollo de soft skills como la comunicación, la creatividad y la adaptabilidad. La tecnología necesita personas que piensen estratégicamente y lideren los procesos de cambio.
        p En definitiva, la cadena de valor digital no se limita a mejorar la eficiencia. Representa también una oportunidad para repensar cómo se genera valor e impacto en los clientes y en la sociedad. Adaptarse a este nuevo entorno requiere visión, formación continua y, sobre todo, una actitud proactiva frente al cambio.

    .titulo-figura.mb-4
      h5 Figura 1.
      span Modelo de cadena de valor de Michael Porter
    
    div.bg-color-11.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6
          figure
            img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-5(data-aos="flip-up") Ejemplo empresarial. Transformación digital de la cadena de valor en "Café Aurora S.A.S."
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Ejemplo empresarial. Transformación digital de la cadena de valor en "Café Aurora S.A.S.", donde se aborda la modernización integral de una empresa cafetera mediante soluciones tecnológicas aplicadas a toda su cadena de valor
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo empresarial. Transformación digital de la cadena de valor en "Café Aurora S.A.S.".
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/20.png', alt='')
        
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Estrategias empresariales basadas en SI 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En el entorno empresarial actual, los datos se han convertido en un recurso tan valioso como el capital financiero o el talento humano. Las empresas que aprovechan estratégicamente los sistemas de información (SI) no solo toman decisiones más acertadas, sino que también logran adaptarse con agilidad, competir inteligentemente y mantenerse sostenibles en el tiempo.
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 No se trata simplemente de contar con tecnología, sino de usarla con sentido estratégico. Los SI deben integrarse con los objetivos del negocio, adaptarse a su cultura organizacional y responder a una visión clara de lo que se desea alcanzar. El liderazgo efectivo, la gestión del cambio y el diseño adecuado de procesos son componentes esenciales para el éxito.
        p Además, el uso inteligente de los SI requiere más que habilidades técnicas. Los profesionales deben combinar el conocimiento digital con <em>soft skills</em> como la comunicación, el pensamiento analítico y la toma de decisiones estratégicas. Saber interpretar datos es útil, pero entender cómo actuar en consecuencia es lo que marca la diferencia.
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Diferenciación" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-lg-2
            h4 Diferenciación
            p Uso de herramientas digitales para personalizar productos y servicios. 
            p <b>Ejemplo</b>: Tiendas en línea que, mediante análisis de datos, ofrecen recomendaciones personalizadas, aumentando la fidelización.

    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Liderazgo en costos" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-lg-2
            h4 Liderazgo en costos
            p Automatización de procesos, control de inventarios y gestión de la cadena de suministro. 
            p <b>Resultado</b>: Reducción de errores, ahorro de recursos y mejora en la rentabilidad.

    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/23.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Estrategia de enfoque (nicho de mercado)" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-lg-2
            h4 Estrategia de enfoque (nicho de mercado)
            p Análisis de datos para identificar segmentos específicos del mercado y adaptar ofertas. 
            p <b>Ejemplo</b>: Negocios que ofrecen productos para mascotas con necesidades especiales o turismo para adultos mayores.

    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/24.png', alt='')
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/25.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white En definitiva, los sistemas de información son aliados estratégicos, no simples herramientas de soporte. Su correcto uso permite construir ventajas competitivas reales y sostenibles. El gran desafío no es solo aprender a usarlos, sino liderar transformaciones organizacionales con ellos.

    h2.mb-5(data-aos="fade-left") Estudio de caso simulado. TECNOVID S.A.S. — Estrategias digitales para recuperar competitividad

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") A. Contexto
        p TECNOVID S.A.S. es una empresa ubicada en Medellín, fundada en 2008 y especializada en la producción y comercialización de equipos de videovigilancia. Durante varios años fue pionera en ofrecer soluciones de seguridad a empresas medianas y residenciales, logrando posicionarse en su nicho.
        .bg-color-7.p-4(data-aos="fade-left")
          p.mb-0 A partir de 2020, su crecimiento se estancó. El mercado se saturó con competidores internacionales, que ofrecían precios más bajos y canales digitales más sofisticados. Mientras tanto, TECNOVID continuaba operando con:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Procesos administrativos manuales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Ausencia de plataformas de atención digital.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Estrategia comercial basada exclusivamente en vendedores físicos.
    
    .bg-full-width.bg-color-8.mb-5
      .p-4.p-md-5
        h2(data-aos="fade-left") B. Desafío
        p.mb-5 En 2022, la gerente general Laura Cárdenas decide transformar la organización. Define como prioridad formar una estrategia empresarial basada en sistemas de información, con tres objetivos:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/27.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Primero
                  p.mb-0 Recuperar participación de mercado.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/28.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Segundo
                  p.mb-0 Mejorar la eficiencia operativa.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/29.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Tercero
                  p.mb-0 Modernizar la relación con los clientes.
    
    h2(data-aos="fade-left") C. Acciones implementadas
    p.mb-5 A continuación, la reorganizo en una tabla de dos columnas, clara y profesional, manteniendo el orden lógico y destacando los elementos clave de cada etapa del proceso de transformación digital de TECNOVID S.A.S.:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/30.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Diagnóstico inicial")
            p Se realizó un análisis FODA y un estudio de mercado. Se identificaron tres debilidades críticas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ausencia de presencia digital efectiva.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Procesos administrativos lentos y propensos a errores.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Desconocimiento de los hábitos de compra del cliente.
    
          .div(titulo="Implementación de un sistema CRM")
            p Se adoptó una plataforma CRM en la nube, que permitió:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Centralizar la información de clientes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Automatizar cotizaciones y seguimiento de ventas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Registrar historial de comunicaciones y reclamos.
    
          .div(titulo="Integración de comercio electrónico")
            p Se desarrolló una tienda en línea conectada al CRM, con:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Catálogo actualizado.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Compra directa personalizada.
    
          .div(titulo="Estrategia de enfoque y segmentación")
            p El análisis de datos permitió identificar tres segmentos estratégicos:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Empresas pequeñas del sector salud.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Comercios minoristas con alta demanda de cámaras.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Conjuntos residenciales urbanos.
            p Para cada segmento se diseñaron campañas de email marketing adaptadas a sus necesidades.
          .div(titulo="Capacitación del talento humano")
            p Todo el equipo comercial fue capacitado en:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Uso del CRM.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Trabajo colaborativo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Atención digital y habilidades blandas (empatía, adaptabilidad).

    .bg-full-width.bg-color-8.mb-5
      .p-4.p-md-5
        h2.mb-5(data-aos="fade-left") D. Resultados tras 12 meses

        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/31.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 +45 % en ventas digitales.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/32.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02 
                  p.mb-0 -30 % en tiempos de respuesta al cliente.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/33.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03 
                  p.mb-0 -60 % en errores de facturación.
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/34.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 04
                  p.mb-0 300 clientes fidelizados con seguimiento personalizado.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-4.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/35.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 05
                  p.mb-0 Reconocimiento en redes sociales como marca confiable y cercana.
    
    h2.mb-5(data-aos="fade-left") E. Comparación: Antes y después de la transformación digital
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Comparación: Antes y después de la transformación digital
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-9 Antes de 2022
            th.bg-color-9 Después de la implementación digital
        tbody.bg-color-white
          tr
            td Procesos manuales y lentos
            td Automatización con CRM y reducción de errores.
          tr
            td Ausencia de atención digital
            td Plataforma en línea integrada con atención personalizada.
          tr
            td Desconocimiento del cliente
            td Segmentación basada en datos y campañas personalizadas.
          tr
            td Dependencia total de vendedores físicos
            td Canal digital autosuficiente con ventas online.
          tr
            td Sin formación tecnológica del equipo
            td Capacitación en herramientas digitales y desarrollo de habilidades blandas.

    h2.mb-5(data-aos="fade-left") F. Lección clave para el estudiante

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/36.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este caso demuestra cómo una empresa tradicional puede reinventarse frente a una crisis competitiva mediante la integración estratégica de sistemas de información. Más allá de lo técnico, el éxito de TECNOVID también dependió de:


        .bg-color-1.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El liderazgo de la dirección.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La capacitación del equipo humano.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La disposición al cambio organizacional.
          p Este estudio de caso invita al estudiante a:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Simular toma de decisiones reales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Diseñar soluciones concretas basadas en tecnología.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Desarrollar una visión estratégica, combinada con habilidades humanas fundamentales para liderar procesos de transformación.
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-5(data-aos="flip-up") Aplicaciones Estratégicas de los Sistemas de Información
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Aplicaciones Estratégicas de los Sistemas de Información, donde se aborda el papel esencial de los sistemas de información (SI) como herramientas clave para la gestión, innovación y toma de decisiones en las organizaciones 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicaciones Estratégicas de los Sistemas de Información
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/37.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.javeriana.edu.co/index.php/cuacont/article/view/28119" target="_blank" rel="noopener noreferrer") Coba, M., Tapia, J., & Aranguren, M. (2017). Competitividad de las Pyme y su relación con los sistemas de información. Cuadernos de Contabilidad, 18(45), 1-20. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ceipa.edu.co/index.php/lupa/article/view/560" target="_blank" rel="noopener noreferrer") González, R., & Pérez, M. (2021). Sistemas de información y ventaja competitiva. Revista de Estrategia Empresarial, 15(2), 45-60. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://clasicwebtools.com/articulos/tecnologia/LA%20INTEGRACION%20DE%20LOS%20SISTEMAS%20DE%20INFORMACION.html" target="_blank" rel="noopener noreferrer") Martínez, L. (2019). Integración de sistemas de información y estrategia organizacional. Revista de Innovación y Desarrollo, 8(1), 15-28. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://asana.com/es/resources/porters-five-forces" target="_blank" rel="noopener noreferrer") Asana. (2024). Qué son las 5 fuerzas de Porter y cómo analizarlas. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://contabilidad360.wordpress.com/2016/02/17/modelo-de-las-cinco-fuerzas-de-porter-y-la-tecnologia-de-informacion/" target="_blank" rel="noopener noreferrer") Contabilidad 360. (2016). Modelo de las cinco fuerzas de Porter y la tecnología de información. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://naifman.com/5-fuerzas-porter/" target="_blank" rel="noopener noreferrer") Naifman. (2022). Qué son las 5 fuerzas de Porter. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.dynamicgc.es/cadena-de-valor-porter/" target="_blank" rel="noopener noreferrer") DynamicGC. (2024). Cadena de Valor de Michael Porter. Análisis de rentabilidad. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.alumio.com/es/blog/the-benefits-of-the-value-chain-in-the-digital-age" target="_blank" rel="noopener noreferrer") Alumio. (2024). Beneficios de la Value Chain para la transformación digital. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.evaluandosoftware.com/tic/las-tic-la-cadena-valor/" target="_blank" rel="noopener noreferrer") Evaluando Software. (2024). Las TIC en la cadena de valor. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.itmplatform.com/es/blog/estrategia-de-sistemas-de-informacion/" target="_blank" rel="noopener noreferrer") ITM Platform. (2012). Estrategia de sistemas de información.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.hubspot.es/marketing/sistema-informacion" target="_blank" rel="noopener noreferrer") HubSpot. (2019). Sistemas de información en empresas: definición, tipos y ejemplos. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/alineacion-de-sistemas-de-informacion-con-la-estrategia-de-la-empresa " target="_blank" rel="noopener noreferrer") PowerData. (2017). Alineación de sistemas de información con la estrategia de la empresa. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=qFx5hKIOyds " target="_blank" rel="noopener noreferrer") Katya. (2021, 20 de diciembre). Ventajas competitivas, comparativas y diferenciales. Empleabilidad y negocios con Katia [Vídeo] YouTube.         



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
