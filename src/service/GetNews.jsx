import axios from 'axios'

export default function GetNews( category='General'){
  const API_KEY=`1a30529e6b0a4266902032a6d0b72462`
  const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us&category=${category}`

 return axios.get(`${ API_Endpoint}&apiKey=${API_KEY}`)
}
 