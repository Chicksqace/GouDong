// pages/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSaleProduct: [{
        pic: "/images/goods/bag.jpg",
        price: "188",
        oriPrice: "199"
      },
      {
        pic: "/images/goods/milk.jpg",
        price: "1880",
        oriPrice: "2000"
      },
      {
        pic: "/images/goods/notebook.jpg",
        price: "999",
        oriPrice: "1999"
      },
      {
        pic: "/images/goods/watch.jpg",
        price: "500",
        oriPrice: "699"
      },
    ],
    productList: [{
      title: "笔记本电脑",
      price: 19999,
      type: "数码产品",
      soldNum: 20000,
      concern: 5,
      img: '/images/goods/notebook.jpg'
    }, {
      title: "可爱包包",
      price: 198,
      type: "潮流",
      soldNum: 20000,
      concern: 100,
      img: '/images/goods/bag.jpg'
    }, {
      title: "特仑苏",
      price: 89,
      type: "食品",
      soldNum: 10000,
      concern: 9,
      img: '/images/goods/milk.jpg'
    }, {
      title: "电话手表",
      price: 39,
      type: "数码产品",
      soldNum: 100,
      concern: 99,
      img: '/images/goods/watch.jpg'
    }]
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