import axios from "axios";
import React from "react";
import Tabela from "../components/Tabela";

const client = axios.create({
    baseURL: 'http://localhost:3001'
    
}); 

export default function Catalog() {
    const [produto, setProduto] = React.useState([])

    React.useEffect(() => {
        async function getProduto() {
            const response = await client.get('/produtos');
            setProduto (response.data);
            
             console.log(response.data)
     }
        
     getProduto();

     
     
    },[]);
    
    React.useEffect(() =>{

    },[produto])

    return (
            <div>
                
              <Tabela data={produto}/>
                   
            </div>
    )
}