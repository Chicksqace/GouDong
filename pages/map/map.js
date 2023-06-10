// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[
      {
        iconPath:'/images/定位.png',
        id:0,
        label:{
          content:'垃圾学校',
          color:'#ff0000'
        },
        latitude:30.31652,
        longitude:120.382833,
        width:20,
        height:20
      },
      {
        iconPath:'/images/定位.png',
        id:1,
        label:{
          content:'寝室',
          color:'#ff0000'
        },
        latitude:30.316969,
        longitude:120.387387,
        width:20,
        height:20
      }
    ],
    polyline:[{
      points:[{
        latitude:30.318643,
        longitude:120.379438,
      },{
        latitude:30.31862,
        longitude:120.385668,
      },{
        latitude:30.313897,
        longitude:120.385668,
      },{
        latitude:30.31392,
        longitude:120.382736,
      },{
        latitude:30.316586,
        longitude:120.378862,
      },{
        latitude:30.318643,
        longitude:120.379438,
      }],
      color:"#ff0000",
      width:10,
      dottedLine:true
    }]
  },
  markertap(e){
    console.log(e);
    var mId=e.detail.markerId
    switch(mId){
      case 0:
        console.log('校园');
        break
      case 1:
        console.log('寝室');
        break
    }
  },
  regionchange(e){
    console.log(e);
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