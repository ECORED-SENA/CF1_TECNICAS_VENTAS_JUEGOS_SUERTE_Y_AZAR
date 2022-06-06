<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La comunicación con el cliente

    .row.mb-5
      .col-12.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/t4-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Hablar de comunicación con el cliente es referirse al contacto que se tiene con él y la información que se comparte, gracias a los diferentes mecanismos y a los avances tecnológicos se abren diversos canales de comunicación con el cliente, que los podemos usar con diferentes propósitos aprovechando sus características.
        p La importancia de la comunicación con el cliente consiste en que se mantenga viva la relación entre la empresa y los consumidores, ya que si no existe dicha comunicación el cliente se puede sentir desprotegido cuando necesite información sobre el producto o servicio que se le haya ofrecido por cualquiera de los canales que tenga para comunicarse; lo mismo puede suceder con clientes potenciales o clientes en condición de discapacidad, los cuales necesitan sentirse escuchados por la empresa.
        p Frecuentemente, se comete el error de utilizar los conceptos de información y comunicación de forma indistinta, cuando en realidad se dirigen a realidades diferentes.

    p.mb-5 Según el modelo de comunicación de Shannon and Weaver (Models y Communication, 2011) Las diferencias entre los dos conceptos son:
     
    .row.justify-center
      .col-12.col-md-10(data-aos="zoom-in-down")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Información")
            .col-md-8.px-5
              p Es unidireccional, ya que va en una sola dirección y la persona que la recibe no puede responder ante ella y no puede emitir un mensaje de respuesta, se limita únicamente a recibirla.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/t4-2.svg', alt='Texto que describa la imagen')
          .row(titulo="Comunicación")
            .col-md-8.px-5
              p Es bidireccional ya que una persona emite un mensaje y otra persona lo recibe, esto le permite reaccionar y dar respuesta inmediata sin importar lo que ocurra ante la situación que se presente, lo importante es que existe una retroalimentación al respecto.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/t4-3.svg', alt='Texto que describa la imagen')
    
    p La comunicación con el cliente debe ser clara para no confundir al público, no importa lo que le tenga que decir, lo importante es evitar confusiones que puedan dejarle una mala experiencia y reputación de la empresa.
    p.mb-5 Tener una comunicación clara y adecuada con el cliente trae tres grandes beneficios.

    .row.mb-5(data-aos="fade-left")
      .col-12.col-lg-4.mb-3.mb-lg-0
        div.p-4.bgr_9 
          figure.justify-center.mb-4
            img.img160(src='@/assets/curso/tema4/t4-4.svg', alt='Texto que describa la imagen')
          h4.text-center Disposición
          p.mb-0.text-center Los clientes están dispuestos a pagar más por los productos o servicios si tienen una buena experiencia donde la comunicación sea eficiente.
      .col-12.col-lg-4.mb-3.mb-lg-0
        div.p-4.bgr_10 
          figure.justify-center.mb-4
            img.img160(src='@/assets/curso/tema4/t4-5.svg', alt='Texto que describa la imagen')
          h4.text-center Recompra
          p.mb-0.text-center Cuando se logra tener una comunicación positiva se tiene más probabilidades de que el cliente vuelva a adquirir y recomendar los productos de la empresa, esto garantiza una relación duradera.
      .col-12.col-lg-4
        div.p-4.bgr_11 
          figure.justify-center.mb-4
            img.img160(src='@/assets/curso/tema4/t4-6.svg', alt='Texto que describa la imagen')
          h4.text-center Reputación
          p.mb-0.text-center Una buena comunicación con los clientes genera una buena reputación de la empresa. Siempre hay que responder a sus dudas por todos los canales de comunicación, resolviendo las necesidades de los clientes.
    
    p De acuerdo al Manual de protocolo para la atención a personas en situación de discapacidad de la Cámara de Comercio de Medellín y a la Convención Internacional sobre los Derechos de las Personas con Discapacidad, así como al Servicio Nacional de la Discapacidad, existen pautas de comunicación para la atención al cliente en condición de discapacidad. Si consigue aplicarlas estará ampliando su mercado, lo que será rentable para su empresa y justo para esta población, ya que son personas que merecen las mismas oportunidades.
    p.mb-5 Se deben tener en cuenta las siguientes recomendaciones:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 1
      span <em>Recomendaciones</em>

    .row.justify-center(data-aos="fade-up")
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido.mb-5 
          .tabla-b__header
            h5.mb-0 Recomendaciones
          table
            tbody
              tr
                td(data-aos="fade-right")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Dirigirse directamente a la persona discapacitada y no su acompañante.
                td(data-aos="fade-left")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Identificar las necesidades y dificultades de la persona con discapacidad.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Cuando el discapacitado es ciego se debe enseñar el nivel de accesibilidad del establecimiento haciendo una clara descripción de los ambientes por donde vaya a transitar, esto le dará precisión, claridad, confianza y seguridad.
                td(data-aos="fade-left")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Ofrecerle una información correcta es fundamental para su comprensión.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Evite sobreprotegerlo, no es una buena estrategia, ellos no lo necesitan y se sienten mal si el funcionario lo hace.
                td(data-aos="fade-left")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | No está bien preguntar por el tipo de discapacidad del cliente, ellos, por lo general, lo comentan cuando consideran que es necesario que usted lo sepa.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Sea cuidadoso con el contacto físico, evite tocarlos como también a sus ayudas técnicas (sillas de ruedas, bastones, etc.) sin que ellos lo soliciten, recuerde que estas herramientas son parte de su espacio personal.
                td(data-aos="fade-left")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Los discapacitados adultos hay que tratarlos de acuerdo con su edad, no se deben tomar decisiones sin consultarles.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Evite referirse a ellos como inválido, minusválido o discapacitado.
                td(data-aos="fade-left")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | Siempre debe preguntar si necesitan de su ayuda, ya que ellos la solicitan en el momento de necesitarla.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | El establecimiento debe estar bien ordenado, no debe haber obstáculos que dificulten la movilidad del cliente en condición de discapacidad.
                td(data-aos="fade-left")
                  ul.lista-ul
                    li.mt-2 
                      i.fas.fa-check-circle.colr_2
                      | No demuestre impaciencia, ofrézcale el tiempo necesario para que se sienta bien atendido.
      .col-12.col-lg-10
        div.bgr_6.d-flex
          p.my-3.px-3  <b>Nota.</b> Tomada de Cámara de Comercio de Medellín (s. f.).
             
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Características, tipos y elementos

    p La comunicación en general debe entenderse como un intercambio. El propósito no es que la conversación suceda desde un solo lado, la intención es provocar reacciones para que exista un flujo de ideas, la comunicación con los clientes sirve como canal para conocerlos mejor y que ellos a su vez conozcan su empresa. También, la comunicación comercial cumple con la función de promocionar una oferta.
    p.mb-5 Con el cliente, sin importar el canal debe recibir una comunicación con las siguientes características.

    .row.mb-5(data-aos="fade-right")
      .col-12.col-lg-4.mb-3.mb-lg-0
        div.p-4.bgr_12 
          figure.justify-center.mb-4
            img.transf(src='@/assets/curso/tema4/t4-7.png', alt='Texto que describa la imagen')
          h4 Clara y sencilla
          p.mb-0 La comunicación con el cliente debe ser clara para no confundir al público, no importa lo que le tenga que decir, lo importante es evitar confusiones que puedan dejarle una mala experiencia y reputación de la empresa.
      .col-12.col-lg-4.mb-3.mb-lg-0
        div.p-4.bgr_12 
          figure.justify-center.mb-4
            img.transf(src='@/assets/curso/tema4/t4-8.png', alt='Texto que describa la imagen')
          h4 Activa
          p.mb-0 La comunicación con el cliente no debe convertirse en un monólogo, se debe estar preparado para las preguntas, ellas ayudan a comprender la necesidad o deseo de los productos o servicios que éste tiene de la empresa.
      .col-12.col-lg-4
        div.p-4.bgr_12 
          figure.justify-center.mb-4
            img.transf(src='@/assets/curso/tema4/t4-9.png', alt='Texto que describa la imagen')
          h4 Abierta
          p.mb-0 La transparencia genera confianza, sea claro con el cliente con respecto al uso y características del producto o servicio, dele a conocer con claridad las políticas de garantía del producto o servicio y no espere que le toque buscar la letra pequeña en los documentos de garantía o manual de funcionamiento.

    p.mb-5 En cuanto a los canales, en la actualidad existen muchos para comunicarse con los clientes, esto facilita la atención y servicio que se le debe prestar para que quede satisfecho con la empresa.
    
    .row.mb-5
      .col-12.col-lg-6(data-aos="fade-right")
        ol.lista-ol--cuadro.mt-lg-4
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 1
            span Sitio <em>web</em>.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 2
            | Línea telefónica.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 3
            | SMS.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 4
            span <em>E-mail</em>  <em>marketing</em>  y boletines electrónicos.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 5
            | Redes sociales.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 6
            span Notificaciones  <em>push</em>  (mensajes que se envían de un servidor remoto hasta los dispositivos).
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 7
            | Encuestas.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 8
            | Anuncios.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 9
            | Atención presencial.

      .col-12.col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/t4-10.png', alt='Texto que describa la imagen')
    
    p.mb-5 Las empresas deben crear estrategias para tener una buena comunicación con sus clientes, sin importar el canal. Se deben evitar al máximo los errores ya que estos afectan la imagen de la empresa y hacen perder clientes. Ahora, se presentan los cuatro errores de comunicación más comunes en la interacción con los clientes.

    .tarjeta.p-lg-4(data-aos="zoom-out").mb-5
      SlyderA(tipo="b")
        .row.p-3.p-lg-5.bgr_13.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema4/t4-15.svg', alt='Texto que describa la imagen')
              h4.bgr_14 No investigar al cliente
              p Muchos ejecutivos de ventas cometen el error de contactar al cliente sin saber quién es antes de ir a una cita, enviar un correo electrónico o hacer una llamada. Asegúrese de saber con quién se va a comunicar, debe conocer en qué empresa trabaja, el cargo que desempeña y la profesión del cliente.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/t4-11.png', alt='Texto que describa la imagen')
        .row.p-3.p-lg-5.bgr_13.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema4/t4-15.svg', alt='Texto que describa la imagen')
              h4.bgr_14 No escuchar al cliente
              p Debe poner mucha atención a lo que el cliente le diga, en las conversaciones telefónicas se comete este error ya que como no lo están viendo puede distraerse, lo que conlleva a la interrupción o la repetición de lo que el cliente le esté diciendo, antes de hacer una llamada se deben planificar los temas a tratar y disponer del tiempo necesario para no pausar la llamada.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/t4-12.png', alt='Texto que describa la imagen')
        .row.p-3.p-lg-5.bgr_13.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema4/t4-15.svg', alt='Texto que describa la imagen')
              h4.bgr_14 No hablar con naturalidad
              p Con sorprendente frecuencia las personas imitan las actitudes corporales de los demás, ya que dos personas que comparten un mismo punto de vista suelen tener también una misma postura.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/t4-13.png', alt='Texto que describa la imagen')
        .row.p-3.p-lg-5.bgr_13.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema4/t4-15.svg', alt='Texto que describa la imagen')
              h4.bgr_14 No contar con suficientes conocimientos o recursos
              p Los clientes se frustran cuando la persona que los atiende no cuenta con los recursos suficientes o información para colaborarle con sus problemas o inquietudes, en estos casos el asesor debe saber dirigirlo al <em>software</em> de quejas y reclamos (CRM) para que le resuelvan sus dudas, pero antes de esto debe procurar resolver por sí mismo la situación.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/t4-14.png', alt='Texto que describa la imagen')
    
    h3 Barreras en la comunicación con el cliente
    p En la comunicación, siendo una actividad básica del ser humano, se presentan obstáculos, sin embargo, hay que destacar la complejidad de elementos que intervienen en ella (culturales, sociales, personales, etc.), que hacen que existan diversas clases de obstáculos que interfieren y la hacen compleja y difícil de desarrollarse.
    p.mb-5 En todo proceso de comunicación se generan obstáculos que dificultan, e incluso, anulan el impacto del mensaje que se quiere transmitir.

    TabsC.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-3.py-md-4(titulo="Barreras físicas")
        .row.justify-center
          .col-md-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/t4-16.svg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Barreras físicas
            p Ubicadas en el canal utilizado para emitir el mensaje, pudiendo distorsionar o anular el mensaje, se refiere a ruidos, interferencias o elementos físicos.
      .py-3.py-md-4(titulo="Barreras sociográficas")
        .row.justify-center
          .col-md-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/t4-17.svg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Barreras sociográficas
            p Tienen que ver con las clases sociales, la religión, las edades, las ideologías, etc., estas barreras son difíciles de derrumbar para llegar a una solución ya que tienen que ver con las creencias de cada individuo.
      .py-3.py-md-4(titulo="Barreras actitudinales")
        .row.justify-center
          .col-md-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/t4-18.svg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Barreras actitudinales
            p Son los deseos, intereses y necesidades de las personas, estas barreras son infinitas teniendo en cuenta que cada persona tiene sus propias percepciones, en ese sentido hay que tener en cuenta que la mente de una persona es diferente a la de los demás, por lo que los intereses también son diferentes y es muy difícil que todos salgan satisfechos.
      .py-3.py-md-4(titulo="Barreras psicológicas")
        .row.justify-center
          .col-md-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/t4-19.svg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Barreras psicológicas
            p Tienen que ver con la personalidad y creencias de las personas, en ese sentido hay que tener en cuenta los pensamientos opuestos, los prejuicios, los valores, etc.
      .py-3.py-md-4(titulo="Barreras semánticas")
        .row.justify-center
          .col-md-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/t4-20.svg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Barreras semánticas
            p Se refiere al lenguaje, idiomas o lenguas que dominen el emisor y el receptor.

    p.mb-5 La comunicación cumple con una serie de funciones y depende de los objetivos propuestos:

    .row
      .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
        .row.bgr_15
          .col-3.px-0.align-items-center
            figure
              img.img90.transf(src='@/assets/curso/tema4/t4-21.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-2
            div
              p.text-bold Informativa 
              p.mb-0 Comunicar información objetiva.
      .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
        .row.bgr_15
          .col-3.px-0.align-items-center
            figure
              img.img90.transf(src='@/assets/curso/tema4/t4-22.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-2
            div
              p.text-bold Expresiva 
              p.mb-0 Mostrar sentimientos o emociones.
      .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
        .row.bgr_15
          .col-3.px-0.align-items-center
            figure
              img.img90.transf(src='@/assets/curso/tema4/t4-23.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-2
            div
              p.text-bold Formativa
              p.mb-0  Incidir en el otro y enseñarle cosas.
    
    .row.justify-center
      .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
        .row.bgr_15
          .col-3.px-0.align-items-center
            figure
              img.img90.transf(src='@/assets/curso/tema4/t4-24.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-2
            div
              p.text-bold Persuasiva
              p.mb-0 Convencer a otros de que hagan algo.
      .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
        .row.bgr_15
          .col-3.px-0.align-items-center
            figure
              img.img90.transf(src='@/assets/curso/tema4/t4-25.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-2
            div
              p.text-bold Entretenimiento 
              p.mb-0 Por el gusto de comunicarse.
      
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Jerarquización

    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/t4-26.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        p Con el ánimo de conocer con quién hacer valer sus derechos, los clientes deben conocer la jerarquización que se da en la atención al cliente. Esto está relacionado directamente con los puestos o roles que desempeña el equipo de trabajo que tiene que ver con esta función.
        p En la jerarquización de la comunicación con los clientes juegan un papel fundamental los representantes de servicio al cliente, los agentes de los call center, los supervisores de servicio al cliente, los gerentes de servicio al cliente, los representantes de soporte técnico, los ingenieros de soporte técnico, etc.
    
    p.mb-5 Los representantes de servicio al cliente deben tener las siguientes cualidades:

    .row.mb-5
      .col-md-4.col-lg-4.col-xl.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjeta-numerada.color-acento-contenido.px-5.py-3.h-100
          .tarjeta-numerada__numero
            .h2 1
          P.mb-0 Capacidad de escuchar atentamente las necesidades del cliente en poco tiempo.
      .col-md-4.col-lg-4.col-xl.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjeta-numerada.color-acento-contenido.px-5.py-3.h-100
          .tarjeta-numerada__numero
            .h2 2
          P.mb-0 Capacidad de escuchar atentamente las necesidades del cliente en poco tiempo.
      .col-md-4.col-lg-4.col-xl.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjeta-numerada.color-acento-contenido.px-5.py-3.h-100
          .tarjeta-numerada__numero
            .h2 3
          P.mb-0 Capacidad de escuchar atentamente las necesidades del cliente en poco tiempo.
    
    p Los roles de servicio al cliente varían en su nombre, en algunas empresas les llaman agentes de servicio al cliente o representantes de servicio al cliente, agentes o representantes de atención al cliente. 
    p.mb-5 A continuación, se presentan los roles que cumplen los representantes de servicio al cliente y las funciones que cada uno desarrolla, es a ellos que los clientes deben acudir para resolver sus situaciones.

    SlyderB.mb-5(:datos="datosSlyder")(data-aos="zoom-in")

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Técnicas de comunicación oral, escrita y corporal
    
    p Se debe tener en cuenta que la comunicación es una habilidad muy importante para relacionarse con los demás, ella permite compartir sentimientos, emociones y pensamientos en los entornos familiar, laboral y social, como la comunicación se logra a través de trasmisión de mensajes verbales y no verbales, hay que tener en cuenta que a veces los mensajes pueden malinterpretarse entre las personas y esto sucede porque no se da una comunicación efectiva y no se tienen en cuenta las técnicas de comunicación.
    p.mb-5 A continuación, se muestran las técnicas de comunicación con sus objetivos y estrategias:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 2
      span <em>Técnicas objetivos y estrategias de comunicación</em>

    .row.justify-center
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Técnica
                th Objetivo
                th Estrategia
            tbody
              tr
                td Comunicación efectiva oral.
                td 
                  ul.lista-ul
                    li 
                      i.far.fa-dot-circle.colr_4
                      | Cuidar las palabras.
                    li 
                      i.far.fa-dot-circle.colr_4
                      | Cuidar el tono y volumen de voz.
                    li 
                      i.far.fa-dot-circle.colr_4
                      | Ofrecer una comunicación constructiva.
                    li 
                      i.far.fa-dot-circle.colr_4
                      | Manejar un nivel emocional adecuado.
                td 
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Las ideas emitidas deben ser claras por medio de palabras entendibles y coherentes para evitar posibles interpretaciones.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Se debe mantener un nivel de voz acorde a la situación en la que se encuentre el emisor
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Debe generarse el intercambio de ideas objetivas, ya que esto incrementa las posibilidades de obtener un diálogo positivo.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Se deben controlar adecuadamente las emociones, sentimientos y pensamientos que se generen durante la conversación para no perder el objetivo principal del diálogo.
              tr
                td Comunicación efectiva no verbal.
                td 
                  ul.lista-ul
                    li 
                      i.far.fa-dot-circle.colr_4
                      | Utilizar lenguaje corporal.
                    li 
                      i.far.fa-dot-circle.colr_4
                      | Mantener contacto visual.
                    li 
                      i.far.fa-dot-circle.colr_4
                      | Cuidar los gestos de la cara.
                td 
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Este lenguaje se debe cuidar, ya que es el que tiene que ver con los movimientos del cuerpo y la postura, con ellos expresamos que aprobamos o desaprobamos la situación en la que nos encontramos.
                    li 
                      i.fas.fa-check-circle.colr_2
                      | Con la mirada se expresan sentimientos de alegría, enojo o tristeza, se recomienda en esta técnica que se debe mantener un contacto visual con el cliente para darle confianza y seguridad a la hora de atenderlo. 
                    li 
                      i.fas.fa-check-circle.colr_2
                      | La cara es la parte de nuestro cuerpo que presenta mayor gestualización, a la hora de atender al cliente se debe ser muy cuidadoso evitando hacer gestos negativos que puedan alterarlo.

    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Técnicas de comunicación efectiva y asertiva
    
    p.mb-5 Para tener una comunicación asertiva y efectiva, se pueden utilizar las siguientes sugerencias:
    
    .row.mb-5.bgr_16
      .col-12.col-lg-7.p-4
        ol.lista-ol--cuadro.mt-lg-4
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 1
            | Manejar las emociones y opiniones, así se aprenderá a comunicarlas.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 2
            | Siempre atender al cliente mirando a sus ojos cuando le esté hablando.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 3
            | Hacer preguntas que le demuestren al cliente que ha captado su interés.
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 4
            | Permitir que el cliente hable, no interrumpirlo y aprender a identificar el momento de intervenir. 
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 5
            | No cambiar el tema abruptamente, ser paciente. 
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 6
            | Ser empático con la persona que esté hablando, maneje su lenguaje no verbal. 
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 7
            | Permitir que el cliente hable, no hacer de la conversación un monólogo, así habrá una buena retroalimentación y los dos aportarán sus opiniones. 
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 8
            | Ser muy cuidadoso con las respuestas sean verbales o no verbales. 
          li 
            .lista-ol--cuadro__vineta.colr_3.text-bold
              span 9
            | No juzgar a las personas, centrarse en el contenido de la conversación.
      .col-12.col-lg-5.align-items-center
        figure
          img.posit_3(src='@/assets/curso/tema4/t4-32.svg', alt='Texto que describa la imagen')

    p.mb-5 En los siguientes dos videos se expone qué es la comunicación asertiva y algunos criterios para utilizarla.

    .bg_grad-01(data-aos="zoom-out")
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/VXQJ7DGmkio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    .bg_grad-01(data-aos="zoom-in")
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/nfJPSfcl_tM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Representante de servicio al cliente',
        texto:
          'Estos funcionarios son los encargados de responder las preguntas del cliente referente a los productos o servicios, procedimientos y políticas de la empresa, también se encargan de resolver problemas, tomar pedidos, manejo de devoluciones de mercancía, responden quejas y facilitan información sobre las ofertas de la empresa, deben resolver diariamente correos electrónicos y llamadas telefónicas.',
        imagen: require('@/assets/curso/tema4/t4-27.png'),
      },
      {
        titulo: 'Agente de centro de llamadas',
        texto:
          'Los funcionarios del centro de llamadas (<em>call center</em>) laboran internamente o en forma remota a través de  un centro de llamadas virtual, entre sus funciones está responder llamadas, solucionar quejas, despertar interés en el cliente y resolver transacciones, estos funcionarios reciben un gran número de llamadas al día.',
        imagen: require('@/assets/curso/tema4/t4-28.png'),
      },
      {
        titulo: 'Supervisor de servicio al cliente',
        texto:
          'Estos funcionarios supervisan al equipo de agentes o representantes de servicio al cliente, participan en el proceso de contratación de los mismos, ayudando a entrevistar y preseleccionar a los candidatos al cargo de servicio al cliente, también participan en el entrenamiento y capacitación del nuevo equipo.',
        imagen: require('@/assets/curso/tema4/t4-29.png'),
      },
      {
        titulo: 'Gerente de servicio al cliente',
        texto:
          'Son los responsables de supervisar a los equipos de atención al cliente, así como  de la contratación y la capacitación de los nuevos representantes de servicio al cliente, realizan seguimiento del rendimiento y progreso de los mismos, es el encargado de gestionar los conflictos que involucren a clientes y representantes del servicio al cliente.',
        imagen: require('@/assets/curso/tema4/t4-30.png'),
      },
      {
        titulo: 'Defensor del cliente',
        texto:
          'Estos funcionarios se encargan de representar los intereses del cliente en las empresas, son responsables de impulsar cambios internos en la organización con el fin de satisfacer las expectativas del cliente.',
        imagen: require('@/assets/curso/tema4/t4-31.png'),
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
