import './App.css';
import SearchForm from './components/SearchForm'
import Video from './components/Video'
import fetchResults from './api/youtube'
import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"



function App() {
  const { search } = window.location
  const query = new URLSearchParams(search).get("s")
  const [searchQuery, setSearchQuery] = useState(query || '')
  const [video, setVideo] = useState([])

  function handleSubmit(query) {
    const results = fetchResults(query, "AIzaSyASCaXPWIRkUHlN1pcEEG8Lj3Cd3MMOOI0")
    results.then(data => {
      let videos = []
      for (let index = 0; index < data.length; index++) {
        let snippet = data[index].snippet
        videos.push({"id": data[index].etag, "title": snippet.title, "thumbnail": snippet.thumbnails.high.url,
                     "link": `https://www.youtube.com/watch?v=${data[index].id.videoId}`})
      }
      setVideo(videos)
    })
  }
  return (
    <Router>
      <div>
        <SearchForm handleSubmit={handleSubmit} searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}/>
        <ul>
        {video.map(video => (
            <li key={video.id}>
              <Video title={video.title} thumbnail={video.thumbnail} link={video.link}/>
              <br />
            </li>
        ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;
