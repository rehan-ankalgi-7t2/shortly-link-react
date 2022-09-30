import { React, useState } from 'react'
import "./styles/form.css"

const Form = () => {

  let url =''

  const [shortURL, setShortURL] = useState('')

  const shortenURL = async () => {
    let API_URL = `https://api.shrtco.de/v2/shorten?url=${url}`
    await fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      setShortURL(data.result.short_link)
      console.log(data.result.short_link)
    }) 
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
    <div className='form-container'>
      <form>
          <input placeholder='Paste your link here...' onChange={handleChange} type='text'/>
          <button type='submit' onClick={handleSubmit}>Shorten URL</button>
      </form>
      { shortURL ? 
        <div>
          <input className='SU-input' value={shortURL}/>
          <button type='submit' onClick={copyText}>Copy URL 📎</button>
        </div> 
        : ""
      }
    </div>
  )
}

export default Form