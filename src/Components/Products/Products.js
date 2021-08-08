import { render } from '@testing-library/react';
import React,{useState , useEffect} from 'react';
import data from '../../db.json'
import './Products.css'

const apiUrl = "http://localhost:3000/Products";
function Products(){
    const [getUserData, setUserData] = useState({});

    useEffect(() =>{
        getApiDataWithFetch();
    }, []);


    const getApiDataWithFetch = async() => {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    };

    return(
        <div>
            {
                data.Products.map((products,i)=>{
                    return (
                            <div className="card grid-container">
                                <a href={products.url}>
                                    <img className="image" src={products.image} alt={products.title}/>
                                    <div className="flex-container">
                                    <p className="title">{products.title}</p>
                                    <div className="flex-container">
                                    <p>{products.colour.title}</p><img className="color-fill" src="https://img.icons8.com/windows/32/000000/square-full.png"/>
                                    </div>
                                    </div>
                                    <div className="flex-container">
                                    <p className="brand"> {products.brand}</p>
                                    <div className="flex-container">
                                    <img className="plus-icon" src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"/><p>Add</p>
                                    </div>
                                    </div>
                                    <div className="flex-container">
                                    <p className="item">price:{products.price.final_price} {products.price.mrp}</p>
                                    {/* <p>rating:{products.rating}</p> */}
                                    </div>
                                </a>
                            </div>
                    );
                })
            }
        </div>
    );
}

export default Products;
