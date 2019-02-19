import axios from 'axios'
import config from '../config'

const _pushData = Symbol('Push data to the arrays')
const _shiftData = Symbol('Shift data out of the arrays')

class Store {
  constructor () {
    this.state = {
      // Separate arrays to support Chart.js datasets.
      data: {
        time: [],
        label: [],
        produced: {
          wattHours: [],
          backgroundColor: [],
          borderColor: []
        },
        consumed: {
          wattHours: [],
          backgroundColor: [],
          borderColor: []
        }
      }
    }
    this.updateAction()
    setInterval(this.updateAction.bind(this), config.updateInterval)
  }

  [_pushData] (time,
    producedWattHours,
    producedBackgroundColor,
    producedBorderColor,
    consumedWattHours,
    consumedBackgroundColor,
    consumedBorderColor) {
    const min = time.getMinutes().toString().padStart(2, '0')
    const sec = time.getSeconds().toString().padStart(2, '0')
    this.state.data.label.push(`${min}:${sec}`)
    this.state.data.time.push(time)
    this.state.data.produced.wattHours.push(producedWattHours)
    this.state.data.produced.backgroundColor.push(producedBackgroundColor)
    this.state.data.produced.borderColor.push(producedBorderColor)
    this.state.data.consumed.wattHours.push(consumedWattHours)
    this.state.data.consumed.backgroundColor.push(consumedBackgroundColor)
    this.state.data.consumed.borderColor.push(consumedBorderColor)
  }

  [_shiftData] () {
    config.debug && console.log('Shifting data arrays')
    this.state.data.time.shift()
    this.state.data.label.shift()
    this.state.data.produced.wattHours.shift()
    this.state.data.produced.backgroundColor.shift()
    this.state.data.produced.borderColor.shift()
    this.state.data.consumed.wattHours.shift()
    this.state.data.consumed.backgroundColor.shift()
    this.state.data.consumed.borderColor.shift()
  }

  async updateAction () {
    try {
      config.debug && console.log('updateAction triggered')
      let produced = 0
      let producedBackgroundStyle = config.producedBackground
      let producedBorderStyle = config.producedBorder
      let consumed = 0
      let consumedBackgroundStyle = config.consumedBackground
      let consumedBorderStyle = config.consumedBorder
      let time = new Date()

      if (config.generateFakeData) {
        produced = Math.floor(Math.random() * 6000)
        consumed = Math.floor(Math.random() * 6000)
      } else {
        const res = await axios.get(`${config.envoyProxyAddress}production.json?details=1`)
        config.debug && console.dir(res.data)
        produced = res.data.production[1].wNow
        consumed = res.data.consumption[0].wNow
        time = new Date(res.data.consumption[0].readingTime)
      }

      if (consumed > produced) {
        consumedBackgroundStyle = config.consumedGreaterThanProducedBackground
        consumedBorderStyle = config.consumedGreaterThanProducedBorder
      }

      if (this.state.data.time.length >= config.maximumDataPoints) {
        this[_shiftData]()
      }

      this[_pushData](time,
        produced,
        producedBackgroundStyle,
        producedBorderStyle,
        consumed,
        consumedBackgroundStyle,
        consumedBorderStyle)
    } catch (err) {
      console.error(err)
    }
  }
}

export default new Store()
