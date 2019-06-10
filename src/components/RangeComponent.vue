<template>
  <div class="container">
    <div class="col s12 m4 12">
      <img
        src="../static/img/wolf.png"
        alt=""
        width="100px"
      >
    </div>
    <div class="col s12 m4 18">
      <form action="#">
        <p class="range-field">
          <input
            id="test5"
            type="range"
            min="0"
            max="100"
          >
        </p>
      </form>
    </div>
    <div class="col s12 m4 12">
      <img
        src="../static/img/giraffe.png"
        alt=""
        width="100px"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeComponent'
}
</script>

<style scoped>

</style>
