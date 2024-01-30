import "./main.scss";
import Logo from "../../assets/images/logo_pontua_white.png";
import Build from "../../assets/images/bro.png";
import FormLogin from "../../components/FormLogin";
import { useContext, useState } from "react";
import FormRecuperarSenha from "../../components/FormRecuperaSenha";
import Container from "../../components/Container/index";
import FormAgente from "../../components/FormAgente";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [showForm, setShowForm] = useState(true);
  const [showHeroes, setShowHeroes] = useState(false);
  const [submit, setSubmit] = useState(false);
  const { signed } = useContext(AuthContext);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleShowHeroes = () => {
    setShowHeroes(true);
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  if (signed && submit) {
    return <Navigate to="/home" />;
  } else {
    return (
      <div className="container">
        <Container>
          <img className="logo" src={Logo} alt="" />
          <div className="container-main">
            <img className="build" src={Build} alt="" />
            <div className="forms">
              {showForm ? (
                <FormLogin
                  form={showHeroes}
                  showForm={handleShowForm}
                  showHeroes={handleShowHeroes}
                />
              ) : (
                <FormRecuperarSenha />
              )}

              {showHeroes && <FormAgente submitHandle={handleSubmit} />}
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default Login;
