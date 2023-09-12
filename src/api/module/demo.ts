import http from '../request'

export const get = {
  url: `${import.meta.env.VUE_APP_DEMO_API}/demo/ver`,
  name: 'Get 方法演示',
  async get(params = {}) {
    return await http.get(this.url, params)
  },
}

export const post = {
  url: `/demo/post`,
  name: 'Post 方法演示',
  async post(data = {}) {
    return await http.post(this.url, data, {})
  },
}

export const findPageWrap = {
  url: `https://api.zhengdr.com/api/v1//certificate/findPageWrap`,
  name: '获取证书列表',
  async post(
    data = {
      pageNum: 1,
      pageSize: 20,
      params: {},
    }
  ) {
    return await http.post(this.url, data)
  },
}
