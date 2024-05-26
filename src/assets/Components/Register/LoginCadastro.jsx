import React, { useState } from 'react';
import Cadastro from "./Cadastro/cadastro";
import Login from './Login/login';


const LoginCadastro = ({loginValidado}) => {

  const [Users, setUsers] = useState([
    {
      nomeUser: '',
      emailUser: '',
      senhaUser: ''
    }
  ]);

  const [telaRegister, setTelaRegister] = useState('CADASTRO');
  const [loginIncorreto, setLoginIncorreto] = useState(false);
  const cadastraUser = (novoCadastro) => {
    setUsers(prevUsers => [...prevUsers, novoCadastro]);
    setTelaRegister('LOGIN');
    console.log([...Users, novoCadastro]);
};
  const voltaLogin = (volta) => {
    setTelaRegister(volta)
  }

  const voltaCadastro = (volta) => {
    setTelaRegister(volta)
  }

  const validaLogin = (novoLogin) => {
    const userEncontrado = Users.find(
      (user) =>
        user.emailCadastro === novoLogin.emailLogado &&
        user.senhaCadastro === novoLogin.senhaLogado
    );

   
    

    if (userEncontrado) {
      loginValidado(true)
      
      
    } else {
      loginValidado(false)
      setLoginIncorreto(true)
      
    }

    

  }
  


  return (
    <div>
      {telaRegister === "CADASTRO" && (
        <Cadastro cadastraUser={cadastraUser} voltaLogin={voltaLogin} />
      )}
      {telaRegister === "LOGIN" && (
        <Login validaLogin= {validaLogin} voltaCadastro = {voltaCadastro} loginIncorreto={loginIncorreto} />
      )}
    </div>
  );
}

export default LoginCadastro;
