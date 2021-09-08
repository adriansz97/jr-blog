<template>
  <div class="programas">
    <div v-for="(item, index) of programas" :key="index" @click="abrirPrograma(item.url)" 
      class="programas__programa" :style="{ backgroundImage: 'url(' + item.fondo + ')' }">
      <div class="programas__texto">
        <span>{{item.texto}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programas: [
        {
          url: 'https://presidente.gob.mx/apoyo-para-el-bienestar-de-las-ninas-y-ninos-hijos-de-madres-trabajadoras/',
          fondo: 'https://presidente.gob.mx/wp-content/uploads/2019/04/madres-trabajadoras.jpg',
          texto: 'APOYO PARA EL BIENESTAR DE LAS NIÑAS Y NIÑOS HIJOS DE MADRES TRABAJADORAS'
        },
        {
          url: 'https://www.gob.mx/bienestar/acciones-y-programas/programa-sembrando-vida/',
          fondo: 'https://www.gob.mx/cms/uploads/action_program/main_image/21898/post_ImgDstacadaSemVida.jpg',
          texto: 'PROGRAMA SEMBRANDO VIDA'
        },
        {
          url: 'https://www.gob.mx/bienestar/acciones-y-programas/programa-para-el-bienestar-de-las-personas-adultas-mayores/',
          fondo: 'https://www.gob.mx/cms/uploads/action_program/main_image/21897/post_Sin_t_tulo.jpg',
          texto: 'PROGRAMA PARA EL BIENESTAR DE LAS PERSONAS ADULTAS MAYORES'
        },
        {
          url: 'https://www.gob.mx/bienestar/acciones-y-programas/programa-pension-para-el-bienestar-de-las-personas-con-discapacidad/',
          fondo: 'https://www.gob.mx/cms/uploads/action_program/main_image/21896/post_Personas_con_Discapacidad.jpg',
          texto: 'PROGRAMA PENSIÓN PARA EL BIENESTAR DE LAS PERSONAS CON DISCAPACIDAD'
        },
      ]
    }
  },
  methods: {
    abrirPrograma: (url) => {
      window.open(url, "__blank")
    }
  },

}
</script>

<style>

  *, *::after, *::before {
    box-sizing: border-box;
  }

  @media (min-width: 811px) {
    .programas {
      display: flex;
    }
  }

  .programas__programa {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    margin: 10px;
    height: 200px;
    background-size: cover;
    background-position: center;
    flex: 1;
    transition: ease 250ms;
  }
  .programas__programa:hover {
    transform: scale(1.05);
  }
  .programas__texto { 
    width: 100%;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }


</style>