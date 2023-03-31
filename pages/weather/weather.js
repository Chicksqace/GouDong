// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: "4",
    low: "-1℃",
    high: "10℃",
    type: "晴",
    city: "北京",
    week: "八日星期二",
    weather: "无持续风向 微风级",
    otherWeather: [{
        id: "002",
        low: "2℃",
        high: "10℃",
        type: "多云",
        week: "9日星期三",
        direction:"无持续风向",
        windLeve: "向微风级",
      },
      {
        id: "003",
        low: "0℃",
        high: "9℃",
        type: "多云",
        week: "10日星期四",
        direction:"无持续风向",
        windLeve: "向微风级",
      },
      {
        id: "004",
        low: "-1℃",
        high: "10℃",
        type: "多云",
        week: "11日星期五",
        direction:"无持续风向",
        windLeve: "向微风级",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})