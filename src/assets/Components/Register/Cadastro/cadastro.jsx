import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import './cadastro.css';

const Cadastro = ({ cadastraUser, voltaLogin }) => {
    const [novoCadastro, setNovoCadastro] = useState({
        nomeCadastro: '', 
        emailCadastro: '', 
        senhaCadastro: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoCadastro(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitCadastra = (e) => {
        e.preventDefault();
        cadastraUser(novoCadastro);
    };

    const handleSubmitVoltaLogin = (e) => {
        e.preventDefault();
        voltaLogin('LOGIN');
    };

    return (
        <div className="conteinerCadastro">
            <div className="topoCadastro">
                <FaUserCircle className='iconeCadastro' />
                <h1>Cadastro</h1>
            </div>
            <form className='formularioCadastro' onSubmit={handleSubmitCadastra}>
                <input 
                    className='cadastro' 
                    type="text" 
                    name="nomeCadastro"
                    placeholder='Nome Completo'
                    required
                    onChange={handleChange}
                />
                <input 
                    className='cadastro' 
                    type="email" 
                    name="emailCadastro"
                    placeholder='Email'
                    required
                    onChange={handleChange}
                />
                <input 
                    className='cadastro' 
                    type="password" 
                    name="senhaCadastro"
                    placeholder='Senha'
                    required
                    onChange={handleChange}
                />
                <button type="submit" className='cadastrar'>Cadastrar</button>
                <button type="button" onClick={handleSubmitVoltaLogin} className='voltarLogin'>Logar</button>
            </form>
        </div>
    );
};

export default Cadastro;
