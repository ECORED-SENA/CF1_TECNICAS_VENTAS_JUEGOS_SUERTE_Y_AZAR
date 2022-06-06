<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La comunicación con el cliente

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Características, tipos y elementos

    
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Jerarquización

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Técnicas de comunicación oral, escrita y corporal
    
    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Técnicas de comunicación efectiva y asertiva
    

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
