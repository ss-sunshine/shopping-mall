//封装 axios
import axios from 'axios'

//创建一个axios的实例
const service = axios.create({
// 请求的基础路径  如果配置了基础路径  基础路径在实际发请求的时候可以省略
baseURL:'/api'
})