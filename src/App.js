import './App.css';
import SearchForm from './components/SearchForm';

const test = [
  {id: 1, title: "test"},
  {id: 2, title: "test2"},
  {id: 3, title: "test3"},
  {id: 4, title: "test4"},
  {id: 5, title: "a"},
  {id: 6, title: "b"},
  {id: 7, title: "c"},
  {id: 8, title: "d"}
]

function filterVideos(videos, query) {
  if (!query) {
    return videos
  }

  return videos.filter(video => {
    const videoTitle = video.title.toLowerCase()
    return videoTitle.includes(query)
  })
}

async function fetchResults() {
  let response = await fetch('https://randomuser.me/api/?results=1');
  let data = await response.json();
  return data.results
}

function handleSubmit() {
  console.log("submitted")
}

function App() {
  const results = fetchResults()
  results.then(data => console.log(data[0].email))
  const { search } = window.location
  const query = new URLSearchParams(search).get("s")
  const filteredVideos = filterVideos(test, query)
  return (
    <div>
      <SearchForm handleSubmit={handleSubmit}/>
      <ul>
        {filteredVideos.map(video => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
