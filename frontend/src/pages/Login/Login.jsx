import "./main.scss";
import Logo from "../../assets/images/logo_pontua_white.png";
import Build from "../../assets/images/bro.png";
import FormLogin from "../../components/FormLogin";
import { useState } from "react";
import FormRecuperarSenha from "../../components/FormRecuperaSenha";
const Login = () => {
  const [showForm, setShowForm] = useState(true);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="container">
      <img className="logo" src={Logo} alt="" />
      <div className="container-main">
        <img className="build" src={Build} alt="" />
        <div className="forms">
          {showForm ? (
            <FormLogin showForm={handleShowForm} />
          ) : (
            <FormRecuperarSenha />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;