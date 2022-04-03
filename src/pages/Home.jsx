import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Home() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    
    setName('')


  },[]);

  const addProduto = () => {
    axios.post('http://localhost:3001/produtos', {
        nome: name,
        preco: price,
        quantidade: quantity
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleName = event => {
    setName(event.target.value)
  }

  const handlePrice = event => {
    setPrice(event.target.value)
  }

  const handleQuantity= event => {
    setQuantity(event.target.value)
  }

 const handleSubmit = event => {
    event.preventDefault();
    alert( `${name} ${price} ${quantity} `);
 }

  return (
    <div className="App">
      
        <div>
        <h1>Cadastrar Produto</h1>
        <div className='col-md-4'>
          <form onSubmit={addProduto} className="form-group mx-sm-5">
            <label>Nome do produto</label>
            <input type="text" name="" id="name" onChange={handleName} className="form-control mb-3" />
            <label>Preço do produto</label>
            <input type="number" step="0.01" min= "0" name="" id="price" onChange={handlePrice} className="form-control mb-3"/>
            <label>Quantidade</label>
            <input type="number" id="quantity" name="quantity" min="1" max="5" onChange={handleQuantity} className="form-control mb-3"/>
            <input type="submit" value="Cadastrar" className="btn btn-lg btn-primary btn-block"/>
          </form>
        </div>
        </div>
      
    </div>
  )
}

export default Home
