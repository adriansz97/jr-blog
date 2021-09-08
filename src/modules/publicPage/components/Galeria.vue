<template>
  
  <div>
    <h4>Fotos</h4>
    <div class="grid">
      <div class="grid__fotos" v-for="(item, index) in 3" :key="index">
        <p>{{galerias[index].titulo}}</p>
        <div class="grid__fotos-fotos">
          <div v-for="(item, index) in galerias[index].fotos" :key="index" class="grid__fotos-foto">
            <img :src="item" alt="foto">
          </div>
        </div>
      </div>
    </div>
  </div>




  
  <div>
    <h4>Videos</h4>

    <div class="grid">
      <div class="grid__videos" v-for="(_, index) in 2" :key="index">
        <p>{{videoss[index].titulo}}</p>
        <iframe width="450" height="315" :src="videoss[index].url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  data() {
    return {
      galerias: [
        {
          fecha: '30 de agosto de 2021',
          titulo: 'Con entrega total, Bienestar acelera Censo de daños muy devastadores por Huracán Grace',
          fotos: [
            'https://www.gob.mx/cms/uploads/image/file/669635/CensoVer6.jpg',
            'https://www.gob.mx/cms/uploads/image/file/669636/CensoVer8.jpg',
            'https://www.gob.mx/cms/uploads/image/file/669632/CensoVer4.jpg',
            'https://www.gob.mx/cms/uploads/image/file/669640/CensoVer12.jpg',
            'https://www.gob.mx/cms/uploads/image/file/669631/CensoVer2.jpg',
            'https://www.gob.mx/cms/uploads/image/file/669630/CensoVer3.jpg',
          ]
        },
        {
          fecha: '17 de agosto de 2021',
          titulo: 'Avanza en todo México el registro a la Pensión para el Bienestar de las y los adultos mayores',
          fotos: [
            'https://www.gob.mx/cms/uploads/image/file/666643/2__1_web.jpg',
            'https://www.gob.mx/cms/uploads/image/file/666644/1__1_web.jpg',
            'https://www.gob.mx/cms/uploads/image/file/666673/EG0A1076web.jpg',
            'https://www.gob.mx/cms/uploads/image/file/666674/EG0A1016web.jpg',
            'https://www.gob.mx/cms/uploads/image/file/666675/EG0A1117web.jpg',
            'https://www.gob.mx/cms/uploads/image/file/666676/EG0A1115web.jpg',
          ]
        },
        {
          fecha: '09 de agosto de 2021',
          titulo: 'Cumplen programas integrales de Bienestar metas planteadas a favor de los más vulnerables',
          fotos: [
            'https://www.gob.mx/cms/uploads/image/file/664960/COLIMA__2021-08-07-6.jpeg',
            'https://www.gob.mx/cms/uploads/image/file/664961/COLIMA__2021-08-07-8.jpeg',
            'https://www.gob.mx/cms/uploads/image/file/664959/COLIMA__2021-08-07-1.jpeg',
            'https://www.gob.mx/cms/uploads/image/file/664958/COLIMA__2021-08-07-2.jpeg',
            'https://www.gob.mx/cms/uploads/image/file/664962/COLIMA__2021-08-07-9.jpeg',
            'https://www.gob.mx/cms/uploads/image/file/664964/AMR-LOS_CABOS-2021-08-06-1.jpeg',
          ]
        },
      ],
      videoss: [
        {
          titulo: 'Sembrando Vida e Motozintla, Chiapas',
          url: 'https://www.youtube.com/embed/Z7_kfdHULg8',
        },
        {
          titulo: 'Sembrando Vida genera datos reales, confiables y verificables.',
          url: 'https://www.youtube.com/embed/lcEKX2mt9Lg',
        }
      ]
    }
  },

}
</script>

<style scoped>

  * {
    text-align: start;
  }

  .grid {
    display: flex;
  }

  .grid__fotos {
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    flex: 1;
    padding: 10px;
  }

  .grid__fotos-fotos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .grid__fotos-foto {
    width: auto;
    height: auto;
  }

  .grid__fotos-foto img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  .grid__videos {
    text-align: center;
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    flex: 1;
    padding: 10px;
  }

</style>