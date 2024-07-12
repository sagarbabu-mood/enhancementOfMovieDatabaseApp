import {Link} from 'react-router-dom'
import './index.css'

const MovieItem = props => {
  const {data} = props
  const {id, posterPath, title, voteAverage} = data
  const url = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <div className="card">
      <img className="poster" src={url} alt={title} />
      <h1>{title}</h1>
      <p>{voteAverage}</p>
      <Link to={`/single-movie/${id}`}>
        <button className="details-button" type="button">
          View Details
        </button>
      </Link>
    </div>
  )
}

export default MovieItem
