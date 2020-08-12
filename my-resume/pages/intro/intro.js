// pages/intro/intro.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  showQrcode: function () {
    wx.previewImage({
      current: 'cloud://test-9p1vk.7465-test-9p1vk-1302837475/WechatIMG6.jpeg',
      urls: ['cloud://test-9p1vk.7465-test-9p1vk-1302837475/WechatIMG6.jpeg']
    })
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '13120272373'
    })
  },
  saveContact: function () {
    wx.addPhoneContact({
      firstName: '婷婷',
      lastName: '魏',
      remark: '小程序前端工程师',
      mobilePhoneNumber: '13120272373'
    })
  },
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
})
