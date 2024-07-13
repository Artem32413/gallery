import React, { useEffect, useState, ChangeEvent } from "react";
import styles from "./styleBlok.module.scss";
import Settings  from "../img/Settings.svg";
import  Serch from "../img/serch.svg";
import Menu from "../Menu/Menu";
import Input from "./Input";
export default function InputBlok( {onInputChange}: {onInputChange: (value: string) => void} ) {
  // const [value, setValue] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <div className={styles.overInputBlok}>
      <div className={styles.boxSearch}>
        <div className={styles.positionIcon}>
         
          <Input onChange={onInputChange} />
          <i>
            <Serch  />
          </i>
        </div>
        <button id="settingsBtn" onClick={toggleMenu}>
          <Settings />
        </button>
        {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />}
      </div>
    </div>
  );
}
