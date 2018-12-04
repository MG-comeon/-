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
let url = 'https://dev.hz139.com'
// let url = 'https://api.hz139.com'
// 登陆
const login = params => getData(url + '/portal/user/weixin/login', params)
const bind = params => getData(url + '/portal/user/weixin /bind', params)
module.exports = {
  login,
  bind
}