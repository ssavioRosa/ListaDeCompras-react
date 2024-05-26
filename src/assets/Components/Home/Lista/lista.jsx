import './lista.css'

import React from 'react'
import { FaGear } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";


const lista = ({ listaItens, removeItem, mostrarEdicao}) => {


  console.log(listaItens)

  return (
    <>
      <h2>Lista</h2>
      <div className="produtos">
        <table>
          <thead>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Medida</th>
            <th><FaGear /></th>
          </thead>
          <tbody>
            {listaItens.map((item, index) => (
              <tr key={index}>
                <td>{item.nomeItem}</td>
                <td>{item.quantidadeItem}</td>
                <td>{item.unidadeMedidaItem}</td>
                <td>
 
                  <FaTrash onClick = {() => removeItem(index)} />
                  <RiEditBoxFill onClick={() => mostrarEdicao(index + 1)}  />


                </td>
              </tr>

            ))}



          </tbody>


        </table>
      </div>

    </>

  )
}

export default lista