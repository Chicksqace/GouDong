// components/segmentBar/segmentBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab:0
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      this.setData({currentTab:e.currentTarget.id})
      // 触发一个自定义时间，并把数据传递给组件使用的页面
      this.triggerEvent("changeTab",
      {
        currentTab:e.currentTarget.id
      },{})
    }
  }
})
