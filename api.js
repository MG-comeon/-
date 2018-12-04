const getData = (url, params)=>{
  console.log(url)
  console.log(params)
  let promise = new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      data: params.data,
      method: params.method || 'GET',
      header: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
      success:function(res){
        resolve(res)
      },
      fail:function(res){
        reject('网络出错')
      }
    })
  })
  return promise;
}
let url = 'https://dev.hz13923.com'
// let url = 'https://api.hz139.com'
// 登陆
const login = params => getData(url + '/portal/user/weixin/login', params)
const bind = params => getData(url + '/portal/user/weixin /bind', params)
module.exports = {
  login,
  bind
}
// 接口用例 需注释
let params = {
  method: 'POST',
  data: {
    code: res.code,
    userType: 2
  }
}
api.login(params).then(res => {
  wx.hideLoading()
  console.log(res)
  if (res.statusCode == 200) {
    switch (parseInt(res.data.code)) {
      case 200:
        // 登陆成功要做的

        break;
      default:
        //异常数据返回 
        wx.showToast({
          title: res.data.code + res.data.message,
          icon: 'none',
          duration: 2000
        })
    }
  } else {
    return res.statusCode
  }
}).catch(res => {
  wx.showToast({
    title: '网络错误' + res,
    icon: 'none'
  })
})