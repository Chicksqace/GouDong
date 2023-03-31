// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "张三",
    score: 65,
    arr: [
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ],
    arr2: [
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ],
    setInfo: [
      "蓝牙",
      "飞行模式"
    ]
  },

  addSwitch() {
    this.data.setInfo.unshift("we")
    this.setData({
      setInfo: this.data.setInfo
    })
  },

  changeName() {
    // this.data.name="里斯"
    // console.log(this.data.name)
    this.setData({
      name: "李四"
    })
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