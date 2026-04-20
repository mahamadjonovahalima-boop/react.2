import {useParams} from  "react-router-dom";

export default function MovieDetails() {
    consts params = useParams();

    return(
        <div>
            <h1>MovieDetails - {params.id}</h1>
        </div>
    );
}