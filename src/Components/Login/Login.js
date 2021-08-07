import React,{useState , useEffect} from 'react';
import './Login.css'

const apiUrl = "http://localhost:8000/Data";

function Login(){
    const [getUserData, setUserData] = useState({});
    useEffect(() =>{
        getApiDataWithFetch();
    }, []);

    const getApiDataWithFetch= async() => {
        
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    }
    const [state,setState] = useState({
        uname:'',
        pw:''
    });
    const changeHandler = (e) =>{
        setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const submitHandler = (e) =>{
        e.preventDefault();
            if(getUserData.username===state.uname && getUserData.password===state.pw){
                
            }
            else{
                alert("Incorrect username and password");
            }
            
    }
    return(
        <div className="body">
        <div className="formcontainer"> 
        <div className="container">
            <h2 className="head">Scart</h2>
            <form onSubmit={submitHandler}>
                <div className="username" >
                    <input placeholder="UserName"
                    type="text"
                    name="uname"
                    value={state.uname}
                    onChange={changeHandler}
                    />
                </div>
                <div className="password"> 
                    <input placeholder="Password" 
                    type="password"
                    name="pw"
                    value={state.pw}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <button className="button"
                    type='submit'
                    >Login</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
    }

export default Login;
