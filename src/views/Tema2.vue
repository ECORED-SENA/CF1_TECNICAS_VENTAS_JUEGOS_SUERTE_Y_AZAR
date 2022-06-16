<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicio al cliente
    
    .bg_grad-04
      .row.justify-content-center.align-items-center
        .col-md-4.col-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img1.png', class='img-fluid' style="width: 329px")
        .col-md-7.col-10
          p.mb-4 Las comercializadoras de juegos de suerte y azar son organizaciones enfocadas al cliente, este es el eslabón más importante de toda la cadena productiva, en esto se destaca la importancia de tener un servicio diferenciador que permita mejorar las oportunidades de ventas y sobresalir sobre la competencia.
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1.	Perfil de los clientes

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5
        figure
          img(src='@/assets/curso/tema2/img2.png', class='img-fluid')
      .col-md-5
        .cajon.color-acento-contenido(style='background-color: #F4EAFC').p-5
            p.mb-0 No todos los clientes tienen las mismas características y por tanto no responden de la misma manera ante la atención que cada vendedor le da. Es importante identificar a cada cliente para darle un trato personalizado y tener la habilidad de adaptarse a estas características para encontrar una mayor conexión intrapersonal y mejorar las posibilidades de éxito de la venta.

    p.mb-4 Hay muchas clases de clientes, según la edad, estrato socioeconómico, y otras variables, sin embargo, hay un énfasis en dos, por su personalidad y por su actitud (López, 2017).

    .row
      .infografia-autores
        figure.justify-center(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema2/1.svg" alt="Adornos flotantes")
        .infografia-autores__img(@mouseover="mostrarIndicador = false")
          img(src="@/assets/curso/tema2/flo1.svg" style="left: 65% ; right:  ; top: 13% ; bottom:  ; width: 280px ")
          .indicador--hover(v-if="mostrarIndicador" style=" top: 19% ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo2.svg" style="left: 71% ; right:  ; top: 31% ; bottom:  ; width: 280px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo3.svg" style="left: 72% ; right:  ; top: 46% ; bottom:  ; width: 280px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo4.svg" style="left: 71% ; right:  ; top: 62% ; bottom:  ; width: 280px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo5.svg" style="left: 64% ; right:  ; top: 80% ; bottom:  ; width: 280px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo6.svg" style="left: 12% ; right:  ; top: 80% ; bottom:  ; width: 280px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo7.svg" style="left: 6% ; right:  ; top: 62% ; bottom:  ; width: 280px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo8.svg" style="left: 6% ; right:  ; top: 30% ; bottom:  ; width: 280px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/flo9.svg" style="left: 13% ; right:  ; top: 15% ; bottom:  ; width: 280px ")
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2.	Sugerencias para la atención de clientes según sus características

    p.mb-4 Es importante tener adaptabilidad para la atención personalizada a cada cliente, la buena o mala atención podría definirse por las habilidades sociales de cada vendedor; cada cliente es un mundo diferente, sería imposible tener en cuenta tantas particularidades en un recurso formativo, sin embargo, a continuación, se presenta una serie de recomendaciones para la atención de clientes según las características mencionadas.

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Amigable")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/1.png",  alt='', style="width:430px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Amigable
                p.mb-3 Es importante tener en cuenta que este tipo de clientes se puede extralimitar haciendo preguntas, por ejemplo, de tipo personal. Se debe atender con amabilidad, con educación, pero no olvidando que es un cliente y no un amigo.
         
          .tarjeta.back-tab.px-5.py-4(titulo="Frívolo o exigente")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/2.png",  alt='', style="width:430px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Frívolo o exigente 
                p.mb-3 Suelen ser personas un poco prepotentes y exigentes, es por ello, que el vendedor no solo debe tener competencias sociales de amabilidad y paciencia para no caer en sus provocaciones, no contestar de manera incorrecta (sería como morder el anzuelo que ellos quieren que muerdas), es necesario tener seguridad en las respuestas y para esto es requisito fundamental dominar el portafolio de servicios y los planes de premios, así como los límites y otros temas de la empresa.

          .tarjeta.back-tab.px-5.py-4(titulo="Tímido")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/3.png",  alt='', style="width:100px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Tímido
                p.mb-3 Se les debe tratar con cuidado, dándoles el tiempo que necesitan para su decisión, transmitirle confianza y explicarle bien los productos y servicios. Son clientes fáciles de convencer, pero también es importante tener los límites éticos corporativos para no entrar a abusar de este tipo de clientes.

          .tarjeta.back-tab.px-5.py-4(titulo="Independiente")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/4.png",  alt='', style="width:100px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Independiente
                p.mb-3 El modo de tratarlo es con cordialidad y amabilidad, pero no ofrecerles una lista larga de servicios, pues son clientes que desean información precisa, pocas veces les puede interesar servicios adicionales, por eso se debe ir ofreciendo otras cosas de manera paulatina y concisa.

          .tarjeta.back-tab.px-5.py-4(titulo="Curioso")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/5.png",  alt='', style="width:100px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Curioso
                p.mb-3 Este tipo de clientes deben atenderse amablemente y transmitirles mucha información, de manera que sientan que su curiosidad está satisfecha. Al responder alguna pregunta que se haga, no contestarle de manera cortante o concisa, es recomendable siempre que la respuesta venga acompañada de un complemento añadido, como algún detalle o beneficio del servicio.

          .tarjeta.back-tab.px-5.py-4(titulo="Enfadado")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/6.png",  alt='', style="width:100px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Enfadado
                p.mb-3 Este tipo de clientes son un reto para la paciencia y amabilidad, pero siempre se debe mantener el control. A este tipo de clientes se les debe dejar hablar y permitirle liberarse de frustraciones, escuchar atento mostrando empatía y haciéndole saber que estás realizando acciones para resolver sus reclamos.

          .tarjeta.back-tab.px-5.py-4(titulo="Desconfiado")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/7.png",  alt='', style="width:100px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Desconfiado
                p.mb-3 A los desconfiados no debería ser un problema su atención cuando estamos en una red legal y bien respaldada, basta con suministrar y entregar toda la información que requiere, se debe ser cuidadoso en no dudar, mostrar siempre seguridad y transmitir tranquilidad. 

          .tarjeta.back-tab.px-5.py-4(titulo="Tranquilo")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/8.png",  alt='', style="width:100px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Tranquilo
                p.mb-3 Las apariencias podrían engañar, son personas calmadas y con parsimonia, muchas veces no expresan bien lo que desean provocando confusiones. Si bien se muestran reflexivas es posible que no les guste algo y esa tranquilidad se desate en un malestar y pueda volverse en un cliente difícil.

          .tarjeta.back-tab.px-5.py-4(titulo="Curioso")
            .row.px-5.py-3.justify-content-center.align-items-center
              .col-lg-4.mb-3
                img.mx-3(src="@/assets/curso/tema2/9.png",  alt='', style="width:100px; display:block; margin:auto 0 ;")
              .col-lg-8
                h4 Con prisa
                p.mb-3 Se debe ser cuidadoso, si bien a nadie le agradaría que interrumpieran el servicio al cliente por recibir una llamada o enviar un chat, con este tipo de clientes sería más delicado aún. Suelen pensar que ellos son la prioridad y exigen se les atienda rápidamente. Es importante no caer en sus afanes para no cometer errores, pero sí darles el foco de atención según las posibilidades y explicarles muy bien procurando su racionalidad
    separador

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    /////
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
