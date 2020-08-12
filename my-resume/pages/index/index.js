import util from '../../utils/util';
const app = getApp()
Page({

  data: {
    animation: null,
    flag: true,
    entercolor: '',
    elements: [{
      title: '个人简介',
      name: 'intro',
      color: 'cyan',
      icon: 'gerenjianjieicon'
    },
    {
      title: '工作经历',
      name: 'company',
      color: 'blue',
      icon: 'gongzuojingyan1'
    },
    {
      title: '项目经验',
      name: 'project',
      color: 'purple',
      icon: 'xiangmujingyan1'
    },
    {
      title: '职业技能 ',
      name: 'skill',
      color: 'mauve',
      icon: 'jinengzu'
    }]


  },
  nextpage (event) {
    const flag = event.currentTarget.dataset.flag
    const { entercolor } = this.data;
    if (flag === "true") {
      entercolor === 'entercolor'
    }
    this.opacityAnimate()


  },
  handletouchmove: function (A) {
    A.touches[0].pageX;
    this.opacityAnimate();
  },
  opacityAnimate: function (event) {
    let { animation } = this.data;
    animation = wx.createAnimation({
      duration: 1500,
      timingFunction: "ease-in-out",
      delay: 0,
      transformOrigin: "50% 50% 0%"
    })
    animation.translate(0, -1300).step(),
      this.setData({
        animationData: animation.export()
      });
  },
  onHide: function () { },
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }

});
