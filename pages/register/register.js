// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhanghao:"",
    pwd:""
  },
  // 获取输入的账号信息
  accountInput(e){
    console.log(e.detail.value);
    this.setData({zhanghao:e.detail.value})
  },
  // 获取输入密码的账号
  pwdInput(e){
    this.setData({pwd:e.detail.value})
    console.log(e.detail.value);
  },
  register(e){
    let zhanghao=this.data.zhanghao 
    let pwd=this.data.pwd
    // 校验账号
    if(zhanghao.length<3){
      wx.showToast({
        title: '账号不能少于3位',
      })
      return
    }
    // 校验密码 
    if(pwd.length<6){
      wx.showToast({
        title: '密码不能少于6位',
      })
      return
    }
  // 注册功能 需要云服务
  // wx.cloud.database().collection('user').add({
  //   data:{
  //     zhanghao:zhanghao,
  //     pwd:pwd
  //   },
  //   success(res){
  //     console.log('注册成功',res);
  //     wx.showToast({
  //       title: '注册成功',
  //     })
  //     wx.navigateTo({
  //       url: '../swiperDome/swiperDome',
  //     })
  //   },
  //   fail(res){
  //     console.log('注册失败',res);
  //   }
  // })

  wx.navigateTo({
    url: '/pages/swiperDome/swiperDome',
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