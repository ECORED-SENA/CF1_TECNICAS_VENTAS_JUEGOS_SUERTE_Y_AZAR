<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Portafolio de productos y servicios
    
    p.mb-4(data-aos="fade-right") Las marcas de juegos de azar como chances, loterías, apuestas, etc., están ubicadas a lo largo y ancho del territorio nacional como marcas propias e independientes. En este orden, hay entidades que comercializan estos productos y son las que más generan oportunidades de trabajo al emplear o asociar ciudadanos como su fuerza de venta y llevar al público final los productos de las marcas de apuestas y otros servicios.
    
    .row.mb-5(data-aos="fade-left")
      .bloque-texto-g.color-secundario.p-5.p-sm-5.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-5 Cada red o empresa de apuestas y juegos de azar cuenta con su portafolio de servicios propio, por esto es importante que, al hacer parte de una de estas compañías se debe participar activamente de las capacitaciones específicas, no obstante, en este recurso se mencionarán algunos servicios y productos generales que las agencias de apuestas y juegos de azar tienen.
    
    p.mb-4(data-aos="fade-right") Actualmente, el portafolio de servicios de las comercializadoras de juegos de azar ha ampliado sus opciones ofertando más allá de servicios de apuestas.
    separador 

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1	Tipos de productos

    p.mb-4(data-aos="fade-right") Las comercializadoras de juegos de suerte y azar han ampliado de manera significativa sus servicios y pocas redes se dedican solo a vender productos de apuestas, la oferta está enmarcada en servicios <i>on line</i> como pagos de facturas, recaudos financieros, giro de dineros, entre otros. Si bien el enfoque específico de este componente formativo se enmarca en la comercialización de juegos de suerte y azar, no sobra mencionar algunos servicios que, por lo general, todo vendedor se podrá encontrar para ampliar sus posibilidades de ventas.
    p.mb-4(data-aos="fade-right") Algunos servicios del portafolio de servicios y productos podrían ser:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-md-5
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/vec1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-info.p-4(x="26%" y="34%" numero="")
            .h5.mb-2 CHANCE
            p.mb-5 Es una modalidad de juego que se ofrece a nivel nacional, disponible en los puntos de venta. donde el jugador en un formulario de manera manual o sistematizada, indica el valor de su apuesta y escoge números de su preferencia (la cantidad de números depende del tipo de producto ofrecido). Si estos, coinciden con el resultado de la  lotería autorizada, gana premios en dinero. 
            figure
              img.center(src='@/assets/curso/tema3/1.png', alt='Texto que describa la imagen' style="width: 410px")

          .tarjeta.color-info.p-4(x="26%" y="60.2%" numero="")
            .h5.mb-2 RIFAS
            p.mb-5 La rifa es una modalidad de juego de suerte y azar mediante la cual un operador autorizado sortea en una fecha predeterminada,  premios en especie entre quienes hubieren adquirido o fueren poseedores de una o varias boletas emitidas con numeración en serie continua y puestas a la venta con un precio fijo (Art 27 Ley 643/2001 y Decreto 1068/2015).
            span Cuando la rifa opere en dos o más departamentos y el Distrito Capital, la explotación corresponde a Coljuegos. (Coljuegos, 2021).
            figure
              img.center(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen' style="width: 410px")

          .tarjeta.color-info.p-4(x="66%" y="34%" numero="")
            .h5.mb-2 LOTERIA
            p.mb-5 Es una modalidad de juego de suerte y azar realizada en forma periódica por un ente legal autorizado, el cual emite y pone en circulación billetes indivisos o fraccionados de precios fijos singularizados con una combinación numérica y de otros caracteres a la vista obligándose a otorgar un premio en dinero, fijado previamente en el correspondiente plan al tenedor del billete o fracción cuya combinación o aproximaciones preestablecidas coincidan en su orden con aquella obtenida al azar en sorteo público efectuado por la entidad gestora. (Coljuegos, 2021)
            figure
              img.center(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen' style="width: 410px")

          .tarjeta.color-info.p-4(x="64%" y="61%" numero="")
            .h5.mb-2 APUESTAS DEPORTIVAS
            p.mb-5 Artículo 38. Juegos novedosos. Son cualquier otra modalidad de juegos de suerte y azar distintos de las loterías tradicionales o de billetes, de las apuestas permanentes y de los demás juegos a que se refiere la presente ley. Las apuestas deportivas se consideran juegos novedosos, que no requiera la presencia del apostador. Lo anterior únicamente en relación con los juegos que administra y/o explota Coljuegos.(Coljuegos, 2021)
            figure
              img.center(src='@/assets/curso/tema3/4.png', alt='Texto que describa la imagen' style="width: 410px")


    p.mb-4(data-aos="fade-right") Por lo general, es posible encontrar agencias comercializadoras con los siguientes productos y servicios adicionales:

    .row.mb-5(data-aos="fade-down")
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
          .tarjeta.color-acento-contenido
            .p-5
              h2.text-center OTROS PRODUCTOS
              p Venta de seguros.
              p Otros productos de naturaleza digital.
    separador


    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Dinámica y aplicación

    p.mb-4(data-aos="fade-right") En la actualidad existen múltiples marcas de juegos de suerte y azar, estas son reguladas por la normatividad nacional y departamental según las políticas regionales y de la república de Colombia.
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-md-4
        figure
          img(src='@/assets/curso/tema3/coljuegos.jpg', class='img-fluid')
      .col-md-8
        p.mb-4 Entre otras, la entidad responsable de regular los juegos de suerte y azar en el orden Nacional es Coljuegos, del Ministerio de Hacienda y Crédito Público, todas las entidades como casinos, bingos, apuestas en deportes, carreras virtuales y comercializadoras están regidas por esta entidad que inició sus funciones en el año 2012.
        p Los juegos y premios están sujetos al pago de condiciones tributarias, pagos de impuestos, retenciones especiales y otras disposiciones que es necesario mirar con detalle según el departamento o zona en la que operan. Cada plan de premios tiene sus características particulares y según la comercializadora o red de juegos deberá orientar y capacitar a su fuerza de venta en las dinámicas de juegos, planes de premios y condiciones específicas.

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
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
    mostrarIndicador: true,
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
