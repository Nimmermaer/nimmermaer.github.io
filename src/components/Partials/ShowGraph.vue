<template>
  <div class="chart">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  export default {
    name: "ShowGraph",
    data() {
      return {
        item: 'item',
      }
    },
    mounted() {
      let chart = new Chart(document.getElementById("myChart"), {
        "type": "line",
        "data": {
          "labels": ["Montag", "Dienstag", "Mttwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
          "datasets": [{
            "label": "Meine Woche",
            "data": [23, 59, 80, 81, 99, 55, 40],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
          }]
        },
        "options": {}
      });
    }
  }
</script>

<style scoped>

</style>
