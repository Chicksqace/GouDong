// pages/cartTest/cartTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat:0,
    lon:0,
    name:''
  },
  getAdd(){
    wx.chooseAddress({
      success(res){
        console.log(res);
      }
    })
  },
  getLocation(){
    wx.getLocation({
      success:(res)=>{
        console.log(res);
        this.setData({
          lat:res.latitude,
          lon:res.longitude
        })
      }
    })
  },
  chooseLoc(){
    wx.chooseLocation({
      success:(res)=>{
        console.log(res);
        this.setData({
          lat:res.latitude,
          lon:res.longitude,
          name:res.name
        })
      }
    })
  },
  openLoc(){
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 30.31652,//要去的纬度-地址
          longitude: 120.382833,//要去的经度-地址
          name: "垃圾学校",
          address: '浙江经贸'
        })
      }
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
    this.mapCtx=wx.createMapContext('map01')
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