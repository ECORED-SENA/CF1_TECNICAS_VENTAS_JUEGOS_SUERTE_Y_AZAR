<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normatividad de seguridad de la información para contactar al cliente 
    
    .row.mb-5         
      .col-12.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/t2-1.png' alt='AvatarTop')
      .col-12.col-lg-8(data-aos="fade-left")
        p Ahora se verá más acerca de la normatividad en seguridad de la información. Según la Norma ISO 27002, las empresas deben tomar medidas de seguridad para proteger los datos de los clientes, pues ellos son tan importantes como los productos y servicios que se estén ofertando; la protección de la información es el pilar fundamental de las empresas para brindar la confianza necesaria a sus clientes, a la marca y para captar nuevas oportunidades de negocios.
        p.bgr_5.p-4 En Colombia, la entidad que regula y vigila el tratamiento de los datos de los usuarios es el Ministerio de las TIC que aplica los estándares de la Norma ISO 27002 para tal fin. La norma ISO 27002 (anteriormente denominada ISO 17799) es un estándar para la seguridad de la información que ha publicado la Organización Internacional de Normalización y la Comisión Electrotécnica Internacional; la versión más reciente de la norma es la ISO 27002:2013.
           
    p.mb-3 La norma ISO 27002 se debe implementar elaborando y manteniendo un inventario de activos de información, donde se muestren los propietarios de los activos con todos sus detalles, se debe utilizar un código de barras que facilite las tareas para la realización de los inventarios y vincular los equipos de tecnología de la información TI, que ingresan y salen de las instalaciones y los empleados responsables de ellos.
    p.mb-5 Para comprender más este tema, en el siguiente video se ofrecen los elementos generales de la seguridad de la información digital o ciberseguridad.

    .bg_grad-01
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/7DCfBZAsU0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p Existen cinco prácticas muy utilizadas por las empresas para garantizar la protección de datos de los clientes, a saber:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 1
      span <em>Prácticas para la protección de datos</em>
    
    .row.justify-center.mb-5
      .col-12.col-lg-6
        figure
          img(src='@/assets/curso/tema2/t2-2.svg' alt='AvatarTop')
    
    p.mb-5 A continuación, se desarrolla cada una de las prácticas que garantizan la protección de los datos de los clientes:

    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .p-3.p-lg-5(titulo="Medios electrónicos certificados" :icono="require('@/assets/curso/tema2/t2-3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Medios electrónicos certificados
            p Para garantizar la protección de datos tanto del cliente como de la empresa se deben ejecutar acuerdos y aprobaciones usando una tecnología segura, en la actualidad puede realizarse desde un computador, un celular o una tableta.
            p Se recomienda la utilización de herramientas electrónicas rápidas y seguras, como por ejemplo la firma electrónica que permite cargar y enviar archivos protegidos evitando que otros los firmen, ya que es una tecnología vanguardista de criptografía de datos que ofrece una mayor protección y respeta las exigencias del mercado. De esta manera se estarán protegiendo los datos del cliente y de la empresa y brindando un excelente servicio en las transacciones electrónicas y dejar constancia de la veracidad del firmante.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-8.png', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="Copia de seguridad" :icono="require('@/assets/curso/tema2/t2-4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Copia de seguridad
            p Se crea una copia <em>"backup"</em>, que es una copia de seguridad de los datos que se elijan desde el lugar donde se esté, ya sea desde el computador, celular, tableta o cualquier otro dispositivo del que se disponga.
            p Lo importante es contar con una mayor seguridad de toda la información para luego disponer de ella a cualquier hora del día durante todo el año y poder recuperarla en caso de que sea necesario.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-8-1.png', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="Carpetas con contraseñas" :icono="require('@/assets/curso/tema2/t2-5.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Carpetas con contraseñas
            p Para mejorar la seguridad de los datos del cliente se puede personalizar a cada uno, organizándolos en carpetas individuales con claves específicas a las que solo tengan acceso y las conozca el personal autorizado para esta función.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-8-2.png', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="<em>Backup</em> en la nube" :icono="require('@/assets/curso/tema2/t2-6.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 <em>Backup</em> en la nube
            p El <em>cloud storage</em> (almacenamiento en la nube) es un servicio tecnológico creado para obtener mayor espacio de almacenamiento, caracterizado por fácil acceso a la información y la protección de los datos del cliente.
            p Hace algunos años la información la guardábamos en dispositivos poco seguros, disquetes, discos ZIP, USB, DVD, CD o discos portátiles que, con el tiempo, algunos de estos se dañaban y se perdía la información o peor aún si se perdían podían caer en manos no deseadas.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-8-3.png', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="Centralización de la información" :icono="require('@/assets/curso/tema2/t2-7.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Centralización de la información 
            p Gracias a que se pueden centralizar los datos en la nube, se evita que estén dispersos en varios programas con diferentes métodos de autenticación y de acceso.
            p Es muy importante preservar tanto los datos del cliente como también las claves de acceso, que permanezcan en un solo lugar hace más fácil y práctico el trabajo.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-8-4.png', alt='Texto que describa la imagen')
    
    p.mb-5 Según cifras del DANE, en el 2021 aumentaron en un 30% los ciberataques en Colombia.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 2
      span <em>Ciberataques en Colombia</em>
    
    figure
      img(src='@/assets/curso/tema2/t2-9.svg', alt='Texto que describa la imagen')
    
    div.bgr_6.my-3.d-flex.mb-5
      p.my-3.px-3  <b>Nota.</b> Datos tomados de Fiscalía General de la Nación (2021).

    h3(data-aos="fade-right") Tecnología segura

    p Toda empresa u organización debe tener herramientas de seguridad digital para proteger los datos del cliente, esto le ofrecerá la tranquilidad y seguridad ya que la tecnología segura no permite que <em>software</em> malicioso ingrese y robe los datos que tenga de su cliente interno y su cliente externo, algunas de estas herramientas son:

    SlyderD.mb-5(:datos="datosSlyder")

    p.mb-3 Las empresas tuvieron que cambiar su estructura e invertir en seguridad digital para la protección de sus datos y los de sus clientes ante la enorme transformación digital que vive el mundo. Como las empresas deben tener seguros sus procesos para captar potenciales clientes, esto no solo debe hacerse en términos digitales, sino también jurídicos lo que le generará confianza al cliente.
    p.mb-5 La utilización de medidas jurídicas para la protección de la información es una de las técnicas más antiguas y efectivas dentro del ámbito laboral, y funcionan de la siguiente manera:

    .row.mb-5(data-aos="fade-up")
      .col-12.bgr_7.justify-center
        h4.mb-0.p-3 Medidas jurídicas
      .col-12.col-lg-6.bgr_5
        div.p-5
          .bg_grad-02
            figure.mb-3.p-3
              img.img320(src='@/assets/curso/tema2/t2-13.svg', alt='Texto que describa la imagen')
          h3 Físicamente
          p Son documentos tipificados que describen responsabilidades y prohibiciones mediante un número no definido de cláusulas para la protección de información y violación de datos.
      .col-12.col-lg-6.bgr_3
        div.p-5
          .bg_grad-02
            figure.p-3.justify-end
              img.img320(src='@/assets/curso/tema2/t2-14.svg', alt='Texto que describa la imagen')
          h3 Digitalmente
          p Son soluciones de cifrado de datos que bloquean el acceso a terceros, evitando que cualquier persona pueda consultar la información garantizando la confidencialidad de los datos del cliente.

    .bg_grad-03(data-aos="fade-down")
      .row.justify-center
        .col-12.col-lg-3
          figure
            img(src='@/assets/curso/tema2/t2-15.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-7.align-items-center
          div.p-3.p-lg-0
            h4.colr Recomendación     
            p.colr_1.mb-0 Se recomienda a todos los departamentos empresariales implementar todas las medidas de seguridad posibles, asimismo, hacer fluir la información de términos y condiciones organizacionales lo que afianzará las funciones de sus trabajadores para alcanzar un desempeño productivo y seguro de cara al cliente.
  
    



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '<em>Software</em> de monitoreo a distancia',
        texto:
          'La herramienta de monitoreo remoto permite emitir diagnóstico y recopilar la información de los diferentes <em>software</em> y <em>hardware</em> que logren resolver cualquier eventualidad que pueda presentarse manteniendo la red en constante vigilancia para asegurar un correcto funcionamiento.',
        imagen: require('@/assets/curso/tema2/t2-10.png'),
      },
      {
        titulo: 'Escáner de vulnerabilidades',
        texto:
          'Este sistema está hecho para detectar, evaluar y gestionar cualquier fragilidad que pueda existir en el sistema de forma que se puedan identificar y priorizar los puntos vulnerables de seguridad para disminuir y eliminar las probabilidades de engaño <em>(phishing)</em> y fraude de información confidencial.',
        imagen: require('@/assets/curso/tema2/t2-11.png'),
      },
      {
        titulo: 'Servidor <em>proxy</em>',
        texto:
          'Es un instrumento o herramienta digital que sirve de intermediario entre el dispositivo y el ordenador que se tenga conectado al internet o servidor al que se esté accediendo, se puede utilizar para bloquear sitios <em>web</em> que se consideren peligrosos o prohibidos para las empresas o instituciones educativas, pues evita que se filtre la información inadecuada.',
        imagen: require('@/assets/curso/tema2/t2-12.png'),
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
