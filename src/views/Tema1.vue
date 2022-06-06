<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Recursos tecnológicos para atender al cliente

    p.mb-5 De acuerdo con el Instituto Nacional de Ciberseguridad de España, muchas empresas aún cuentan con métodos tradicionales que son poco efectivos para atender a los clientes; ellas continúan utilizando el teléfono e incluso personalmente, mientras que las nuevas generaciones cada día utilizan más las nuevas tecnologías.

    .row.justify-center.mb-5(data-aos="fade-up") 
      .col-12.col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.px-5.py-4.posit_1
            p Los <em>millennials</em> (personas nacidas entre 1980 y 1995, también llamados generación Y, son reconocidos por tener sentido de equipo, actitud positiva y espíritu racional) usan para comunicarse los chats y sus teléfonos móviles. Por eso, las empresas deben implementar sistemas de atención teniendo en cuenta las preferencias de estos consumidores, ya que existe una transformación digital para la atención al cliente (Novella et al., 2018).
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-1.png')})`}") 
    
    p.mb-5 Las tres características de un sistema eficaz de atención al cliente son las siguientes:

    .row
      .col-lg-4(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/t1-2.svg' alt='AvatarTop')
          .tarjeta.bgr.alto.align-items-center
            .p-3.ml
              p.ms-3.mb-0 La rapidez.
      .col-lg-4(data-aos="fade-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/t1-3.svg' alt='AvatarTop')
          .tarjeta.bgr.alto
            .p-3.ml
              p.ms-3.mb-0 Independizar las comunicaciones del canal.
      .col-lg-4(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/t1-4.svg' alt='AvatarTop')
          .tarjeta.bgr.alto
            .p-3.ml
              p.ms-3.mb-0 Identificar el tipo de comunicación del cliente.
    
    p.mb-5 A continuación, se presenta el siguiente recurso, donde se amplían los detalles de cada una de estas características.

    .bg_grad-01(data-aos="fade-down")
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/8gZTBdLt_IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipos

    p Los canales de atención al cliente son los medios que ponen las empresas a disposición de los clientes para comunicarse con ellos, en estos canales el cliente puede solicitar soporte técnico, reclamaciones, etc.
    p.mb-5 Los tipos de canales de atención al cliente utilizados por las empresas en la actualidad son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            figure.justify-center.mb-3
              img.img160(src='@/assets/curso/tema1/t1-6.svg' alt='AvatarTop')
            h1 Redes sociales
            p.mb-0 Página <em>web</em> o aplicación en la que los internautas intercambian información personal y contenidos multimedia de modo que crean una comunidad de amigos virtual e interactiva. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-5.png')})`}")
      .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            figure.justify-center.mb-3
              img.img160(src='@/assets/curso/tema1/t1-8.svg' alt='AvatarTop')
            h1 WhatsApp
            p.mb-0 Aplicación que permite enviar y recibir mensajes instantáneos a través de un teléfono móvil (celular). 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-7.png')})`}")
      .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            figure.justify-center.mb-3
              img.img160(src='@/assets/curso/tema1/t1-10.svg' alt='AvatarTop')
            h1 <em>Livechat y chatbot</em>
            p.mb-0 Comunicación en tiempo real; los usuarios escriben mensajes en su teclado, y el texto aparece automáticamente y al instante en el monitor de todos los participantes. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-9.png')})`}")
      .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            figure.justify-center.mb-3
              img.img160(src='@/assets/curso/tema1/t1-12.svg' alt='AvatarTop')
            h1 Móvil
            p.mb-0 Dispositivo inalámbrico electrónico que permite tener acceso a la red de telefonía celular o móvil. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-11.png')})`}")
      .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            figure.justify-center.mb-3
              img.img160(src='@/assets/curso/tema1/t1-14.svg' alt='AvatarTop')
            h1 <em>E-mail</em>
            p.mb-0 Sistema que permite el intercambio de mensajes entre distintas computadoras interconectadas a través de una red. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-13.png')})`}")
          
    P.mb-5(data-aos="fade-right") A continuación, se verán los tipos de canales utilizados por los clientes.

    .bg_grad-01(data-aos="fade-down")
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/7fnr7D7cl7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características

    p.mb-5 Los recursos tecnológicos para atender al cliente cuentan con características tales como control y seguimiento, y permiten reclamaciones telefónicamente, por página <em>web</em>, correo electrónico o cualquier otro medio que utilice la empresa. Las características más importantes de los recursos tecnológicos son las siguientes:

    .tarjeta.bgr_1.p-4.mb-5(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.p-3.p-lg-5
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')
              h4.bgr_2 Avance tecnológico
              p La tecnología es parte de nuestras vidas; facilita la comunicación interpersonal sin importar donde esté. La llegada de últimas tecnologías para la conectividad, como 5G, o la inteligencia artificial hace que cada vez se pueda contar con avances tecnológicos. Las TIC están presentes en todos los ámbitos de la sociedad. El ser humano no se detiene en la búsqueda de avances tecnológicos.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-16.png', alt='Texto que describa la imagen')
        .row.p-3.p-lg-5
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')
              h4.bgr_2 Intercambio de productos y servicios
              p Las diferentes redes sociales se encuentran a disposición de todo tipo de público, y estas se han convertido en aliadas importantes para la oferta y la demanda de toda clase de productos y servicios que son ofertados sin importar el tamaño de la empresa que los ofrece. Se ha dinamizado la economía del país, ya que son muchos los negocios que se hacen a través de ellas.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-17.png', alt='Texto que describa la imagen')
        .row.p-3.p-lg-5
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')
              h4.bgr_2 <em>Software</em> para optimizar
              p El <em>software</em> en las empresas agrega valor, ya que ayuda a alcanzar los objetivos, reduce costos y aumenta las ventas. También es una ventaja que la información de la empresa se comparta de manera clara, sencilla y rápida. El software especializado es una herramienta muy útil a la hora de comprobar datos como estados de resultados, balances, bases de datos de clientes etc. Cada vez más son indispensables para la gerencia de las empresas.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-18.png', alt='Texto que describa la imagen')
        .row.p-3.p-lg-5
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')
              h4.bgr_2 Dar y conocer las oportunidades 
              p.mb-3 El acceso a la tecnología les permite a las empresas adaptarse al mercado actual, así como a subsistir en un mercado cada vez más competitivo. Estos son  algunos beneficios que las empresas obtienen de la tecnología:
              ul.lista-ul--color
                li 
                  i.fas.fa-check-circle.colr
                  | Optimización de procesos.
                li 
                  i.fas.fa-check-circle.colr
                  | Resultados tangibles.
                li 
                  i.fas.fa-check-circle.colr
                  | Valor agregado.
                li 
                  i.fas.fa-check-circle.colr
                  | Información integrada.


          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-19.png', alt='Texto que describa la imagen')
       
    .row.justify-center
      .col-12.col-lg-6
        p.text-bold.bgr_3.p-3 Los recursos tecnológicos de las empresas NO son solo los computadores.
    
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Manejo

    p El manejo de recursos tecnológicos para atender al cliente tiene que ver con la implementación de nuevos dispositivos, la automatización y la inteligencia artificial, con los cuales se puede conseguir que las necesidades de los clientes queden satisfechas.
    p.mb-5 En el manejo de los recursos tecnológicos para atender al cliente se debe tener en cuenta:

    .row.mb-5
      .col-md-4.col-lg.mb-5.mb-lg-0(data-aos="fade-down-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/t1-20.svg' alt='AvatarTop')
          .tarjeta.bgr_4
            .p-4
              h2.text-center Estudiar y conocer a sus clientes
              p.text-center.mb-0 Cada cliente es único. Debe atenderlos de forma personalizada. Es importante conocer su perfil. Percibir muy bien lo que su cliente busca para que le ofrezca productos y servicios con excelente atención. Mantener actualizados sus datos, esto ayudará a entender las necesidades de los clientes.
      .col-md-4.col-lg.mb-5.mb-lg-0(data-aos="fade-down-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/t1-21.svg' alt='AvatarTop')
          .tarjeta.bgr_4
            .p-4
              h2.text-center.mb-5 Establecer lazos con el cliente
              p.text-center.mb-0 Una de las estrategias que ayuda a crear empatía con el cliente es el <em>marketing</em> relacional. Las empresas deben crear maneras para establecer lazos fuertes y asertivos con los clientes. 
      .col-md-4.col-lg.mb-5.mb-lg-0(data-aos="fade-down-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/t1-22.svg' alt='AvatarTop')
          .tarjeta.bgr_4
            .p-4
              h2.text-center.mb-5 Utilizar la tecnología a su favor
              p.text-center.mb-0 En la actualidad, las empresas deben llamar la atención del cliente, ya no es el cliente el que debe llamar la atención de la empresa. Los clientes usan la tecnología a través de los diferentes dispositivos que existen para conocer los productos y servicios que ofrece el mercado.




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
