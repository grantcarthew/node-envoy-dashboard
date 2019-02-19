<template>
  <div>
    <h1>Consumed: {{ consumed }}</h1>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'bar',
  data: function () {
    return {
      state: store.state
    }
  },
  computed: {
    consumed: function () {
      return this.state.data.consumed.wattHours[this.state.data.label.length - 1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
