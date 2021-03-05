// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     array:[
       {
         title:"待付款",
         images:"unpay.png"
       },
       {
        title:"待发货",
        images:"send.png"
      },
      {
        title:"已发货",
        images:"sended.png"
      },
      {
        title:"待评价",
        images:"review.png"
      },
      {
        title:"退款/售后",
        images:"refund.png"
      },
     ],
     array1:[
       {
         title:"优惠券",
         images:"discount.png"
       },
       {
        title:"收藏夹",
        images:"nav.png"
      },
      {
        title:"商品点评",
        images:"dianping.png"
      },
      {
        title:"联系客服",
        images:"response.png"
      },
    ],
    array2:[
      {
        title:"地址管理",
        images:"guanli.png"
      },
      {
        title:"修改密码",
        images:"pasword.png"
      },
      {
        title:"帮助",
        images:"help.png"
      },
      {
        title:"设置",
        images:"set.png"
      },
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})