// pages/fileTest/fileTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  SavedFileList(){
    wx.downloadFile({
      url: 'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
      success: (result) => {
        var path=result.tempFilePath
        wx.saveFile({
          tempFilePath: path,
          success(res){
            var saveFilePath=res.savedFilePath
            console.log('本地文件路径'+saveFilePath);
          }
        })
      },
      fail: (res) => {
        console.log('上传失败');
      },
      complete: (res) => {},
    })
  },
  getSavedFileList(){
    wx.getSavedFileList({
      success(res){
        var fileList=res.fileList;
        console.log(fileList);
        for (var i=0;i<fileList.length;i++){
          var file=fileList[i];
          console.log("第"+(i+1)+"个文件");
          console.log("文件创建时间:"+file.createTime);
          console.log("文件大小:"+file.size);
          console.log("文件本地路径:"+file.filePath);

        }
      }
    })
  },
  getSavedFileInfo(){
    wx.getSavedFileList({
      success(res){
        var fileList=res.fileList;
        console.log(fileList);
        wx.getSavedFileInfo({
          filePath: fileList[0].filePath,
          success(res){
            console.log("文件大小"+res.size+"文件创建"+res.createTime);
          }
        })
      }
    })
  },
  deleteSavedFile(){
    wx.getSavedFileList({
      success(res){
        var fileList=res.fileList;
        console.log(fileList);
        var file=fileList[0];
        wx.removeSavedFile({
          filePath: file.filePath,
          complete:function(res){
            console.log(res);
          }
        })
      }
    })
  },
  open(){
    wx.chooseMedia({
      count:9,
      success(res){
        var path=res.tempFiles[0].tempFilePath
        wx.downloadFile({
          // 示例 url，并非真实存在
          url: path,
          success: function (res) {
            const filePath = res.tempFilePath
            wx.openDocument({
              filePath: filePath,
              // fileType:
              success: function (res) {
                console.log('打开文档成功')
              },
              fail(err){
                console.log(err);
              }
            })
          }
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