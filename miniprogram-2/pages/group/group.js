// pages/group/group.js
Page({
    gotoCreate(){
        wx.navigateTo({
          url: '/pages/create/create',
        })
    },
    // 跳转到小组详情页--用event接收跳转
    gotoGroup(event){
      console.log("点击获取的数据",event.balabala)
      wx.navigateTo({
        url: '/pages/group/group?',
      })
    },
    //跳转到帖子详情页
    gotoPosts(){
      wx.navigateTo({
        url: '/pages/posts/posts',
      })
    },
    //跳转到个人详情页
    gotoPersonal(){
      wx.navigateTo({
        url: '/pages/personal/personal',
      })
    }
})