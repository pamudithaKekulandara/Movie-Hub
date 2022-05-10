import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const Movie =() =>{

    const {id}=useParams();
    const [movie,setMovie]=useState([]);
    const [loading,setLoading]=useState(false);
   
    useEffect(()=>{


            const getMovie=async ()=>{
                setLoading(true);
                const response=await fetch(`http://localhost:5000/movie/${id}`);
                setMovie(await response.json());
                setLoading(false);
            }
            getMovie();

    },[]);

    const Loading=()=>{
        return(
        <>

            Loading....
        </>
        )
    }

    const ShowItem=()=>{
        return(
            <>
              <div className="col-md-6">
                  <h4 className="text uppercase text-black-50">
                      {movie.type}
                  </h4>
              </div>
            </>
        )
    }


    return(
        <div>
            <div className="container">
                <div className="row">

                    {loading ? <Loading/> : <ShowItem/>}
                </div>

            </div>

        </div>
    )

}
export default Movie;