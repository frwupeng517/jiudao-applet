// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike: Boolean,
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    like_url: "images/like.png",
    like_on_url: "images/like-on.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(e) {
      console.log(e)
      let count = this.properties.count
      this.properties.isLike ? count -= 1 : count += 1
      console.log('count')
      console.log(count)
      this.setData({
        isLike: !this.properties.isLike,
        count: count
      })
      let behavior = this.properties.isLike ? 'like' : 'cancel'
      this.triggerEvent('onlike', {
        behavior: behavior
      }, {})
    }
  }
})
