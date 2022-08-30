import React, { useState} from "react";
import axios from "axios";


function App() {
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [key] = useState("54l5AlzSLWM5EwFSM9zEC7lMxmSPH4llLfW8RjNl-5s");
  const [result, setResult] = useState([]);
  function handleChange(e) {
    setPhoto(e.target.value);
  }
  function handleSubmit() {
    setLoading(true);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      key;
    axios.get(url).then((response) => {
      setResult(response.data.results);
      console.log(response);
      setLoading(false);
    });
  }
  if (loading) {
    return <div id="loading" className="middle"></div>;
  }
  return (
    <>
      <div className="middle ">
        <h1 className="heading">| Image Gallery |</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search For The Image..."
        />
        <button className="btn" onClick={handleSubmit}>
          Search
        </button>
      </div>

      <div className="container grid-container">
        {result.map((item) => {
          return (
            <>
              <img key={item.id} src={item.urls.small} alt="" />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
