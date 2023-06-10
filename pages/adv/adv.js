// pages/adv/adv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  getAdv(e){
    var page=this
    wx.request({
      url: 'http://192.168.81.253:10001/prod-api/api/metro/rotation/list',
      method:"GET",
      dataType:"json",
      header:{
        'content-type':"application/json"
      },
      success(res){
        console.log(res);
        var list=res.data.rows
        page.setData({list:list})
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