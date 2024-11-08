// pages/bind/bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    massage:"信息",
    names:" ",
    path:"/static/001.jpg"
  },
  changedata:function(){
    //获取数据 massage：信息
    console.log(this.data.massage)
    //修改数据
    this.setData({massage:"信息(更新)"})
  },
  getUserName:function(){
    var that = this;
    //调用微信接口获取当前用户信息
    wx.getUserInfo({
      success: function(res) {
        console.log("success",res) 
        that.setData({ 
          names : res.userInfo.nickName ,
          path : res.userInfo.avatarUrl
        });
      },
      fail:function(res){

      }
    })
  },
  xxx:function(){
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log("success",res) 
        that.setData({ 
          names : res.userInfo.nickName ,
          path : res.userInfo.avatarUrl
        });
      },
      fail:function(res){
      }
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