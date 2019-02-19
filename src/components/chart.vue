<template>
  <div class='chart'>
    <canvas id='pv-chart' ref='pvChart'></canvas>
  </div>
</template>

<script>
import store from '@/store'
import Chart from 'chart.js'
import config from '../config'

export default {
  name: 'bar',
  data: function () {
    return {
      state: store.state
    }
  },
  props: {
    value: Number
  },
  mounted: function () {
    const ctx = this.$refs.pvChart
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Produced',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
          },
          {
            label: 'Consumed',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: config.gridLinesY
            }
          }],
          xAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              color: config.gridLinesX
            }
          }]
        }
      }
    })
    this.addData()
  },
  methods: {
    addData: function () {
      this.chart.data.labels = this.state.data.label
      this.chart.data.datasets[0].data = this.state.data.produced.wattHours
      this.chart.data.datasets[0].backgroundColor = this.state.data.produced.backgroundColor
      this.chart.data.datasets[0].borderColor = this.state.data.produced.borderColor
      this.chart.data.datasets[1].data = this.state.data.consumed.wattHours
      this.chart.data.datasets[1].backgroundColor = this.state.data.consumed.backgroundColor
      this.chart.data.datasets[1].borderColor = this.state.data.consumed.borderColor
      this.chart.update()
    }
  },
  computed: {
  },
  watch: {
    state: {
      handler: function () {
        config.debug && console.dir(this.state)
        this.addData()
      },
      deep: true
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.chart {
  /* position: relative; */
  /* height: 50vh; */
  /* width: 96vw; */
}
</style>
