import React, { useEffect, useState } from 'react'
import './NewsData.css'
import GetNews from '../service/GetNews'
import moment from 'moment'



  const NewsData = () => {

  const[newsData, setNewsData]=useState([])

  const[selectOption, setSelectoption]=useState('')

  const getAllNews= async ()=>{

    const data = await GetNews(selectOption)

    setNewsData(data.data.articles)
  }


  const selectCategory=(event)=>{
    setSelectoption(event.target.value) 

  }


  useEffect(()=>{
    getAllNews()},[selectOption])

  return (
    <div className='main'>
   <h1>Voice News</h1>
   <div className='select'>

  <label htmlFor="cars">Choose a Category:</label>
  <select 
  className='selectBox' 
  name="category" 
  id="category"
  onChange={selectCategory}
  value={selectOption}
  >
  <option value="general">General</option>
  <option value="health">Health</option>
  <option value="business">Business</option>
  <option value="sports">Sports</option>
</select>
</div>

   <div className="gridMain">
   {newsData?.map((news)=>{
    return(
      <div className='gridChild'>
      <img className='newsImg'
      src={news?.urlToImage} alt="loading" />
      <p className='newsTitle'>{news?.title}</p>
      <p className='newsContent'>{news?.content}</p>
      <div className='both'>
      <p className='newsAuthor'>Author:{news?.author}</p>
      <p>{moment(news?.publishedAt).format('LL') }</p>
      </div>
      <a href={news?.url} target='blank'>Read More..</a>
      </div>
    )
   })}
   </div>
    </div>
  )
}

export default NewsData
