import React,{useState,useEffect} from "react";
import Skeleton from "react-loading-skeleton"
import { NavLink } from "react-router-dom";

const Items=()=>{

    const [data,setData]=useState([]);
    const [filter,setFilter]=useState([data]);
    const [loading,setLoading]=useState(false);
    let componentMounted=true;

    useEffect(()=>{

        const getItems= async()=>{
        setLoading(true);
        const response = await fetch(`http://localhost:5000/record/`);
 
     if (componentMounted) {
     setData(await response.clone().json());
     setFilter(await response.clone().json());
     setLoading(false);
       console.log(filter);

     }

     return()=>{
         componentMounted=false;
     }

   }            

        
        getItems();
    }, []);

    const Loading=()=>{
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterItems=(category)=>{
        const updateList=data.filter((x)=>x.category===category);
        setFilter(updateList);
    }

    const ShowItems=()=>{
        return(
            <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2" onClick={()=>
            setFilter(data)}>
            All</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>
            filterItems("men's cloths")}> Men's Cloths</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>
            filterItems("ladie's cloths")}> Ladie's Cloths</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>
            filterItems("children's cloths")}> Children's Cloths</button>
            </div>
            {filter.map((items)=>{
                return(
                    <>
                        <div className="col-md-4 mb-4">
                        <div class="card h-100 text-center p-4" key={items.id}>
                            <div class="card-body">
                                <h5 class="card-title">{items.itemName}...</h5>

                                <p class="card-text lead fw-bold">Unit Price:{items.unitPrice}</p>
                                <p class="card-text">Quantity:{items.quantity}</p>
                                <p class="card-text">Description:{items.description}</p>
                                <NavLink to={`/items/${items.id}`} class="btn btn-outline-dark">Buy</NavLink>
                                <NavLink to={`/item/${items.id}`} class="btn btn-outline-dark">Bu</NavLink>
                            </div>
                            </div>
                                                    </div>

                    </>
                )
            })}
            </>
        );
        

        }; 

    

    return(
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Latest Products
                        </h1>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading/> :<ShowItems/>}
                </div>
            </div>
        </div>
    )

}
export default Items;