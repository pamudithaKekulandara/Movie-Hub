import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const Item =() =>{

    const {id}=useParams();
    const [item,setItem]=useState([]);
    const [loading,setLoading]=useState(false);
   
    useEffect(()=>{


            const getItem=async ()=>{
                setLoading(true);
                const response=await fetch(`http://localhost:5000/record/${id}`);
                setItem(await response.json());
                setLoading(false);
            }
            getItem();

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
                      {Item.category}
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
export default Item;