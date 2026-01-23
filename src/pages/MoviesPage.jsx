import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"


export default function MoviesPage() {
    const [movies, setMovies] = useState([])

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        axios
            .get(`${backendBaseUrl}/api/movies`)
            .then((resp) => { setMovies(resp.data.results) })
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <>
            <section className="py-5 mt-5 container">
                <h1>Lista di tutti i film</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {movies.map((movie) => (
                        <div className="col" key={movie.id}>
                            <MovieCard movie ={movie}/></div>
                    ))}
                </div>
            </section>
        </>
    )
}