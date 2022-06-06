<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Etiqueta y protocolo en la atención al cliente, reglas y normas

    p.mb-5 Los clientes que adquieren los productos y servicios se convierten en el alma de las empresas, su comportamiento y consumo representan el éxito o fracaso de la compañía, ya que los clientes son los que deciden si su negocio es bueno o no. Esto hace que sea muy importante que se cree un protocolo y etiqueta para la atención del cliente, pues es más fácil mantener un cliente fidelizado que conseguir nuevos clientes. Es ahí donde cobra importancia el protocolo. <strong>Ningún cliente vuelve a un negocio donde no fue atendido a su gusto.</strong>

    h3 Protocolo

    p.mb-5 Arismendy (2013), consultor de ventas y autor del libro <em>¿Cómo vender?</em>, manual de ventas y atención al cliente, define el protocolo de atención y servicio al cliente, así:

    .row.mb-5.justify-center
      .col-12.col-lg-10
        .cajon.bgr_8.p-4.mb-4
          p.mb-0.text-center.text-bold Un protocolo de atención es la forma de plasmar, para toda la organización, el modo de actuar deseado frente al cliente, buscando unificar los criterios, conceptos, creencias e ideas diversas que se puedan tener respecto a qué es una buena atención.
    
    .row.mb-5
      .col-12.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/t5-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Este protocolo es un documento que se hace manualmente, en él se explica cómo deben actuar los empleados de atención al cliente, el documento detalla las instrucciones de interacción con los clientes, también incluye los planes de contingencia que deben tener los empleados para reaccionar frente a determinadas situaciones y se convierte en una herramienta para capacitar a los futuros empleados.
        p El protocolo es significativo, ya que unifica criterios y explica el comportamiento que la empresa necesita de sus colaboradores, la conducta que deben adquirir y los procedimientos que se tienen que aplicar en la atención al cliente en cualquiera de los canales de contacto con los que cuente la organización.
        p El protocolo de atención y servicio al cliente debe redactarse de manera didáctica, detallada, específica y clara, de manera que oriente a los colaboradores y garantice un aprendizaje. Quienes lo elaboren deben tener experiencia dentro de la empresa y deben conocer los procedimientos y su funcionamiento.
    
    p.mb-5 El protocolo de atención y servicio al cliente debe contener lo siguiente:

    .bg_grad-04.mb-5
      .row
        .col-12.col-lg-7.p-5(data-aos="fade-right")
          ol.lista-ol--cuadro.mt-lg-4
            li 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span a
              | Funciones de sus trabajadores y jerarquía de cada uno de ellos.
            li 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span b
              | Comportamiento que debe adquirir para atender al cliente.
            li 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span c
              | Formas de dirigirse e interactuar con compañeros y clientes.
            li 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span d
              | Forma de llevar a cabo cada operación de atención y servicio al cliente.
            li 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span e
              | Plan de contingencia en situaciones inesperadas especialmente cuando deben atender a cliente en condiciones de discapacidad o clientes insatisfechos o agresivos, esto les enseñará a solucionar problemas complejos.
        .col-12.col-lg-4(data-aos="fade-left")
          figure.justify-end
            img.img320(src='@/assets/curso/tema5/t5-2.svg', alt='Texto que describa la imagen')

    p.mb-5 Las ventajas de tener un protocolo de atención y servicio al cliente son:

    .row
      .col-lg-3(data-aos="zoom-in")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/t5-3.svg' alt='AvatarTop')
          .tarjeta.bgr.h-100.align-items-center
            .p-3.ml
              p.ms-3.mb-0 Estandarizar procesos.
      .col-lg-3(data-aos="zoom-out")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/t5-3.svg' alt='AvatarTop')
          .tarjeta.bgr.h-100.align-items-center
            .p-3.ml
              p.ms-3.mb-0 La atención y servicio al cliente son consistentes.
      .col-lg-3(data-aos="zoom-in")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/t5-3.svg' alt='AvatarTop')
          .tarjeta.bgr.h-100.align-items-center
            .p-3.ml
              p.ms-3.mb-0 Se convierte en la guía para capacitar al nuevo personal.
      .col-lg-3(data-aos="zoom-out")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/t5-3.svg' alt='AvatarTop')
          .tarjeta.bgr.h-100.align-items-center
            .p-3.ml
              p.ms-3.mb-0 Evitar pérdidas financieras ya que sus clientes estarán satisfechos y hablarán bien de la empresa.
    
    h3 Etiqueta
    p.mb-3 En los ambientes donde se tenga que relacionarse con personas que no se conozcan existe la necesidad de hacerlo de una manera adecuada, especialmente si se trabaja en atención y servicio al cliente. Muchas empresas consideran que es un gasto capacitar al personal en etiqueta para atender al cliente, pero deben considerar que por el contrario se convierte en una inversión.
    p.mb-5 La etiqueta reglamenta la conducta de las personas, son aquellas cosas que los demás no pueden hacer por otras. En la Etiqueta para la atención al cliente en las empresas hay que tener en cuenta estas 5 reglas:

    SlyderD.mb-5.fondslyd(:datos="datosSlyder")(data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Capacitar al personal constantemente',
        texto:
          'Las empresas deben capacitar a sus empleados para que puedan mostrar su profesionalismo al desempeñar su función, pues para el trato que deben tener los funcionarios de servicio al cliente con el público no es suficiente que tengan paciencia. Tiene que ver con la capacidad de utilizar herramientas para darle a cada cliente el manejo adecuado.',
        imagen: require('@/assets/curso/tema5/t5-7.png'),
      },
      {
        titulo: 'La visión de tu empresa es importante',
        texto:
          'Las empresas tienen sistemas de última tecnología, pero si no cuentan con departamento de servicio al cliente pueden fracasar, por eso, es importante que, al menos, tengan una persona a cargo con el fin de dar una atención de calidad al usuario.',
        imagen: require('@/assets/curso/tema5/t5-8.png'),
      },
      {
        titulo: 'Conoce a tus clientes',
        texto:
          'A los clientes les gusta sentirse halagados e importantes. Los empleados deberían ser capaces de detectar el momento por el que esté pasando el cliente que llega enojado o en cualquier otro estado de ánimo; así podrán atender cualquier situación incómoda.',
        imagen: require('@/assets/curso/tema5/t5-9.png'),
      },
      {
        titulo: 'Seleccionar y retener personal de calidad',
        texto:
          'Para una empresa no es sano tener una constante rotación del personal, para que no ocurra esto debe hacer una buena selección y contratación de sus colaboradores, teniendo en cuenta que tengan en mente la calidad y servicio de la atención que vayan a prestar.',
        imagen: require('@/assets/curso/tema5/t5-10.png'),
      },
      {
        titulo: 'Proceso de entrega de productos o servicios',
        texto:
          'Las quejas se ocasionan por la entrega inadecuada de productos o servicios; en ese sentido, hay que tener un buen equipo de trabajo que desempeñe bien esta función, poniendo atención en la falla para que no suceda. Es muy importante que el cliente se sienta tranquilo y satisfecho por haber encontrado una empresa responsable en la entrega de productos o servicios.',
        imagen: require('@/assets/curso/tema5/t5-11.png'),
      },
    ],
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
