import React, { useState } from 'react';
import './formulario.css';

const Formulario = ({ adicionarItem, mostrarEdicao, editaItem }) => {
  const [novoItem, setNovoItem] = useState({
    nomeItem: '',
    quantidadeItem: 0,
    unidadeMedidaItem: ''
  })

  function setNomeItem(nome) {
    setNovoItem({ ...novoItem, nomeItem: nome });
  }

  function setQuantidadeItem(quantidade) {
    setNovoItem({ ...novoItem, quantidadeItem: quantidade });
  }

  function setUnidadeItem(unidade) {
    setNovoItem({ ...novoItem, unidadeMedidaItem: unidade });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarItem(novoItem);
  }

  const handleSubmitEdita = (e) => {
    e.preventDefault();
    editaItem(novoItem);
  }

  return (
    <>
      {mostrarEdicao ? (
        <div className="divFormulario">
          <h2>Editar Item</h2>
          <form>
            <input
              className='recebe'
              type="text"
              placeholder="Nome Do Item"
              required
              onChange={(e) => setNomeItem(e.target.value)}
            />
            <input
              className='recebe'
              type="text"
              placeholder="Quantidade"
              required
              onChange={(e) => setQuantidadeItem(e.target.value)}
            />
            <select className='recebeSelect' name="Medida" required onChange={(e) => setUnidadeItem(e.target.value)}>
              <option value="grama">g</option>
              <option value="kg">kg</option>
              <option value="unidade">unid</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
            <button className='seta' onClick={handleSubmitEdita}>Editar</button>
          </form>
        </div>
      ) : (
        <div className="divFormulario">
          <h2>Cadastrar Item</h2>
          <form>
            <input
              className='recebe'
              type="text"
              placeholder="Nome Do Item"
              required
              onChange={(e) => setNomeItem(e.target.value)}
            />
            <input
              className='recebe'
              type="text"
              placeholder="Quantidade"
              required
              onChange={(e) => setQuantidadeItem(e.target.value)}
            />
            <select className='recebeSelect' name="Medida" required onChange={(e) => setUnidadeItem(e.target.value)}>
              <option value="grama">g</option>
              <option value="kg">kg</option>
              <option value="unidade">unid</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
            <button className='seta' onClick={handleSubmit}>Adicionar</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Formulario
