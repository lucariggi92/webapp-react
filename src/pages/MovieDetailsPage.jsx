import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";
    

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState({})
    const Navigate = useNavigate();


    const { id } = useParams();
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios
            .get(`${backendBaseUrl}/api/movies/${id}`)
            .then((resp) => {
                setMovie(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    function goBack(event){
        event.preventDefault();
        Navigate(-1)
    }

    return (

        <>
            <section className=" py-5 mt-5 text-danger" style={{ backgroundImage: `url(${backendBaseUrl}/images/${movie.image})` }}>
                <div className="container">
                    <h1>
                        pagina dettagli{id}
                    </h1>
                    <h3>{movie.director}</h3>
                    <h4>{movie.release_year}</h4>
                    <br />
                </div>
            </section>

           <div>
            <a href="" onClick={goBack}>Torna indietro</a>
            </div>

            <section className="container border mt-5" >
                <h2>Recensioni</h2>
                <div>
                    {movie.reviews&& movie.reviews.length> 0? 
                    (movie.reviews.map((review)=>(
                        <ReviewCard key={review.id} review ={review}/>
                    ))):(<p>nessuna recensione</p>)}
                </div>

            </section>
        </>
    )
}