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

function App() {
  return (
    <div>
      <SearchForm />
      <ul>
        {test.map(video => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
