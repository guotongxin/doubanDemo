import axios from 'axios'
const newAxios = axios.create({
  // baseURL: 'https://movie.douban.com'
})
export default ({ url, methods = 'GET', data, params }) => {
  return newAxios({
    url,
    methods,
    data,
    params

  })
}
