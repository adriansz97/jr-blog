<template>
  <div class="container-slider">
    <div class="slider" id="slider">
      <div class="slider__section">
        <img src="@/assets/img1.jpeg" alt="" class="slider__img">
      </div>
      <div class="slider__section">
        <img src="@/assets/img2.png" alt="" class="slider__img">
      </div>
      <div class="slider__section">
        <img src="@/assets/img3.jpeg" alt="" class="slider__img">
      </div>
      <div class="slider__section">
        <img src="@/assets/img4.jpeg" alt="" class="slider__img">
      </div>
    </div>
    <div class="slider__btn slider__btn--right">&#62;</div>
    <div class="slider__btn slider__btn--left">&#60;</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .container-slider{
    width: 90%;
    max-width: 900px;
    margin: auto;
    overflow: hidden;
    position: relative;
  }

  .slider {
    display: flex;
    width: 400%;
    height: 400px;
  }

  .slider__section {
    width: 100%;
  }

  .slider__img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .slider__btn {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    top: 50%;
    transform: translateY(-50%);
    font-size: 26px;
    font-weight: bold;
    font-family: monospace;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .slider__btn:hover {

  }

  .slider__btn--left {
    left: 10px;
  }

  .slider__btn--right {
    right: 10px;
  }

</style>