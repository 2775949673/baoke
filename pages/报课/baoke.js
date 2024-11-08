// pages/报课/baoke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    timeRange: ['8:00-10:00', '14:00-16:00'],
    selectedTime: '',
    datas: {} // 存储报课信息的字典
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
  onUnload:function(options) {
    console.log(options);

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

  },
  inputName: function(e) {
    this.setData({
      name: e.detail.value
    });
  },
  selectTime: function(e) {
    this.setData({
      selectedTime: this.data.timeRange[e.detail.value]
    });
  },
  submitForm: function() {
    if (this.data.name && this.data.selectedTime) {
      this.data.datas[this.data.name] = this.data.selectedTime;
      console.log(this.data.datas); // 输出存储的数据
      wx.showToast({
        title: '提交成功！',
        icon: 'success',
        duration: 2000
      });
    } else {
      wx.showToast({
        title: '请填写姓名和选择时间',
        icon: 'none'
      });
    }
  }
})