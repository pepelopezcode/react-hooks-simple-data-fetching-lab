// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [dogData, setDogData] = useState(null);
    const [renderedData, setData] = useState(<p>Loading...</p>)
    
    function doSom(){
        if(dogData === null){return (renderedData)}else{return (<img src={dogData.message} alt="A Random Dog" ></img>)}
    }
    useEffect( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((resp) => resp.json())
            .then(data => setDogData(data))
            
    }
    
        ,[])

    useEffect(()=>{
        setData(doSom)
    },[dogData])
        console.log(dogData)
    
    return(
        <div>{renderedData}</div>
    )
}

export default App;