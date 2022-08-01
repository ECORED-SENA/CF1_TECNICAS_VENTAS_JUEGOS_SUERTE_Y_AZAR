<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  La comunicación comercial

    .row.mb-4.align-items-end(data-aos="fade-left")
      .col-md-6
        figure
          img(src='@/assets/curso/tema1/img1.jpg', class='img-fluid')
      .col-md-6
        .cajon.color-acento-contenido.p-4.mb-4.col-12(style='background-color: #B8B0D8')
          p Cuando se habla de comunicación enmarcada en el concepto “comercial”, se refiere al tipo de comunicación que se apoya en la fuerza de ventas para lograr que los consumidores adquieran un servicio o producto. Este tipo de comunicación pretende vender de manera directa y fidelizar al cliente, por lo que se requiere una relación con el consumidor para conocer sus características, gustos, necesidades, hábitos y quejas.<br><br/>Es fundamental tener claridad sobre los objetivos y metas de ventas, para alinear el proceso comunicativo entre vendedor y consumidor, de esta manera se encuentra la coherencia entre lo que se busca ofrecer y lo que el cliente recibirá a cambio (Martínez, 2017).
    p.mb-4(data-aos="fade-up-right") Se debe considerar que la comunicación comercial tiene características particulares, entre ellas:

    
      .row.justify-content-around.align-items-center(data-aos="fade-up-right")
        .col-md-10
          .tarjeta.bgr.p-4.p-md-4.mb-2
            .row.align-items-center
              .col-md-2.col-6.mb-2
                figure
                  img(src='@/assets/curso/tema1/icon1.svg', class='img-fluid' style="width: 109px")
              .col-12.col-sm-10.col-md-10.align-items-center
                ul.lista-ul.lista-ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Informar y dar a conocer un producto o servicio de apuestas y juegos de azar.
                    li
                      i.fas.fa-check
                      span Busca persuadir al consumidor y pretende que el cliente recuerde lo que ofrece la red de apuestas.
                    li
                      i.fas.fa-check
                      span Cerrar ventas y que el cliente tenga claridad de lo que obtiene a cambio de su compra.
    separador
                 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1	Elementos generales de la comunicación

    p.mb-5(data-aos="fade-right") Se deben tener en cuenta diversos componentes que participan en el proceso comunicativo. Según las fuentes, algunos autores determinan siete, otros las resumen en cinco, sin embargo, todas coinciden en los siguientes elementos generales de la comunicación:

    .bg_grad-02(data-aos="fade-down")
      .row.mb-4.justify-content-center
        .col-md-6
          ImagenInfografica.color-primario.opa.mb-5(data-aos="flip-up")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/vec1.svg', alt='Texto que describa la imagen')
            .tarjeta.bg-amarillo-claro.p-3(x="92.3%" y="9%" numero="")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4
                  img(src='@/assets/curso/tema1/1.svg', alt='Imagen alineada al centro con html' style="width: 76px")
                .col-md-8
                  h5 EMISOR
              .row
                p Es el punto de partida de un mensaje, en el caso de la comunicación comercial, el actor principal que parte desde el rol de emisor podría ser el vendedor, o el cliente si se acerca por su propia iniciativa, incluso el emisor podría configurarse con mensajes publicitarios o máquinas que llamen la atención del cliente para iniciar un proceso comunicativo.
        
            .tarjeta.bg-amarillo-claro.p-3(x="98%" y="50.5%" numero="")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4
                  img(src='@/assets/curso/tema1/2.svg', alt='Imagen alineada al centro con html' style="width: 76px").mb-0
                .col-md-8
                  h5 RECEPTOR
              .row
                p Se refiere a quien recibe la información, en un proceso de comunicación comercial, la interacción entre vendedor y cliente se hace dinámico y constantemente se intercambian de roles entre emisor receptor (lo que se denomina retroalimentación). Incluso, al igual que el emisor, podría ser entornos cibernéticos o máquinas.
                  
            .tarjeta.bg-amarillo-claro.p-3(x="92.5%" y="91%" numero="")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4
                  img(src='@/assets/curso/tema1/3.svg', alt='Imagen alineada al centro con html' style="width: 76px").mb-0
                .col-md-8
                  h5 CANAL
              .row
                p Medio físico donde el mensaje es transmitido, actualmente existen diversidad de canales, desde el natural como el aire, luz, hasta los artificiales como medios digitales, teléfonos, etc. 
                  
            .tarjeta.bg-amarillo-claro.p-3(x="11.7%" y="91%" numero="")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4
                  img(src='@/assets/curso/tema1/4.svg', alt='Imagen alineada al centro con html' style="width: 76px").mb-0
                .col-md-8
                  h5 LENGUAJE
              .row
                p Se refiere a los signos, códigos en común en que se transmite un mensaje para que ambos extremos puedan entenderse, el lenguaje podría hacerse verbal, escrito o cibernético.
                  
            .tarjeta.bg-amarillo-claro.p-3(x="1.7%" y="52%" numero="")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4
                  img(src='@/assets/curso/tema1/5.svg', alt='Imagen alineada al centro con html' style="width: 76px").mb-0
                .col-md-8
                  h5 MENSAJE
              .row 
                p Se refiere a la propia información que el emisor transmite.
                
            .tarjeta.bg-amarillo-claro.p-3(x="8.2%" y="8.5%" numero="")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4
                  img(src='@/assets/curso/tema1/5.svg', alt='Imagen alineada al centro con html' style="width: 76px").mb-0
                .col-md-8
                  h5 CONTEXTO
              .row
                p Circunstancias temporales, espaciales e intenciones (en este caso realizar una venta), que rodean el hecho o acto comunicativo y que permite comprender el mensaje en su justa medida. (Instituto Nacional de Tecnologías Educativas y de Formación del Profesorado, 2007).

    .row.mb-4(data-aos="fade-right")
      .col-md-3.col-8.p-2
        .tarjeta.bgr2.p-2
          .row.align-items-center.justify-content-center
            .col-md-2.col-2
              img(src='@/assets/curso/temas/icon1.svg' style="width: 35px")
            .col-md-10.col-10
              h5.text-white.m-0 Esquema de la comunicación

    p.mb-4(data-aos="fade-right") Con relación a los conceptos anteriores, la interrelación se desarrolla como se muestra en la siguiente figura 1:
    
    .row.mb-2.justify-content-center(data-aos="flip-up")
      .col-md-10.mb-4
        h5 Figura 1
        span Esquema de la comunicación
      .col-md-10
        img(src='@/assets/curso/tema1/fig1.svg' alt='AvatarTop')
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2.	Niveles de comunicación comercial

    p.mb-4(data-aos="fade-right") En este segmento, se verán varios niveles según sus características, en primer lugar, caracterización de la comunicación comercial según el canal, de otro lado, caracterización según el contexto.

    .row.mb-4(data-aos="fade-right")
      .col-md-3.col-8.p-2
        .tarjeta.bgr2.p-2
          .row.align-items-center.justify-content-center
            .col-md-2.col-2
              img(src='@/assets/curso/temas/icon1.svg' style="width: 35px")
            .col-md-10.col-10
              h5.text-white.m-0 Característica según el canal

    p.mb-4(data-aos="fade-right") A continuación, se exponen las características según el canal de comunicación:

    .tarjeta.fondo-slyder.mb-5(data-aos="fade-up")
      SlyderA
        .row.p-5
          .col-lg-4
            h5 Canales personales:
              p Son los medios cuyo objetivo es llegar a un público específico de manera directa. Por ser un canal directo hay mayor oportunidad de interacción y persuasión. Una ventaja importante, es que es controlable por la red o empresa y de esta depende la estandarización de su equipo de ventas. 
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/1.png', alt='AvatarTop', style="width:715px;")

        .row.p-4
          .col-lg-4
            h5 Canales impersonales:
              p Se refiere a medios masivos para la comunicación e interacción con los clientes, tales como redes sociales, chatbots, etc. Allí se responden dudas generales, se da respuesta a un gran número de clientes que tengan la misma pregunta. 
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/2.png', alt='AvatarTop', style="width:715px;")

        .row.p-4
          .col-lg-4
            h5 Canal cibernético:
              p Gracias a la inteligencia artificial, van surgiendo canales con características mixtas, es decir, tanto personal como impersonal. Apoyados en herramientas digitales con la capacidad de atender a miles de clientes a la vez, con medios que facilitan el respaldo y confiabilidad de la información, garantizando la atención oportuna.  
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/3.png', alt='AvatarTop', style="width:715px;")

    .row.mb-4
      .col-md-4.col-8.p-2
        .tarjeta.bgr2.p-2
          .row.align-items-center.justify-content-center
            .col-md-2.col-2
              img(src='@/assets/curso/temas/icon1.svg' style="width: 35px")
            .col-md-10.col-10
              h5.text-white.m-0 Característica según el contexto

    p.mb-4(data-aos="fade-right") A continuación, se exponen las características según el canal de comunicación:

    TabsC.color-primario.mb-5(data-aos="fade-up")
      .p-3.p-md-4(titulo="Nivel corporativo")
        .row.align-items-center
          .col-md-6
            figure
              img.bottomcen(src='@/assets/curso/tema1/bn1.svg', style="width: 360px")
          .col-md-6
            p.mb-4 Este busca gestionar la reputación de la empresa, que es un intangible importante, pues se refiere a cómo el público percibe la marca. Es importante comunicar honestidad, buen servicio, imagen organizada, ética, entre otros valores corporativos.
            h5.mb-0 <i>Pregunta de reflexión</i>
            p.mb-0 ¿Sabe cuáles son los valores corporativos de la red de apuestas y juegos de azar?
            span De no recordarlos, puede consultarlos con el supervisor o sitio web de la empresa.

      .p-3.p-md-4(titulo="Nivel de marca")
        .row.align-items-center
          .col-md-6
            figure
              img.bottomcen1(src='@/assets/curso/tema1/bn2.svg', style="width: 360px")
          .col-md-6
            p.mb-5 El objetivo de este nivel es construir una imagen que el público la identifique con facilidad, esto ayuda a comercializar los productos y servicios. Está muy asociado a lo visual, con la disposición de la publicidad en puntos de venta. En caso de llevar uniformes, llevarlos de manera correcta.
            h5.mb-0 <i>Pregunta de reflexión</i>
            p.mb-0 ¿Conoce las políticas publicitarias, puntos de venta y vestuario de la fuerza de venta en la red donde está vinculado?
            span De no recordar, estas se pueden consultar con el supervisor o el sitio web oficial.
    separador

    .bg_grad-03.mb-5
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3	Técnicas y habilidades

      .row.align-items-center(data-aos="fade-up")
        .col-md-6
          .cajon.color-acento-contenido(style='background-color: #ffffff' ).p-4.mb-4.shadow.p-3.mb-5.bg-white.rounded
            p.mb-0 En el área comercial, la comunicación y el contacto con el público son claves para el éxito, existen personas que de manera natural tienen la habilidad persuasiva de vender <i>“hasta corbatas en un desierto”</i>, de ahí la importancia de tener dominio en el uso de técnicas y destrezas en el arte de la comunicación en la venta. 

        .col-md-5
          figure
              img.centrarimg(src='@/assets/curso/tema1/img1.png', style="width: 520px")

    p.mb-4(data-aos="fade-right") A continuación, se mencionan algunos elementos importantes, que se deben asumir para el buen desempeño de las labores asignadas.

    .row.mb-4(data-aos="fade-up")
      .col-lg-12.justify-content-center
        .tarjeta.tarjeta--rosa.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="Principio 1")
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/4.png', style="width: 505px")
              .col-md-6
                h5.mb-4 <i>Conocer los servicios que se ofrecen</i>
                p Un vendedor que improvisa y empieza a dar explicaciones de productos de manera insegura, difícilmente dará confianza a su cliente, una de las maneras efectivas para contrarrestar el titubeo es dominar el portafolio de servicios de tu red de apuestas y juegos de azar.

            .row.justify-content-center(titulo="Principio 2")
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/5.png', style="width: 505px")
              .col-md-6
                h5.mb-4 Asertividad en la comunicación
                p Es la práctica donde un vendedor no se centra en vender, sino que su objetivo principal es <i>cooperar con el cliente.</i> Es un vendedor que, además, logra la combinación perfecta entre una conducta agresiva y pasiva en el momento de la venta (Nuño, 2018). El concepto asertividad está asociado al momento, persona, palabras y actitudes adecuadas para que el mensaje llegue de la mejor forma, de manera popular, podría referirse a ese <i>“tacto”</i> al comunicar ya sea para ofrecer un producto, resolver una duda, o calmar disgustos de los clientes.

            .row.justify-content-center(titulo="Principio 3")
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/6.png', style="width: 505px")
              .col-md-6
                h5.mb-4 <i>Analiza y conoce tu segmento de mercado</i>
                p Conocer y alinearse a las necesidades de su público, así como las maneras de establecer relaciones comerciales con las personas de la zona es muy importante, si bien cada cliente es diferente, por lo general, hay factores comunes según la ciudad, barrio o sector donde se realizan las ventas. Es importante enfocarse en el contexto social y entender las motivaciones de tus compradores.

            .row.justify-content-center(titulo="Principio 4")
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/7.png', style="width: 505px")
              .col-md-6
                h5.mb-4 <i>Escuchar de manera activa</i>
                p Tiene la ventaja de recibir información de los clientes para saber qué ruta y qué manera de atención es la más adecuada para aumentar el éxito de venta. Escuchar de manera adecuada (con contacto visual y demostrando atención), proporciona sensaciones agradables para el cliente haciéndolo sentir importante y aumentar su confianza. Adicionalmente, al identificar el perfil del cliente sabrás qué producto y servicio adicional podría necesitar esta persona.

            .row.justify-content-center(titulo="Principio 5")
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/8.png', style="width: 505px")
              .col-md-6
                h5.mb-4 <i>Responde las objeciones con paciencia</i>
                p Ocasionalmente, hay clientes que se interesan, pero se oponen a la compra, el truco es convencer sin coaccionar, no repita lo mismo que ya le dijo para que compre, intenta indagar las motivaciones de la indecisión de compra e identifica la razón para moverse en la satisfacción de su objeción a la compra.
    
    p.mb-4(data-aos="fade-right")  Se recomienda visualizar el siguiente video para profundizar sobre la comunicación asertiva

    .row.justify-content-center.align-items-center.my-3
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-tarjeta.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/icon2.svg",  alt='', style="width:60px; display:block; margin:auto 0 ;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Criterios de la comunicación asertiva
                .col-md-auto
                  a.boton.color-boton(href="https://youtu.be/nfJPSfcl_tM" target="_blank")
                    span Ver
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
