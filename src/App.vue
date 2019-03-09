<template>
  <div id="app">
    <div ref="statsBox" class="stats-box">
      <div class="stats">
        <div class="stats-names">
          <h1>Produced:</h1>
          <h1>Consumed:</h1>
          <h1>Delta3:</h1>
          <h1>AvgP:</h1>
          <h1>AvgC:</h1>
        </div>
        <div class="stats-values">
          <h1 ref="produced">&nbsp;{{ produced }}</h1>
          <h1 ref="consumed">&nbsp;{{ consumed }}</h1>
          <h1>&nbsp;{{ delta3 }}</h1>
          <h1>&nbsp;{{ avgProduced }}</h1>
          <h1>&nbsp;{{ avgConsumed }}</h1>
        </div>
      </div>
    </div>
    <chart/>
  </div>
</template>

<script>
// @ is an alias to /src
import chart from '@/components/chart.vue'
import config from './config'
import store from './store'

export default {
  name: 'home',
  components: {
    chart
  },
  data: function () {
    return {
      state: store.state
    }
  },
  mounted: function () {
    this.$refs.statsBox.style.color = 'white'
    document.body.style.backgroundColor = config.pageBackground
    document.body.style.height = '100vh'
    document.body.style.margin = '0'
    document.body.style.fontSize = '100%'
  },
  computed: {
    produced: function () {
      this.setBackgroundColor()
      if (this.state.data.produced.wattHours.length) {
        return this.state.data.produced.wattHours[this.state.data.label.length - 1].toFixed(2)
      }
      return (0).toFixed(2)
    },
    consumed: function () {
      if (this.state.data.consumed.wattHours.length) {
        return this.state.data.consumed.wattHours[this.state.data.label.length - 1].toFixed(2)
      }
      return (0).toFixed(2)
    },
    delta3: function () {
      const length = this.state.data.label.length
      if (length > 3) {
        let delta = this.state.data.consumed.wattHours[length - 1] - this.state.data.consumed.wattHours[length - 3]
        delta = Math.abs(delta)
        return delta.toFixed(2)
      }
      return (0).toFixed(2)
    },
    avgProduced: function () {
      let sum = 0
      for (const wh of this.state.data.produced.wattHours) {
        sum += parseFloat(wh)
      }
      if (sum) {
        sum /= this.state.data.produced.wattHours.length
        return sum.toFixed(2)
      }
      return 0
    },
    avgConsumed: function () {
      let sum = 0
      for (const wh of this.state.data.consumed.wattHours) {
        sum += parseFloat(wh)
      }
      if (sum) {
        sum /= this.state.data.consumed.wattHours.length
        sum = sum.toFixed(2)
        return sum
      }
      return 0
    }
  },
  methods: {
    setBackgroundColor: function () {
      const length = this.state.data.label.length
      if (length && this.$refs.statsBox) {
        const produced = this.state.data.produced.wattHours[length - 1]
        const consumed = this.state.data.consumed.wattHours[length - 1]
        if (consumed > produced) {
          this.$refs.statsBox.style.backgroundColor = config.textBackgroundImporting
        } else {
          this.$refs.statsBox.style.backgroundColor = config.textBackgroundExporting
        }
      }
    },
    sum: function (arr) {
      if (arr.length) {
        let a = arr.reduce((a, b) => (a + b))
        return a
      }
      return 0
    }
  }
}
</script>

<style>
.stats-box {
  height: 40vh;
  background-color: darkgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.stats {
  display: flex;
  justify-content: center;
}
.stats h1 {
  margin: 0
}
.stats-names {
  text-align: right;
}
.stats-values {
  text-align: right
}
.left, .right {
  flex: 1;
}
canvas {
  height: 60vh !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}
</style>
