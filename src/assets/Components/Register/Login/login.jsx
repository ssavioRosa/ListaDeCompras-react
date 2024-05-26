import React, { useState } from 'react'
import './login.css'
import { CiLogin } from "react-icons/ci";

const login = ({ voltaCadastro, loginIncorreto, validaLogin }) => {
  const [novoLogin, setNovoLogin] = useState({
    emailLogado: '',
    senhaLogado: ''
  })
  function setEmail(email) {
    setNovoLogin({ ...novoLogin, emailLogado: email })
  }
  function setSenha(senha) {
    setNovoLogin({ ...novoLogin, senhaLogado: senha })

  }
  const handleSubmiLogar = (e) => {
    e.preventDefault()
    validaLogin(novoLogin)
  }

  const handleSubmitVoltaCadastro = (e) => {
    e.preventDefault()
    voltaCadastro('CADASTRO')
  }
 




  return (
    <div>
      {loginIncorreto === false &&
        (<div className="conteinerLogin">
          <div className="topoLogin">
            <CiLogin className='iconeLogin' />
            <h1>Login</h1>
          </div>
          <form className='formularioLogin'>
            <input
              className='login'
              type="text"
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='login'
              type="password"
              placeholder='senha'
              required
              onChange={(e) => setSenha(e.target.value)}
            />

            <button onClick={handleSubmiLogar} className='logar'>Logar</button>
            <button onClick={handleSubmitVoltaCadastro} className='voltarCadastro'>Cadastrar</button>

          </form>



        </div>
        )}
      {loginIncorreto == true && (
        <div className="conteinerLoginIncorreto">
          <div className="topoLogin">
            <CiLogin className='iconeLogin' />
            <h1>Login</h1>
          </div>
          <form className='formularioLogin'>
            <input
              className='loginIncorreto'
              type="text"
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='loginIncorreto'
              type="password"
              placeholder='senha'
              required
              onChange={(e) => setSenha(e.target.value)}
            />
            <p>Login incorreto !</p>
            <button onClick={handleSubmiLogar} className='logar'>Logar</button>
            <button onClick={handleSubmitVoltaCadastro} className='voltarCadastro'>Cadastrar</button>

          </form>



        </div>
      )}



    </div>

  )
}

export default login