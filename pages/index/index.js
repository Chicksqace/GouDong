// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiper: {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      imgPath: ["/images/haibao1.png", "/images/haibao2.png", "/images/haibao3.png"],
      indicatorDots: true,
      vertical: false,
      interval: 2000,
      duration: 500,
      autoplay: true
    },
    recommandData: [{
        id: "001",
        name: "山海经",
        price: "￥62.8",
        imgPath: "/images/hotList/hotList1.png"
      },
      {
        id: "002",
        name: "历史的温度",
        price: "￥41.88",
        imgPath: "/images/hotList/hotList2.png"

      },
      {
        id: "003",
        name: "第一行代码 Java",
        price: "￥57.7",
        imgPath: "/images/hotList/hotList3.png"

      }
    ],
    skillData: [{
      id: "001",
      name: "微信小程序开发零基础入门",
      price: "￥60.8",
      imgPath: "/images/promotion/miaosha1.jpg"
    },
    {
      id: "002",
      name: "微信小程序开发快速入门",
      price: "￥45.88",
      imgPath: "/images/promotion/miaosha2.jpg"

    },
    {
      id: "003",
      name: "微信小程序运营和推广自学手册",
      price: "￥60.7",
      imgPath: "/images/promotion/miaosha3.jpg"

    }
  ]


  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },


})