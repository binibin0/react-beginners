import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => setMovies(json.data.movie));
  }, []);
  console.log(movies);
  return (
    <div>
      <img src={movies.large_cover_image} />
      <h1>{movies.title}</h1>
      <h3>Likes: {movies.like_count}</h3>
      <h3>Downloads: {movies.download_count}</h3>
    </div>
  );
}

export default Detail;
