<template>
  <div class="navs">
    <NavPrim />
    <NavSec />
  </div>
  <div class="sized-box"></div>
  <router-view></router-view>
  <div class="sized-box"></div>
</template>

<script>
import NavPrim from '../components/NavPrim'
import NavSec from '../components/NavSec'

export default {
  components: {
    NavPrim, NavSec
  }
}
</script>

<style scoped>
  .navs {
    position: fixed;
    width: 100%;
  }

  .sized-box {
    height: 110px;
    width: 100%;
  }
</style>