// pages/popular/popular.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: "",
    month: "",
    day: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let now = new Date(),
      day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate(),
      month = now.getMonth() + 1,
      year = now.getFullYear()
    
    let formatMonth = ''
    
    switch(month) {
      case 1:
        formatMonth = '一'
        break
      case 2:
        formatMonth = '二'
        break
      case 3:
        formatMonth = '三'
        break
      case 4:
        formatMonth = '四'
        break
      case 5:
        formatMonth = '五'
        break
      case 6:
        formatMonth = '六'
        break
      case 7:
        formatMonth = '七'
        break
      case 8:
        formatMonth = '八'
        break
      case 9:
        formatMonth = '九'
        break
      case 10:
        formatMonth = '十'
        break
      case 11:
        formatMonth = '十一'
        break
      case 12:
        formatMonth = '十二'
        break
    }

    this.setData({
      year: year,
      month: formatMonth,
      day: day
    })

    console.log(day)
    console.log(formatMonth)
    console.log(year)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})