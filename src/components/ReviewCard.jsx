export default function ReviewCard ({review}){
    return(
        <>
               
        <div>Scritto {review.name} <span>{review.vote}</span></div>
        <p>{review.text}</p>
        </>
    )
}