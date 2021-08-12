import React,{useState , useEffect} from 'react';
import SearchField from 'react-search-field';
import './Header.css'
const apiUrl = "http://localhost:3000/Data";

function Header() {
    const [getUserData, setUserData] = useState({});
    
    useEffect(() =>{
        getApiDataWithFetch();
    }, []);

    const getApiDataWithFetch= async() => {
        
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    }

    return (
        <div className="header">
            <div className="flex">
             <img className="logo" src="https://img.icons8.com/windows/126/000000/shop-local.png"/>
             {/* <div className="SearchBar"> 
            <SearchField
            placeholder="search"
            classNames="SearchBar"
            onChange={onChange}
            /> 
             </div>  */}
             <div className="SearchBar">
                 <input type="text" placeholder="search product"/>
             </div>

            <div>
            <div className="flex">
            <img className="user-image" src="https://img.icons8.com/windows/32/000000/user-male-circle.png"/>
            <p>Welcome! {getUserData.fullName}</p>
            </div>
            <div className="flex">
            <img src="https://img.icons8.com/windows/32/000000/shopping-cart.png"/>
            <p className="cart-item">Item</p><br/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Header

