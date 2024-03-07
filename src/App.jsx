import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";
import axios from 'axios';

async function search(searchTerm) {
  try {
    let res = await axios.get(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_Key
      }&t=${searchTerm}`
    );
    console.log(res);
    setMovieData(res);
  } catch (err) {
    console.error(err);
  }
}


function App() {
  const [MovieData, setMovieData] = useState(0);
  return (
    <>
      <h1>My Movie App</h1>
      <Form />
      <MovieDisplay />
    </>
  );
}



export default App;

//console.log(import.meta.env.VITE_API_Key);

// async function search(searchTerm) {
//   try {
//     let res = await axios.get(
//       `http://www.omdbapi.com/?apikey=${
//         import.meta.env.VITE_API_Key
//       }&t=${searchTerm}`
//     );
//     console.log(res);
//     setMovieData(res);
//   } catch (err) {
//     console.error(err);
//   }
// }