import { useState } from 'react'
import './App.css'
import ListaDeCompras from './assets/Components/Home/ListaDeCompras'
import CadastroElogin from "./assets/Components/Register/LoginCadastro";

function App() {

  const [tela, setTela] = useState('REGISTER')

  const loginValidado = (valida) => {
    if (valida === true) {
      setTela('HOME')

    }
    else(valida == false)

  }
 

    
  return (
    <>
      {tela === 'REGISTER' && (
        <CadastroElogin loginValidado={loginValidado}/> 
      )}
      {tela === 'HOME' && (
        <ListaDeCompras/>
      )}
    </>
  )
}

export default App
