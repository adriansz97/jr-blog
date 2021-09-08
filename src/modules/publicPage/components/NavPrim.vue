<template>
  <div class="pnav">
    <img class="pnav__logo" src="@/assets/logoheader.svg" alt="logo">
    <div class="burger" @click="showLinks">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="pnav__links">
      <ul>
        <a href="https://mivacuna.salud.gob.mx/index.php" target="_blank"><li>Registro para Vacunación</li></a>
        <a href="https://coronavirus.gob.mx/" target="_blank"><li>Información sobre COVID-19</li></a>
        <a href="https://www.gob.mx/tramites" target="_blank"><li>Trámites</li></a>
        <a href="https://www.gob.mx/gobierno" target="_blank"><li>Gobierno</li></a>
        <a href="https://www.gob.mx/busqueda" target="_blank"><li><i class="fas fa-search"></i></li></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showLinks() {
      document.querySelector('.pnav__links').classList.toggle('active');
      document.querySelector('.burger').classList.toggle('toggle');
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
    color: white;
    text-decoration: none;
  }

  .pnav {
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 65px;
    background-color: rgba(12, 27, 23, 0.95);
  }

  .pnav__logo {
    height: 50px;
    margin: 0px 10px;
  }

  .pnav__links {
    background-color: rgba(12, 27, 23, 0.98);
    max-height: 0;
    overflow: hidden;
    position: absolute;
    top: 65px;
    width: 100%;
  }

  .pnav__links.active {
    transition: all 600ms linear;
    max-height: 500px;
  }

  .burger {
    cursor: pointer;
  }

  .burger > div {
    background-color: rgba(255, 255, 255, 0.5);
    margin: 4px;
    width: 30px;
    height: 4px;
    transition: all ease 300ms;
  }

  .burger:hover > div {
    background-color: white;
  }

  .burger.toggle > div {
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