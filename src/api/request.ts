import axios from 'axios'

// vue-cli 用 process.env.VUE_APP_DEMO_API
// vite 用 import.meta..env.VUE_APP_DEMO_API
// 'https://api.zhengdr.com/api/v1/'
axios.defaults.baseURL = import.meta.env.VUE_APP_DEMO_API
axios.defaults.baseURL = ''

// request 拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

// response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: any) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (error.response) {
      if (error.response.status === 404) {
        // ElNotification.error({
        // 	title: '请求错误',
        // 	message: "Status:404，正在请求不存在的服务器记录！"
        // });
      }
    }
    return await Promise.reject(error.response)
  }
)

const http = {
  /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   * @param  {参数} config
   */
  async get(url, params = {}, config = {}) {
    return await new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params,
        ...config,
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} data
   * @param  {参数} config
   */
  async post(url, data = {}, config = {}) {
    return await new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data,
        ...config,
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** put 请求
   * @param  {接口地址} url
   * @param  {请求参数} data
   * @param  {参数} config
   */
  async put(url, data = {}, config = {}) {
    return await new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url,
        data,
        ...config,
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** patch 请求
   * @param  {接口地址} url
   * @param  {请求参数} data
   * @param  {参数} config
   */
  async patch(url, data = {}, config = {}) {
    return await new Promise((resolve, reject) => {
      axios({
        method: 'patch',
        url,
        data,
        ...config,
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** delete 请求
   * @param  {接口地址} url
   * @param  {请求参数} data
   * @param  {参数} config
   */
  async delete(url, data = {}, config = {}) {
    return await new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url,
        data,
        ...config,
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** jsonp 请求
   * @param  {接口地址} url
   * @param  {JSONP回调函数名称} name
   */
  async jsonp(url, name = 'jsonp') {
    return await new Promise((resolve) => {
      const script = document.createElement('script')
      const _id = `jsonp${Math.ceil(Math.random() * 1000000)}`
      script.id = _id
      script.type = 'text/javascript'
      script.src = url
      window[name] = (response) => {
        resolve(response)
        document.getElementsByTagName('head')[0].removeChild(script)
        try {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete window[name]
        } catch (e) {
          window[name] = undefined
        }
      }
      document.getElementsByTagName('head')[0].appendChild(script)
    })
  },
}
export default http
