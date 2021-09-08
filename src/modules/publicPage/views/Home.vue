<template>
  <img src="@/assets/fondo_banner.jpeg" alt="">
  <div class="container">
    <div class="titulo">
      <h2>Programas Prioritarios</h2>
      <hr>
    </div>
    <ProgramasPrioritarios />
    <PointGalery />
    <div class="titulo">
      <h2>Historias del bienestar</h2>
      <hr>
    </div>
    <HistoriasDelBienestar />
    <div class="titulo">
      <h2>Prensa</h2>
      <hr>
    </div>
    <Prensa />
    <div class="titulo">
      <h2>Galería</h2>
      <hr>
    </div>
    <Galeria />
    <div class="titulo">
      <h2>Galería</h2>
      <hr>
    </div>
    <Slider />
  </div>
</template>

<script>
import ProgramasPrioritarios from '@/modules/publicPage/components/ProgramasPrioritarios.vue'
import HistoriasDelBienestar from '@/modules/publicPage/components/HistoriasDelBienestar.vue'
import PointGalery from '@/modules/shared/components/PointGalery.vue'
import Prensa from '@/modules/publicPage/components/Prensa.vue'
import Galeria from '@/modules/publicPage/components/Galeria.vue'
import Slider from '@/modules/shared/components/Slider.vue'

export default {
  components: {
    ProgramasPrioritarios,
    PointGalery,
    HistoriasDelBienestar,
    Prensa,
    Galeria,
    Slider
  }
}
</script>

<style scoped>

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  h2 {
    margin-top: 20px;
  }

  .titulo {
    text-align: start;
    width: 100%;
  }
</style>