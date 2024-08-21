import { React, useState } from 'react'
// import "./styles/form.css"

const Form = () => {

  let url =''

  const [shortURL, setShortURL] = useState('')

  const shortenURL = async () => {
    // let API_URL = `https://api.shrtco.de/v2/shorten?url=${url}`
    // await fetch(API_URL)
    // .then(res => res.json())
    // .then(data => {
    //   setShortURL(data.result.short_link)
    //   console.log(data.result.short_link)
    // }) 

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": "https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150"
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://cleanuri.com/api/v1/shorten", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  const handleChange = (e) => {
    url = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    shortenURL()
  }

  const copyText = () => {
    navigator.clipboard.writeText(shortURL);
    alert("Copied the text: " + shortURL);
  }

  return (
    <div className='w-full container flex-col items-center mt-10'>
      <form className='w-full bg-black flex items-center justify-between gap-3 p-10'>
          <input placeholder='Paste your link here...' onChange={handleChange} type='text' className='p-3 flex-1'/>
          <button type='submit'className='p-3 bg-blue-700 text-white text-wrap w-100'  onClick={handleSubmit}>Shorten URL</button>
      </form>
      { shortURL ? 
        <div className='w-full bg-white flex items-center justify-between gap-3 p-10'>
          <input className='SU-input' value={shortURL}/>
          <button type='submit' className='p-3 bg-blue-700 text-white text-wrap w-100' onClick={copyText}>Copy URL 📎</button>
        </div> 
        : ""
      }
    </div>
  )
}

export default Form