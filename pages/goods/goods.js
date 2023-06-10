// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    danmuList:[
      {
        text:'第一条弹幕',
        color:'#ff0000',
        time:5
      },
      {
        text:'第二条弹幕',
        color:'#ff0000',
        time:20
      }
    ]
  },
  switchNav(e){
    console.log(e);
    var page=this;
    var current=e.target.dataset.current;
    if(this.data.currentTab==current){
      return false;
    }else{
      page.setData({currentTab:current})
    }
  },
  seeDetail(e){
    var goodsId=e.currentTarget.current;
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail?goodsId='+goodsId,
    })
  },
  searchInput(e){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var current=options.id
    console.log(current);
    this.setData({currentTab:current})
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