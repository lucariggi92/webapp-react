
import { Link } from "react-router-dom"


export default function MovieCard({ movie }) {

    
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL

   

    return (
        <div className="card h-100">
            <img

                src={`${backendBaseUrl}/images/${movie.image}`}
                className="card-img-top"
                alt="..." />
            <div className="card-body" >
                <h5 className="card-title" >{movie.title} - {movie.director}</h5>
                < p className="card-text" >
                    {movie.abstract}
                </p>
                <Link to={`/movies/${movie.id}`} className="btn btn-outline-primary " >
                    Clicca per dettagli
                </Link>
            </div>
        </div>
    )
}