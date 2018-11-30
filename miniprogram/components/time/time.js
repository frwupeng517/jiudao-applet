// components/time/time.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(newVal, oldVal) {
        let index = newVal < 10 && '0' + newVal
        this.setData({
          _index: index 
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: "",
    month: "",
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  ready: function(options) {
    let now = new Date(),
      month = now.getMonth(),
      year = now.getFullYear()

    this.setData({
      year: year,
      month: this.data.months[month],
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
