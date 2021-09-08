<template>
  <div class="snav">
    <div class="sburger" @click="showLinks">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="snav__links">
      <ul>
        <a><li>Programas Prioritarios</li></a>
        <a><li>Historias del Bienestar</li></a>
        <a><li>Prensa</li></a>
        <a><li>Galería</li></a>
        <a><li>Documentos</li></a>
        <a><li>Directorio</li></a>
        <a><li>Contacto</li></a>
        <a><li>Transparencia</li></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showLinks() {
      document.querySelector('.snav__links').classList.toggle('active');
      document.querySelector('.sburger').classList.toggle('toggle');
    }
  }

}
</script>

<style scoped>

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  ul {
    text-align: start;
    list-style: none;
  }

  li {
    padding: 10px;
    cursor: pointer;
  }

  a {
    color: white !important;
    text-decoration: none;
  }

  .snav {
    z-index: 98;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 45px;
    background-color: rgba(16, 38, 32, 0.95);
  }

  .snav__logo {
    height: 50px;
    margin: 0px 10px;
  }

  .snav__links {
    background-color: rgba(16, 38, 32, 0.95);
    max-height: 0;
    overflow: hidden;
    position: absolute;
    top: 110px;
    width: 100%;
  }

  .snav__links.active {
    transition: all 600ms linear;
    max-height: 500px;
  }

  .sburger {
    cursor: pointer;
  }

  .sburger > div {
    background-color: rgba(255, 255, 255, 0.5);
    margin: 4px;
    width: 30px;
    height: 4px;
    transition: all ease 300ms;
  }

  .sburger:hover > div {
    background-color: white;
  }

  .sburger.toggle > div {
    background-color: white;
  }

  .toggle div:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .toggle div:nth-child(2) {
    opacity: 0;
  }
  .toggle div:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .active {
    display: block;
    transform: translate(0%, 0px);
  }
  .inactive {
    display: none;
  }

</style>