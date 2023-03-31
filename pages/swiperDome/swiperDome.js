// pages/swiperDome/swiperDome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhanghao:"",
    pwd:"",
    currentTab:0,
    isEncrypt:false
  },
  // 切换页码
  switchNav(e){
    if(this.data.currentTab==e.target.dataset.current){
      return false
    }else{
      this.setData({
        currentTab:e.target.dataset.current
      })
    }
  },
  // 获取输入的账号信息
  accountInput(e){
    this.setData({zhanghao:e.detail.value})
  },
  // 获取输入密码的账号
  pwdInput(e){
    this.setData({pwd:e.detail.value})
  },
  //眼睛显示文字或者隐藏文字
  isEncrypt(){
    var isEncrypt=!(this.data.isEncrypt)
    this.setData({isEncrypt:isEncrypt})
  },
  // login判断
  login(){
    let zhanghao=this.data.zhanghao
    let pwd=this.data.pwd
    if(zhanghao.length<3){
      wx.showToast({
        title: '账号不能少于3位',
      })
      return
    }
    if(pwd.length<6){
      wx.showToast({
        title: '密码不能少于6位',
      })
      return
    }
    if(zhanghao=="cpy123" && pwd=="12345678"){
      wx.showToast({
        title: '登录成功',
      })
      wx.navigateTo({
        url: '/pages/find/find',
      })
    }else{
      wx.showToast({
        title: '账号密码不正确',
      })
    }
    // 下面代码要在云开发环境下
    // wx.cloud.database().collection('user').where({zhanghao:zhanghao}).get({
    //   success(res){
    //     console.log('获取数据成功',res);
    //     let user=res.data[0]
    //     console.log("user",user);
    //     if(pwd==user.pwd){
    //       wx.showToast({
    //         title: '登录成功',
    //       })
    //       wx.navigateTo({
    //         url: '/pages/find/find',
    //       })
    //       wx.setStorageSync('user', user)
    //     }
    //     else{
    //       wx.showToast({
    //         title: '账号密码不正确',
    //       })
    //     }
    //   },
    //   fail(res){
    //     console.log('获取数据失败',res);
    //   }
    // })
  },
   // 跳转到注册页面
  handleTapRegister(){
    wx.navigateTo({
      url: '/pages/register/register',
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