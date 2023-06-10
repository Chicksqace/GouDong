// pages/downLoad/downLoad.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // src:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    
  },
  downLoad(){
    wx.downloadFile({
      url: 'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
      success: (result) => {
        console.log('上传成功',result);
        this.setData({
          src:result.tempFilePath
        })
      },
      fail: (res) => {
        console.log('上传失败');
      },
      complete: (res) => {},
    })
  },
  upload(){
    wx.chooseMedia({
      count:9,
      success(res){
        console.log(res);
        var path=res.tempFiles[0].tempFilePath
        wx.uploadFile({
          filePath: path,
          name: 'file',
          url: 'http://localhost/upload.php',
          success(res){
            console.log('上传成功'+res.data);
          },
          fail(err){
            console.log('上传失败',err);
          }
        })
      },
      fail(err){
        console.log('选择失败'+err);
      }
    })
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