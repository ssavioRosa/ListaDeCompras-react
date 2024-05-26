import  "./ListaDeCompras.css";
import Formulario from "./Formulario/formulario";
import Lista from './Lista/lista'

import React, {useState} from 'react'

const listaDeCompras = () => {

  const [itens, setItens] = useState([])
  const [mostrarDivFormulario, setMostrarDivFormulario] = useState(0);

  const adicionarItem = (novoItem) => {
    setItens([...itens, novoItem]);
    setMostrarDivFormulario(0);
  }

  const removeItem = (index) => {
    const novosItens = [...itens]
    novosItens.splice(index, 1)
    setItens(novosItens);
    
  }

  console.log(mostrarDivFormulario)

  const editarItem = (novoItem) => {
    const novosItens = [...itens];
    novosItens[mostrarDivFormulario - 1] = novoItem;
    setItens(novosItens);
    setMostrarDivFormulario(0)
  };
 


  return (
    <>
    <div className="topo">
    <img src="src\assets\Images\logo.png" alt="ImagemLogo" />
    <h1>Lista de Compras</h1>
  </div>
    <div className="flex">
        <div className="formulario">
            <Formulario adicionarItem={adicionarItem} mostrarEdicao={mostrarDivFormulario} editaItem={editarItem} />
        </div>

        <div className="lista">
            <Lista listaItens = {itens} removeItem = {removeItem} mostrarEdicao={setMostrarDivFormulario} />
        </div>
    </div>
    </>
  )
}

export default listaDeCompras