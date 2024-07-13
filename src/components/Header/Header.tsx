import React, { FC } from "react";
import styles from "./Header.module.scss";
import  VectorLight from "../img/vector.svg";
import VectorDark  from "../img/darkTheme.svg";
import  Logo from "../img/logo.svg";
import { useTheme } from "../../hooks/use-theme";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    
    <header>
      dfgfgdfg
      <div className={styles.overHeader}>
        <div>
          <span className="logo">
            <a className="lightButton">
              <Logo />
            </a>
          </span>
        </div>
        <div>
          <button onClick={handleTheme}>
            {theme === "light" ? <VectorLight /> : <VectorDark />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
