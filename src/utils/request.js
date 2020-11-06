const BASE_URL = 'https://api-hmugo-web.itheima.net'

export default function(Vue) {
  Vue.prototype.$http = async function(params) {
    const { url, data, header, method = 'GET' } = params
    let res = await uni.request({
      url: BASE_URL + url,
      data,
      header,
      method,
    })
    return res[1].data.message
  }
}
