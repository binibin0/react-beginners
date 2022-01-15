import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => setMovies(json.data.movie), setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movies.large_cover_image} />
          <h4>Likes: {movies.like_count}</h4>
        </div>
      )}
    </div>
  );
}

export default Detail;
