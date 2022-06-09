<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  La comunicación comercial

    .row.mb-4.align-items-end
      .col-md-6
        figure
          img(src='@/assets/curso/tema1/img1.jpg', class='img-fluid')
      .col-md-6
        .cajon.color-acento-contenido.p-4.mb-4.col-12(style='background-color: #B8B0D8')
          p Cuando se habla de comunicación enmarcada en el concepto “comercial”, se refiere al tipo de comunicación que se apoya en la fuerza de ventas para lograr que los consumidores adquieran un servicio o producto. Este tipo de comunicación pretende vender de manera directa y fidelizar al cliente, por lo que se requiere una relación con el consumidor para conocer sus características, gustos, necesidades, hábitos y quejas.<br><br/>Es fundamental tener claridad sobre los objetivos y metas de ventas, para alinear el proceso comunicativo entre vendedor y consumidor, de esta manera se encuentra la coherencia entre lo que se busca ofrecer y lo que el cliente recibirá a cambio (Martínez, 2017).
    p.mb-4 Se debe considerar que la comunicación comercial tiene características particulares, entre ellas:

    .bg_grad-02
      .row.justify-content-around.align-items-center
        .col-md-10
          .tarjeta.bgr.p-4.p-md-4.mb-2
            .row.align-items-center
              .col-md-2
                figure
                  img(src='@/assets/curso/tema1/icon1.svg', class='img-fluid' style="width: 109px")
              .col-10.col-sm-10.col-md-10.align-items-center
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

    p.mb-5 Se deben tener en cuenta diversos componentes que participan en el proceso comunicativo. Según las fuentes, algunos autores determinan siete, otros las resumen en cinco, sin embargo, todas coinciden en los siguientes elementos generales de la comunicación:

    .row.mb-4.justify-content-around.align-items-center
      .col-md-6
        ImagenInfografica.color-primario.opa.mb-5(data-aos="flip-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/vec1.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-amarillo-claro.p-3(x="92.3%" y="9%" numero="1")
            p <b>EMISOR:</b>  Es el punto de partida de un mensaje, en el caso de la comunicación comercial, el actor principal que parte desde el rol de emisor podría ser el vendedor, o el cliente si se acerca por su propia iniciativa, incluso el emisor podría configurarse con mensajes publicitarios o máquinas que llamen la atención del cliente para iniciar un proceso comunicativo.
      
          .tarjeta.bg-amarillo-claro.p-3(x="98%" y="50.5%" numero="2")
            p <b>RECEPTOR:</b> Se refiere a quien recibe la información, en un proceso de comunicación comercial, la interacción entre vendedor y cliente se hace dinámico y constantemente se intercambian de roles entre emisor receptor (lo que se denomina retroalimentación). Incluso, al igual que el emisor, podría ser entornos cibernéticos o máquinas.
              
          .tarjeta.bg-amarillo-claro.p-3(x="92.5%" y="91%" numero="3")
            p <b>CANAL:</b> Medio físico donde el mensaje es transmitido, actualmente existen diversidad de canales, desde el natural como el aire, luz, hasta los artificiales como medios digitales, teléfonos, etc. 
              
          .tarjeta.bg-amarillo-claro.p-3(x="11.7%" y="91%" numero="4")
            p <b>LENGUAJE:</b> Se refiere a los signos, códigos en común en que se transmite un mensaje para que ambos extremos puedan entenderse, el lenguaje podría hacerse verbal, escrito o cibernético.
              
          .tarjeta.bg-amarillo-claro.p-3(x="1.7%" y="52%" numero="5")
            p <b>MENSAJE:</b> Se refiere a la propia información que el emisor transmite.
              
          .tarjeta.bg-amarillo-claro.p-3(x="8.2%" y="8.5%" numero="6")
            p <b>CONTEXTO:</b> Circunstancias temporales, espaciales e intenciones (en este caso realizar una venta), que rodean el hecho o acto comunicativo y que permite comprender el mensaje en su justa medida. (Instituto Nacional de Tecnologías Educativas y de Formación del Profesorado, 2007).

    .row.mb-4
      .col-md-3(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/title1.svg' alt='AvatarTop')

    p.mb-4 Con relación a los conceptos anteriores, la interrelación se desarrolla como se muestra en la siguiente figura 1:
    
    .row.mb-2.justify-content-center
      .col-md-10.mb-4
        h5 Figura 4
        span Sistemas de producción
      .col-md-10
        img(src='@/assets/curso/tema1/fig1.svg' alt='AvatarTop')
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Niveles de la comunicación

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3	Técnicas y habilidades


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
