<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Relaciones interpersonales

    p.mb-5 Los vínculos que se establecen entre las personas se llaman relaciones interpersonales, estos lazos tienen muchos rasgos como por ejemplo la convivencia y la vida como sociedad, estos vínculos se desarrollan con la familia, con los amigos, con los compañeros de trabajo y en otros escenarios de socialización, las relaciones interpersonales se inician desde la niñez y son muy importantes para desarrollar las sociedades, la construcción y el fortalecimiento de vínculos con los demás es una construcción individual.

    .row.justify-center.mb-5(data-aos="fade-down") 
      .col-12.col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.px-5.py-4.posit_1
            p Sostener los vínculos interpersonales contribuye a la generación de habilidades individuales y sociales con la comunidad. Esto se refiere a aprender a cooperar, dialogar, expresar emociones y sentimientos, trabajar en equipo, respetar instrucciones, normas, reconocer la autoridad, cumplir con nuestras labores, negociar, empatizar y escuchar al otro.
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/t6-1.png')})`}") 
      
    .bg_grad-05.mb-5(data-aos="fade-up")
      .row.justify-center
        .col-12.col-lg-3
          figure
            img.img200(src='@/assets/curso/tema6/t6-2.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-7.align-items-center
          div.p-3.p-lg-0.mt-5
            h4.colr Comunicación     
            p.colr_1.mb-0 La clave es la comunicación. Esto implica la capacidad de transferir mensajes e información a los demás sin importar si el mensaje es positivo o negativo, si se buscan vínculos sanos se debe procurar comunicar de forma clara, sin causar heridas a nadie, comprendiendo y retroalimentando al otro.
    
    h3.mb-5 Relaciones interpersonales con personas en condición de discapacidad
    
    .row.mb-5
      .col-12.col-lg-8(data-aos="fade-right")
        p Las empresas deben preocuparse por cumplir con las expectativas que tienen sus clientes y tener en cuenta que algunas de las personas que van a atender tienen alguna discapacidad física, mental o sensorial. Las personas discapacitadas tienen los mismos derechos que el resto de la población, por lo que las empresas deben contar con un protocolo de atención al cliente en condición de discapacidad. Es decir, planear su forma de actuar frente a las circunstancias con el fin de cumplir con las políticas de inclusión que amparan a esta población. Es por esto que se hace necesario que las personas de atención al cliente estén preparadas y capacitadas para tener una actitud de servicio que supere las expectativas de los discapacitados.
        p Las relaciones interpersonales que se deben dar con las personas en condición de discapacidad tienen que contar con un trato digno, respetuoso, utilizando un lenguaje adecuado acorde con la discapacidad del cliente, evitando términos excluyentes.
      .col-12.col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/t6-3.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/t6-4.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p.mt-4 Las personas en condición de discapacidad que ingresen a cualquier establecimiento comercial o de atención al cliente deben ser atendidas con prioridad para evitarles largos tiempos de espera, también se debe tener en cuenta permitir el ingreso de perros guía y acompañantes si los tienen, la infraestructura debe contar con espacios para la movilidad de esta población, en muchas ocasiones el funcionario debe desplazarse hasta donde se encuentre la persona en condición de discapacidad. Todos los funcionarios deben cumplir con los protocolos establecidos para atender a los clientes en condición de discapacidad.
        .cajon.bgr_8.p-4.mt-5
          p.mb-0 Las empresas deben contar con señalización visual para las personas en condición de discapacidad auditiva que les permitan saber que cuenta con atención especial, en el caso de las personas en condición de discapacidad motriz deben existir rampas de ingreso y salida, para las personas con discapacidad visual debe haber lenguaje braille ubicado en sitios estratégicos para que el cliente sepa dónde dirigirse.

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Tipos 

    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/t6-5.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p.mt-5 Las relaciones interpersonales con los clientes consisten en ofrecer una buena experiencia que radica en tratarlos con amabilidad, respeto y agilidad a través de los diferentes canales de comunicación con los que cuente la empresa. Un gran porcentaje de empresas declara que el <em>software de Customer Relationship Management</em> (CRM) aumentó el acceso y administración de datos de los clientes. Son las que se dan entre los individuos, empresas e instituciones y el mercado de consumo que tiene el sector comercial, se da por la necesidad de adquirir productos o servicios.
    
    p.mb-5 Ahora se señalan las relaciones interpersonales con los clientes.

    .row.mb-5.justify-center(data-aos="zoom-out")
      .col-12.col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Relación de asistencia personal")
            .col-md-2
              figure
                img.img70(src='@/assets/curso/tema6/t6-13.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Es la que se da entre un funcionario de atención al cliente y el cliente, se puede dar de diferentes maneras tales como física (cara a cara), o a distancia (correo electrónico, telefónicamente, etc.).
          .row(numero="2" titulo="Relaciones de asistencia personal exclusiva")
            .col-md-2
              figure
                img.img70(src='@/assets/curso/tema6/t6-14.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Este tipo de asistencia se da con clientes especiales o con marcas de lujo, en estos casos asignan un representante de la empresa para brindar un acompañamiento constante al cliente en todo su proceso de compra o de uso de un servicio. Estos servicios los reciben empresarios que tienen cuentas en bancos privados, políticos importantes y celebridades.
          .row(numero="3" titulo="Relación de autoservicio")
            .col-md-2
              figure
                img.img70(src='@/assets/curso/tema6/t6-15.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 En ese tipo de relación la empresa no mantiene relación directa con el cliente, pero la empresa sí ofrece las herramientas necesarias para que el cliente busque ayuda en el momento que lo requiera, estos centros de ayuda son los <em>chatbots</em> y foros, también Amazon y MercadoLibre que ofrecen una buena atención al cliente y le resuelven sus problemas sin necesitar un representante de servicio al cliente.
          .row(numero="4" titulo="Relaciones a través de servicios automatizados")
            .col-md-2
              figure
                img.img70(src='@/assets/curso/tema6/t6-16.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Esta relación se refiere a la inteligencia artificial (expresada por máquinas, procesadores y <em>software</em>), lastimosamente no es una tecnología muy usada en Colombia para establecer buenas relaciones con los clientes.
          .row(numero="5" titulo="Relaciones de comunidades")
            .col-md-2
              figure
                img.img70(src='@/assets/curso/tema6/t6-17.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Con esta relación las empresas pueden demostrar su ventaja competitiva en el mercado al integrar al cliente a través de las diferentes tecnologías, creando grupos con intereses y necesidades en común, este tipo de comunidades permite conocer de primera mano la opinión del cliente.
      
    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Factores

    p Según los portales <em>web</em> especializados Impulsa y Vida Profesional, la mejor forma para llegar al cliente es a través de la atención. Al momento de ofrecer productos hay que hablar de las ofertas y los descuentos, se debe estar atento a brindar una buena atención, estas acciones pueden llegar a reducir costos y benefician tanto a la empresa como al cliente.
    p.mb-5 Los factores que intervienen en la atención al cliente son:

    .bg_grad-06(data-aos="zoom-in")
      .row.justify-center
        .col-12.col-lg-8
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Sociabilidad
                  p Capacidad de interrelacionarse con otros, saber entablar conversaciones amigables, demostrar interés por las personas.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-6.svg', alt='Texto que describa la imagen')
            .row
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/tema6/t6-7.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Comunicación clara y directa
                  p La comunicación debe ser sana, se deben tener en cuenta las fortalezas de la empresa y los beneficios que se puedan ofrecer para cada caso.
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Honestidad
                  p No se debe engañar a los clientes, debe darle lo que le promete, el cliente engañado es cliente perdido.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-8.svg', alt='Texto que describa la imagen')
            .row
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/tema6/t6-9.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Conocimiento del cliente
                  p Conozca muy bien a su cliente, manténgase informado sobre sus necesidades y expectativas, tome la delantera frente a lo que necesita, sea proactivo, esto puede darle ventaja con respecto a la competencia que ofrece los mismos productos y servicios.
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Saber escuchar
                  p Es muy importante estar atento, los clientes son el termómetro que mide nuestra productividad, esté pendiente de escuchar sus quejas y sugerencias.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-10.svg', alt='Texto que describa la imagen')
            .row
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/tema6/t6-11.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Sea creativo y efectivo
                  p Sea innovador frente a las soluciones que le ofrezca de una manera efectiva, hágale sentir que sus necesidades son su prioridad.
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Busca las respuestas
                  p No solamente debemos escuchar, algunas veces tendremos que ir a buscar las respuestas que necesitamos del cliente para mejorar el servicio, en ocasiones el cliente desconoce lo que quiere, esa es la oportunidad que tiene para ofrecerle soluciones y brindarle sus productos y servicios
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-12.svg', alt='Texto que describa la imagen')
            


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
