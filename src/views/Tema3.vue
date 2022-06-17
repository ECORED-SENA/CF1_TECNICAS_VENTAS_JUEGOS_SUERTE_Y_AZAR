<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 PORTAFOLIO DE PRODUCTOS Y SERVICIOS
    
    p.mb-4 Las marcas de juegos de azar como chances, loterías, apuestas, etc., están ubicadas a lo largo y ancho del territorio nacional como marcas propias e independientes. En este orden, hay entidades que comercializan estos productos y son las que más generan oportunidades de trabajo al emplear o asociar ciudadanos como su fuerza de venta y llevar al público final los productos de las marcas de apuestas y otros servicios.
    
    .row.mb-5
      .bloque-texto-g.color-secundario.p-5.p-sm-5.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-5 Cada red o empresa de apuestas y juegos de azar cuenta con su portafolio de servicios propio, por esto que es importante, al hacer parte de una de estas compañías se debe participar activamente de las capacitaciones específicas, no obstante, en este recurso se mencionarán algunos servicios y productos generales que las agencias de apuestas y juegos de azar tienen.
    
    p.mb-4 Actualmente, el portafolio de servicios de las comercializadoras de juegos de azar ha ampliado sus opciones ofertando más allá de servicios de apuestas.
    separador 

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Elementos

    p.mb-4 Las comercializadoras de juegos de suerte y azar han ampliado de manera significativa sus servicios y pocas redes se dedican solo a vender productos de apuestas, la oferta está enmarcada en servicios on line como pagos de facturas, recaudos financieros, giro de dineros, entre otros. Si bien el enfoque específico de este componente formativo se enmarca en la comercialización de juegos de suerte y azar, no sobra mencionar algunos servicios que, por lo general, todo vendedor se podrá encontrar para ampliar sus posibilidades de ventas.
    p.mb-4 Algunos servicios del portafolio de servicios y productos podrían ser:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-5.col-12
        .infografia-autores2
          figure.justify-center(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema3/vec1.svg" alt="Adornos flotantes")
          .infografia-autores__img: img(src="@/assets/curso/tema3/loterias.svg" style="left: 65% ; right:  ; top: 5% ; bottom:  ; width: 370px")
          .infografia-autores__img(@mouseover="mostrarIndicador = false")
            img(src="@/assets/curso/tema3/apuesta.svg" style="left: 65% ; right:  ; top: 35% ; bottom:  ; width: 370px")
            .indicador--hover(v-if="mostrarIndicador" style=" top: 19% ")
          .infografia-autores__img: img(src="@/assets/curso/tema3/chance.svg" style="left: -40% ; right:  ; top: 5% ; bottom:  ; width: 370px")
          .infografia-autores__img: img(src="@/assets/curso/tema3/rifas.svg" style="left: -40% ; right:  ; top: 35% ; bottom:  ; width: 370px")
    br
    p.mb-4 Por lo general, es posible encontrar agencias comercializadoras con los siguientes productos y servicios adicionales:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/avatar1.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h2.text-center RECARGAS
              p Operadores telefonía celular.
              p Servicios de telecomunicaciones, hogar o empresas.
              p Servicios de transporte masivo.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/avatar2.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center OPERACIONES FINANCIERAS
              p Recaudos (pago de facturas)
              p Servicios públicos.
              p Giros (nacionales e internacionales).
              p Corresponsal bancario.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/avatar3.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido
            .p-5
              h2.text-center OTROS PRODUCTOS
              p Venta de seguros.
              p Otros productos de naturaleza digital.
    separador


    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Características

    p.mb-4 En la actualidad existen múltiples marcas de juegos de suerte y azar, estas son reguladas por la normatividad nacional y departamental según las políticas regionales y de la república de Colombia.
    .row.mb-4.justify-content-center.align-items-center
      .col-md-4
        figure
          img(src='@/assets/curso/tema3/coljuegos.jpg', class='img-fluid')
      .col-md-8
        p.mb-4 Entre otras, la entidad responsable de regular los juegos de suerte y azar en el orden Nacional es Coljuegos, del Ministerio de Hacienda y Crédito Público, todas las entidades como casinos, bingos, apuestas en deportes, carreras virtuales y comercializadoras están regidas por esta entidad que inició sus funciones en el año 2012.
        p Los juegos y premios están sujetos al pago de condiciones tributarias, pagos de impuestos, retenciones especiales y otras disposiciones que es necesario mirar con detalle según el departamento o zona en la que operan. Cada plan de premios tiene sus características particulares y según la comercializadora o red de juegos deberá orientar y capacitar a su fuerza de venta en las dinámicas de juegos, planes de premios y condiciones específicas.

    .row.mb-4.justify-content-center.align-items-center 
      .col-md-10.col-12
        .cajon.color-acento-contenido(style='background-color: #CCC6E3').p-5
          h5.mb-4 Es importante: 
          .row
            .col-md-1
              figure
                img(src='@/assets/curso/tema3/vec2.svg', class='img-fluid' style="width: 65px" )
            .col-md-11
              p.mb-0 Consultar con la empresa comercializadora de juegos de suerte y azar, cuáles son los planes de premios y otras políticas y condiciones con mínimos de apuestas, liquidaciones y deducciones.

</template>

<script>
export default {
  name: 'Tema3',
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
