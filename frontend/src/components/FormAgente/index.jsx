import "./main.scss";
import Logo from "../../assets/images/interrogatorio-de-escudo 1.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";

const FormAgente = ({ submitHandle }) => {
  const handleSubmit = () => {
    submitHandle();
  };
  return (
    <div className="form-agente">
      <h2 className="titulo">
        Selecione o seu agente mais legal<span>.</span>
      </h2>
      <p className="subtitulo">Tenha a visão completa do seu agente.</p>
      <form onSubmit={(event) => handleSubmit(event)} className="form">
        <fieldset>
          <select name="" id="">
            <option value="">
              <img src={Logo} alt="" />
              Teste
            </option>
          </select>
        </fieldset>
        <button className="btn-submit" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default FormAgente;
