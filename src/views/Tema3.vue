<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Portafolio de servicios

    .row
      .col-12.col-lg-5.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/t3-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        p.mt-lg-5 Las condiciones del mercado han cambiado, anteriormente un empresario solo tenía como herramienta para atender al cliente su mirada para verlo a los ojos y su mano para estrecharla; las condiciones del mercado y los avances tecnológicos ofrecen un mundo de posibilidades para contactar al cliente, no solo física, sino virtualmente lo cual les permite ampliar sus expectativas de negocios ampliando la oferta y optimizando recursos.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Elementos

    p.mb-3 Un portafolio bien estructurado, de acuerdo con el experto Alberto Cajal, llega a convertirse en un aliado fiel si es utilizado como medio para llegar al cliente, con el propósito de demostrar un orden de lo que es la empresa y mostrar todo su interior para darse a conocer de forma externa. Un portafolio se utiliza a manera de interacción con el cliente, ya que el documento le permite resolver inquietudes que pueda tener del producto o servicio que ofrece la empresa (Cajal A., 2020).
    p.mb-5 Lo siguiente es lo que necesita un portafolio para cumplir con su objetivo:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 1
      span <em>Elementos básicos de un portafolio</em>

    .row.justify-center(data-aos="fade-left")
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Elemento
                th Recomendación
                th Ítems
            tbody
              tr
                td Información muy detallada de la empresa.
                td Debe aparecer no solo su historia, sino también sus principales clientes y proveedores, esto le ofrece confianza al cliente.
                td 
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Historia de la empresa.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Antecedentes.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Antecedentes.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Fecha de creación.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Tiempo en el mercado.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Socios.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Clientes.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Misión.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Visión.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Objetivos.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Propuesta de valor.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Valores organizacionales.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Estructura de la empresa.
              tr
                td Información del producto.
                td Debe especificar sus componentes y principales características, también los precios y ofertas por compra.
                td 
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Clasificación de los productos o servicios.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Producto o servicio específico.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | La marca de los productos o servicios.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Nombre del producto o servicio.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Características del producto o servicio: Tamaño, forma, color, etc.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Empaque y etiquetado: fecha de vencimiento, recomendaciones de almacenamiento, etc.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Funciones y usos del producto o servicio: para qué sirve, cuáles son sus usos, etc.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Amplitud, extensión y presentación de la línea del producto: número de líneas, cantidad de productos que integran el portafolio, versiones del producto, etc.
              tr
                td Información de la negociación.
                td Se debe especificar las formas de pago y los tiempos de pago en el evento que se venda a crédito y al por mayor.
                td 
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Valor de los productos.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Valor de los servicios.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Valor por unidad.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Valor al por mayor (docenas).
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Descuentos por pronto pago.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Días de descuentos.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Ofertas especiales.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Formas de pago: efectivo, tarjetas débito o crédito
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Recaudo electrónico: diferentes canales como Efecty, Nequi, Daviplata, etc.
              tr
                td Información de contacto.
                td Se Debe especificar todas las formas por las cuales se puedan comunicar los clientes
                td 
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle.colr_2
                      span Página <em>web</em>.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Correo electrónico.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Blog.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Teléfonos fijos.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Teléfonos celulares.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | WhatsApp.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Instagram
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Twitter.
                    li 
                      i.fas.fa-check-circle.colr_2
                      span <em>Call Center</em> (centro de llamadas).
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Fax.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Ubicación o dirección de la empresa y sucursales si las tiene. 
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Características

    p.mb-3 Los portafolios de productos y servicios cuentan con algunas características tales como identificar las metas, plantear las estrategias de ventas, recopilar los productos y servicios ofertados, identificar las perspectivas de crecimiento y la planeación de objetivos.
    p.mb-5 Los portafolios de productos y servicios tienen unas características que se describen a continuación:

    .row.mb-5.justify-center(data-aos="fade-down")
      .col-12.col-lg-4.align-items-end
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-6
         LineaTiempoD.color-primario
          .row(numero="1" titulo="Reseña histórica de la empresa")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-3.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Cuándo fue fundada, nombre de los propietarios y logros a través de la historia.
          .row(numero="2" titulo="Misión")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-4.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Es donde se desarrolla el objetivo general, es la razón de ser y el propósito de la empresa.
          .row(numero="3" titulo="Visión")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-5.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Se plantea en años lo que se desea lograr, hay que tener en cuenta la tecnología y la globalización para no quedar mal con nuestros clientes en caso de que no se logre cumplir.
          .row(numero="4" titulo="Objetivos de nuestra empresa")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-6.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Especifica lo que se quiere alcanzar durante el tiempo de la visión de la empresa.
          .row(numero="5" titulo="Productos")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-7.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Debe tener la información necesaria para que el cliente conozca las características y bondades del producto.
          .row(numero="6" titulo="Servicios")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-8.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Igual a los productos debe tener la información necesaria para dar claridad de lo que se está ofertando.
          .row(numero="7" titulo="Garantías")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-9.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Es el tiempo o fecha hasta la cual la empresa responde por mal funcionamiento o daños que sufra el producto o servicio.
          .row(numero="8" titulo="Socios")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-10.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Son las personas propietarias o inversionistas de la empresa.
          .row(numero="9" titulo="Proveedores")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-11.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Son las personas o empresas que surten la materia prima o productos terminados a la empresa.
          .row(numero="10" titulo="Respaldos")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-12.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Son las personas o empresas que surten la materia prima o productos terminados a la empresa.
              p.mb-0  Este apartado se refiere a los respaldos tanto bancarios como de empresas que estarían dispuestas a responder por la empresa en algún evento adverso, o sea las alianzas que tiene.
          .row(numero="11" titulo="Clientes de la empresa")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-13.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Son las personas o empresas con las que se tiene relación y que les brindan confianza a los clientes.
          .row(numero="12" titulo="Datos de contacto")
            .col-md-2
              figure
                img.img54(src='@/assets/curso/tema3/t3-14.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Todas las formas de comunicación oral, visual o escrita que se puedan dar de la empresa.

    h3(data-aos="fade-right") Portafolio impreso y digital

    p.mb-5 El portafolio puede presentarse impreso o digital, esto depende de la necesidad que tenga la empresa de llegar al cliente.
    
    .row.justify-center.mb-5(data-aos="fade-down") 
      .col-12.col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.px-5.py-4.posit_1
            p El mundo digital es utilizado cada vez con más frecuencia, por esto se recomienda que las empresas promuevan su portafolio de las dos formas para captar más clientes, en el caso de las microempresas como los restaurantes utilizan la carta impresa y una app (aplicación móvil que se puede escanear con un QR), facilitando al cliente la elección de los platos para hacer su pedido.
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-15.png')})`}") 
    

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
