import React from "react";

const Tabela = ({ data }) => {

    return (

            <div>
                {data.map((item, key) => 
                <ul key={key}>
                    <h3>Produto: {item.id}</h3>
                    <li>Nome: {item.nome}</li>
                    <li>Preço: {item.preco}</li>
                    <li>Quantidade: {item.quantidade}</li>
                </ul>
                )}
            </div>
    )
}


export default Tabela;