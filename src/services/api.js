import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '5d7f0372fce5ae53a9d5a167b2ba490e',
    language: 'pt-BR',
    page: 1
  }
})

export default api
