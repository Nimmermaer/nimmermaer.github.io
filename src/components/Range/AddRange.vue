<template>
  <div id="range">
    <Navbar/>
    <form action="#">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="range top giraffe"><img :src="require('@/assets/giraffe.png')" width="70px"/></div>
          </div>
          <div class="col s12"><p class="range-field">
            <div class="canvas" @mouseover="logCoords">{{ coords.x }} {{ coords.y }}</div>
          </div>
          <div class="col s12">
            <div class="range bottom wolf"><img :src="require('@/assets/wolf.png')" width="70px"/></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import Navbar from '@/components/Partials/Navbar';

  export default {
    name: "AddRange",
    data() {
      return {
        coords: {
          x: 0,
          y: 0,
        }
      }
    },
    components: {
      Navbar,
    },
    methods: {
      logCoords(e) {
          this.coords.x = e.offsetX;
          this.coords.y = e.offsetY;
      }
    }
  }
</script>

<style scoped>
  #giraffewolf {
    transform: rotate(90deg);
    margin-top: 150px;
  }

  .range {
    text-align: center;
    display: block;
    width: 100%;
  }
.canvas {
  width: 100%;
  text-align: center;
  height: 400px;
  background: pink;
}
</style>
