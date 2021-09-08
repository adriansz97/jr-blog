<template>
  <div class="galeria">
    <img class="galeria__img" :src="imageSel" alt="">
    <div class="galeria__puntos">
      <div v-for="(item, index) of images" :key="index" class="galeria__punto" @click="changeSel(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
      images: [
        'https://www.gob.mx/cms/uploads/identity/image/35845/bannerProgramaSV3.jpg',
        'https://www.gob.mx/cms/uploads/identity/image/35846/banners_programas_PCD2.jpg',
        'https://www.gob.mx/cms/uploads/identity/image/35848/banners_programas_NNHMT.jpg',
        'https://www.gob.mx/cms/uploads/identity/image/33298/BIENESTAR_banner_secundario.jpg',
      ],
      imageSel: 'https://www.gob.mx/cms/uploads/identity/image/35845/bannerProgramaSV3.jpg'
    }
  },
  watch: {
    selected(newV, oldV) {
      this.imageSel = this.images[newV]
      document.querySelector(`.galeria__puntos div:nth-child(${oldV+1})`).classList.remove('selectedPoint')
    }
  },
  methods: {
    changeSel(index) {
      this.selected = index
      document.querySelector(`.galeria__puntos div:nth-child(${index+1})`).classList.add('selectedPoint')
    }
  },
  mounted() {
    document.querySelector(`.galeria__puntos div:nth-child(${1})`).classList.add('selectedPoint')
  }

}
</script>

<style>

  .galeria__img {
    width: 100%;
  }

  .galeria__puntos {
    display: flex;
    margin: 5px;
    justify-content: center;
  }

  .galeria__punto {
    cursor: pointer;
    border-radius: 50%;
    margin: 2px;
    height: 15px;
    width: 15px;
    border: 1px solid gray;
  }

  .selectedPoint {
    background-color: rgb(104, 0, 0);
  }

</style>