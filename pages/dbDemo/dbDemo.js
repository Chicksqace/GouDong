// pages/dbDemo/dbDemo.js
// 云数据库的引用
// 获取集合的引用
const collection=wx.cloud.database().collection("list")
let age=""
let name=""
let dataId=""
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addData(){
    collection.add({
      data:{
        name:name,
        age:age
      },
      success(res){
        console.log('添加数据成功',res);
      },
      fail(err){
        console.log(err);
      }
    })
  },
  getData(){
    collection.get({
      success(res){
        console.log("查询成功",res);
      }
    })
  },
  delData(){
    collection.doc(dataId).remove({
      success(res){
        console.log("删除成功",res);
      }
    })
  },
  upData(){
    collection.doc(dataId).update({
      data:{
        name:'cpp',
        age:19
      },
      success(res){
        console.log("修改成功",res);
      }
    })
  },
  input_name(e){
    name=e.detail.value
    console.log(name);
  },
  input_age(e){
    age=e.detail.value
  },
  input_dataId(e){
    dataId=e.detail.value
  },
  upload(){
    wx.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res){
        console.log(res);
        wx.cloud.uploadFile({
          cloudPath:'today/图片.png',
          filePath:res.tempFiles[0].tempFilePath,
          success:res=>{
            console.log(res);
          }
        })
      }
    })
  },
  download(){
    wx.cloud.downloadFile({
      fileID: 'cloud://cpy-9gfilqldc654ffcd.6370-cpy-9gfilqldc654ffcd-1317005544/00张三-《微信应用开发》实训9.docx', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        wx.openDocument({
          filePath: res.tempFilePath,
          success(res){
            console.log(res);
          }
        })
      },
      fail: console.error
    })
  },
  sort(){
    wx.cloud.callFunction({
      name:'add',
      data:{
        a:4,
        b:7
      },
      success(res){
        console.log(res);
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