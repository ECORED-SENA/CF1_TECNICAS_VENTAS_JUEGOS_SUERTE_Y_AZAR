<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo de equipos

    p.mb-4 La tecnología se ha adaptado de manera eficiente según las necesidades y los canales de venta, teniendo múltiples opciones de equipos, tales como computadores completos para puntos de venta, tablets especializadas o computadoras móviles de mano (hand held).
    p.mb-4 Los sistemas de cómputo están compuestos por dos elementos esenciales para el funcionamiento integral: Software y Hardware.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-custom-8.p-4(data-aos="fade-right") 
        .row.p-4.mb-4.justify-content-center
          .col-md-5
            figure.mb-5
              img(src='@/assets/curso/tema4/1.svg')
          .col-md-12
            .h2.text-center.text-white Software:
            p.mb-3.text-white.text-center se refiere a los programas, aplicativos, información, datos, procesamiento, etc. Se puede indicar que se trata de lo intangible, que se ve representado en una pantalla, pero que se almacena y procesa dentro de una memoria en el computador en códigos de máquina. Es importante tener habilidades previas con el manejo de programas informáticos y hacer buen uso de los dispositivos físicos. En relación con el Software empleado, es un elemento más específico de cada comercializadora de apuestas y juegos de azar, pues según los servicios y productos que ofertan en su portafolio se podría hacer uso de uno o varios aplicativos, según disposiciones específicas. 
            p.text-white.text-center Es por esto que cada red o empresa de juegos de suerte y azar tienen sus planes específicos de formación para preparar a su fuerza de ventas en el uso de aplicativos específicos según la naturaleza de cada servicio.
 
            

      .col-md.tarjeta.color-custom-9.p-4(data-aos="fade-left")
        .row.justify-content-center.p-4.mb-5
          .col-md-5
            figure.mb-5
              img(src='@/assets/curso/tema4/2.svg')
          .col-md-12  
            .h2.text-center Hardware:
            p.mb-2.text-center se refiere a los dispositivos físicos e interfaces que permiten tener contacto o comunicación con esos aplicativos e información (o sea con el software), es muy fácil y no debe confundirse, pero sí es importante que se les identifique muy bien, pues ambos aspectos deben aprender a manejarlos para el desempeño como vendedor.
    separador       

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Características, tipos y elementos

    p.mb-4 Tecnológicamente existen muchas opciones en equipos de cómputo orientadas a los puntos de ventas o POS (Sistemas de punto de venta), entre los más comunes se encuentran:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-up")
      div(titulo="Handheld (computador de mano) o terminales móviles:")
        .row.align-items-star.justify-content-center.p-4
          .col-lg-2.col-6.mb-4
            img(src='@/assets/curso/tema4/3.svg')
          .col-lg-10
            p.mb-4 Dispositivo de manejo  portátil, sus funcionalidades son muy similares a la de un SmartPhone, excepto  que son equipos que cumplen con características más robustas para soportar el trabajo diario y con calidad, para que su gestión sea precisa y correcta. En términos populares, es un dispositivo de alta gama y resistente, pero no por esto significa que no se deben tener los cuidados adecuados para conservarlos en buen estado.
            p.mb-4 Por lo general, son sistemas que se conectan de manera remota en las redes de datos móviles, dependiendo del modelo, podrían venir con impresora de recibos, lectores de código de barra y otros dispositivos adicionales como lectores de tarjetas de crédito, identificador biométrico, etc.
            p Su uso está orientado a vendedores sin un punto de venta fijo quienes ofertan sus productos a pie. Al ser móvil, el vendedor tiene la posibilidad de desplazarse con este, a los lugares potenciales donde puede encontrar los consumidores, por ende, tendrá mayor rango u opciones de ventas. Una desventaja es que no es posible ofertar todos los servicios del portafolio, pues hay algunas limitaciones como la inseguridad de las calles y la capacidad del equipo que no soporta mayor consumo de todos los productos ofertados; estas transacciones deben hacerse con equipos más completos y conexiones más estables.

      
      div(titulo="Punto de venta POS")
        .row.align-items-star.justify-content-center.p-4
          .col-lg-2.col-6.mb-4
            img(src='@/assets/curso/tema4/4.svg')
          .col-lg-10
            p.mb-3 Son computadoras de un tamaño reducido, pero no son dispositivos móviles, son terminales más completas que se encuentran en puntos de venta fijos en locales y puntos de venta definidos. Estos cuentan con mayor capacidad de trabajo y ejecutan diferentes programas de cómputo, así como la posibilidad de una conectividad más segura, veloz y estable que permite las ventas de prácticamente todos los productos del portafolio de servicios.
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2	Interfaces

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        figure
          img(src='@/assets/curso/tema4/1.png', class='img-fluid')
      .col-md-6
        .cajon.color-acento-contenido(style='background-color: #CCC6E3').p-5
            p.mb-0 Es el canal o medio que permite la comunicación entre el vendedor y la máquina, las interfaces son de tipo software, sus diseño deben ser amigables, para facilitar la interacción y uso de la aplicación, es decir, la ambientación gráfica como colores, disposición de las ventanas, campos, botones, etc.  Cada una de ellas puede variar según su proveedor, al igual que las características y tipos de equipos que requiere para su funcionamiento (ver tabla 2).

    .row.mb-5
      h5.mb-0 Tabla 2
      p <em>Dispositivos, interfaces y equipos de computo</em>

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec1.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            h2.text-center PANTALLA
            p interfaz de salida, lo que quiere decir que la máquina comunica al humano a través del ambiente gráfico para trabajar, por lo general en sistemas POS las pantallas son táctiles, por lo que es también interfaz de entrada, pues el humano le transmite información a la máquina.
      
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec2.svg' alt='AvatarTop')
        .tarjeta.color-2
          .text-black.p-4
            h2.text-center IMPRESORA
            p interfaz de salida, pues la máquina transmite o convierte datos en elementos entendible para el humano. Las impresoras en puntos de venta son con rollos especiales e impresión térmica.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec3.svg' alt='AvatarTop')
        .tarjeta.color-3
          .text-black.p-4
            h2.text-center TECLADO
            p dispositivo que presenta el conjunto de las teclas con los símbolos para escribir el idioma y otras adicionales para ejecutar comandos a la computadora. Cómo permite que el humano le ingrese información a la computadora, es un dispositivo de entrada.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec4.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            h2.text-center LECTOR CÓDIGO DE BARRA
            p o escáner es un dispositivo que utiliza un láser para leer un código de barras y entrar información de manera automática al sistema. Por esta razón, igual que el teclado es una interfaz de entrada.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec5.svg' alt='AvatarTop')
        .tarjeta.color-2
          .text-black.p-4
            h2.text-center LECTOR BIOMÉTRICO
            p se trata de un sensor de huellas digitales dactilares. Es un dispositivo de entrada, que es capaz de leer, guardar e identificar las huellas dactilares.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec6.svg' alt='AvatarTop')
        .tarjeta.color-3
          .text-black.p-4
            h2.text-center MOUSE
            p dispositivo que se maneja con una sola mano y permite dirigir el movimiento del puntero que aparece en pantalla para transmitir diversas órdenes o comandos, por esto es una interfaz de entrada.

    p.mb-4 Si bien, existen más dispositivos que permiten la comunicación con la computadora los mencionados son los más importantes y comunes.        
    separador

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    ///////
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
