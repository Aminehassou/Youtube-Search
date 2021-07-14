async function fetchResults(query, apiKey) {
    let response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}&maxResults=20`, {
        method: "GET"
    });
    let data = await response.json();
    return data.items
  }

export default fetchResults