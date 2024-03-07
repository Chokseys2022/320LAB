import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";
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
