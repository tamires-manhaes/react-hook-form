import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

interface FormInputs {
  nome: string,
  sobrenome: string,
  email: string,
  password: string,
  descricao: string
}

const user = {
  nome: "Tamires",
  sobrenome: "P. Manhães",
  email: "tamires.manhaes@cubos.io",
  password: "umaSenhaParaEmail97",
  descricao: "É um teste para saber como funciona a edição de um formulário"
}

const App: React.FC = () => {
  const {register, handleSubmit, setValue } = useForm<FormInputs>();
  const [userDisplay, setUser] = useState<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    const nome: string = data.nome;
    const sobrenome: string = data.sobrenome;
    const email: string = data.email;
    const password: string = data.password;
    const descricao: string = data.descricao;

    const values = {
      nome,
      sobrenome,
      email,
      password,
      descricao,
    }

    if(values !== undefined){
      setUser(values);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register({ required: true })} name="nome" placeholder="nome" defaultValue={user.nome} onChange={(event) => setValue("nome", event.target.value)}/>
        <input ref={register({ required: true })} name="sobrenome" placeholder="sobrenome" defaultValue={user.sobrenome} onChange={(event) => setValue("sobrenome", event.target.value)}/>
        <input ref={register({ required: true })} name="email" placeholder="email" defaultValue={user.email} onChange={(event) => setValue("email", event.target.value)}/>
        <input ref={register({ required: true })} name="password" placeholder="password" defaultValue={user.password} onChange={(event) => setValue("password", event.target.value)}/>
        <input ref={register({ required: true })} name="descricao" placeholder="descricao" defaultValue={user.descricao} onChange={(event) => setValue("descricao", event.target.value)}/>

        <div className="buttons">
          <button type="submit">Editar</button>
          <button type="button" onClick={() => alert("cancelado!")}>Cancelar</button>
        </div>
      </form>

        {userDisplay ? (
          <div className="dataDisplayArea">
            <span><strong>Nome:</strong> {userDisplay.nome}</span>
            <span><strong>Sobrenome:</strong> {userDisplay.sobrenome}</span>
            <span><strong>Email:</strong> {userDisplay.email}</span>
            <span><strong>Password:</strong> {userDisplay.password}</span>
            <span><strong>Descrição:</strong> {userDisplay.descricao}</span>
          </div>
        ): (
          <div className="dataDisplayArea">
            <span><strong>Nome:</strong> {user.nome}</span>
            <span><strong>Sobrenome:</strong> {user.sobrenome}</span>
            <span><strong>Email:</strong> {user.email}</span>
            <span><strong>Password:</strong> {user.password}</span>
            <span><strong>Descrição:</strong> {user.descricao}</span>
          </div>
        )}
    </div>
  );
}

export default App;
