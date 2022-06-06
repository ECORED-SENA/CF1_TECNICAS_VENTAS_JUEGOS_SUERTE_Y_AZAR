<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normatividad de seguridad de la información para contactar al cliente 
    
    


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
