Page({
  data: {
    dataList: [{
      imageUrl: "cloud://test-9p1vk.7465-test-9p1vk-1302837475/24.jpeg",
      descriptionList: [
        '首页：自定义清单、我的清单、所有任务清单、重要的清单、已计划的日程的清单',
        '清单页：添加任务到 "我的一天"或者"重要的"'
      ]
    }, {
      imageUrl: "cloud://test-9p1vk.7465-test-9p1vk-1302837475/25.jpeg",
      descriptionList: [
        '我的一天：展示我的一天的任务清单',
        '重要的：展示标记为重要的任务清单,在当前页添加的任务会自动勾选重要的',
        '已计划的日程：展示选定截止日期的任务清单，在当前页面添加的任务，会自动添加截止日期为当前日期的23:59:59',
        '任务：展示所有的任务清单'
      ]
    }, {
      imageUrl: "cloud://test-9p1vk.7465-test-9p1vk-1302837475/26.jpeg",
      descriptionList: [
        '首页：清单列表向左滑动删除，同时数据更新',
        '清单页：任务列表左滑动添加到”我的一天“中,向右滑动删除当前任务,回到首页更新数据'
      ]
    },
    {
      imageUrl: "cloud://test-9p1vk.7465-test-9p1vk-1302837475/23.jpeg",
      descriptionList: [
        '详情页展示:点击清单列表中的任务进入详情页。点击圆圈为完成，自动更改完成时间为今天，星星为重要的',
        '截止日期组件:选择截止日期  超期图文变红，未超期，图文为高亮蓝色',
        '上传图片:图片上传到云数据库，并且显示在页面中',
        '添加备忘录功能'
      ]
    }
    ]
  },
  clickImg (event) {
    console.log('event', event);
    const imageUrl = event.currentTarget.dataset.url

    wx.previewImage({
      current: imageUrl,
      urls: [imageUrl]
    })
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
});
