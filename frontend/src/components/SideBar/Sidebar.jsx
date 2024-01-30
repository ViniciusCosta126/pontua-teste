import "./main.scss";
import Logo from "../../assets/images/Group.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const { signOut } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };

  return (
    <aside className="sidebar">
      <img className="logo" src={Logo} alt="Logo da pontua" />
      <div className="divider"></div>

      <div className="sidebar-menu">
        <ul>
          <li>
            <Link
              to="/home"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => setActiveItem("home")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/menu/dashboard" clip-path="url(#clip0_2743_165)">
                  <path
                    id="Vector"
                    d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z"
                    stroke="black"
                    stroke-width="1.4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2743_165">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={activeItem === "perfil" ? "active" : ""}
              onClick={() => setActiveItem("perfil")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/menu/perfil">
                  <path
                    id="Icon"
                    d="M16.6668 17.5V15.8333C16.6668 14.9493 16.3156 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.30981 13.4763C3.68469 14.1014 3.3335 14.9493 3.3335 15.8333V17.5M13.3335 5.83333C13.3335 7.67428 11.8411 9.16667 10.0002 9.16667C8.15921 9.16667 6.66683 7.67428 6.66683 5.83333C6.66683 3.99238 8.15921 2.5 10.0002 2.5C11.8411 2.5 13.3335 3.99238 13.3335 5.83333Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Perfil
            </Link>
          </li>
        </ul>
      </div>

      <div className="divider"></div>

      <button onClick={() => handleSignOut()} className="signout">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="corner-up-left">
            <path
              id="Icon"
              d="M7.50016 11.6666L3.3335 7.49992M3.3335 7.49992L7.50016 3.33325M3.3335 7.49992H13.3335C14.2176 7.49992 15.0654 7.85111 15.6905 8.47623C16.3156 9.10135 16.6668 9.9492 16.6668 10.8333V16.6666"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <p>Sair</p>
      </button>
    </aside>
  );
};

export default Sidebar;
