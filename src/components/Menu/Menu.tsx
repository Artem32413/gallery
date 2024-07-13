import React, { FC, useState, useEffect } from "react";
import  Plus  from "../img/plus.svg";
import  Minus  from "../img/minus.svg";
import  CloseBig from "../img/closeBig.svg";
import styles from "./Menu.module.scss";
import axios from "axios";
import { createPortal } from "react-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}
interface Authors {
  id: number;
  name: string;
}
interface Locations {
  id: number;
  location: string;
}
type InputProps = {
  onChange: (newValue: string) => void;
};

const Menu: FC<MenuProps> = ({ isOpen, onClose }, { onChange }: InputProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isSelectOpen2, setIsSelectOpen2] = useState<boolean>(false);
  const [isSelectOpen3, setIsSelectOpen3] = useState<boolean>(false);
  const [artists, setArtists] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const toggleSelect = (): void => {
    setIsSelectOpen(!isSelectOpen);
  };
  const toggleSelect2 = (): void => {
    setIsSelectOpen2(!isSelectOpen2);
  };
  const toggleSelect3 = (): void => {
    setIsSelectOpen3(!isSelectOpen3);
  };

  const handleMenuClose = (): void => {
    onClose();
  };

  useEffect(() => {
    const getArtists = async (): Promise<void> => {
      const resArtists = await axios.get<Authors[]>(
        "https://test-front.framework.team/authors",
      );

      setArtists(resArtists.data);
    };
    getArtists();

    const getLocations = async (): Promise<void> => {
      const resLocations = await axios.get<Locations[]>(
        "https://test-front.framework.team/locations",
      );
      setLocations(resLocations.data);
    };
    getLocations();
    Promise.all([getArtists(), getLocations()])
      .then(([getArtists, getLocations]) => {

      }).catch((error) => {
        console.error(error);

      });
  }, []);

  const modalMenu = document.getElementById("modal");
  return modalMenu
    ? createPortal(
      <div className={`${styles.menu} ${isOpen ? styles.activeMenu : ""}`}>
        <div className={styles.positionMenu}>
          <div className={styles.marginBlock}>
            <div className={styles.menuContent}>
              <button
                onClick={handleMenuClose}
                className={styles.closeButton}
              >
                <CloseBig  />
              </button>
              <ul className={styles.siUl1}>
                <li>
                  Artist{" "}
                  <button className={styles.button1} onClick={toggleSelect}>
                    {isSelectOpen ? (
                      <Minus  />
                    ) : (
                      <Plus  />
                    )}
                  </button>
                  <select
                    className={
                      !isSelectOpen ? styles.noSelect : styles.activeSelect
                    }
                    value={selectedArtist}
                    onChange={(e) => setSelectedArtist(e.target.value)}
                  >
                    <option>Select the artist</option>
                    {artists.map((elArtists: any, i: number) => (
                      <option key={i} value={elArtists.id}  >{`${elArtists.name}`}</option>
                    ))}
                  </select>
                </li>
              </ul>

              <ul className={styles.siUl2}>
                <li>
                  Location{" "}
                  <button className={styles.button2} onClick={toggleSelect2}>
                    {isSelectOpen2 ? (
                      <Minus  />
                    ) : (
                      <Plus  />
                    )}
                  </button>
                  <select
                    className={
                      !isSelectOpen2 ? styles.noSelect : styles.activeSelect
                    }
                  >
                    <option>Select the location</option>
                    {locations.map((elLocations: any, i: number) => (
                      <option key={i}>{`${elLocations.locations}`} </option>

                    ))}
                  </select>
                </li>
              </ul>

              <ul className={styles.siUl3}>
                <li>
                  Years{" "}
                  <button className={styles.button3} onClick={toggleSelect3}>
                    {isSelectOpen3 ? (
                      <Minus />
                    ) : (
                      <Plus  />
                    )}
                  </button>
                  <div
                    className={`${!isSelectOpen3 ? styles.noSelect3 : styles.divClass}`}
                  >
                    <input
                      type="number"
                      className={styles.activesearch3}
                      placeholder="From"
                    />{" "}
                    <div className={styles.blockDiv}></div>{" "}
                    <input
                      type="number"
                      className={styles.activesearch3}
                      placeholder="To"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.footerFiltr}>
              <ul className={styles.isUl}>
                <li>Show the results</li>
                <li>clear</li>
              </ul>
            </div>
          </div>
        </div>
      </div>,
      modalMenu,
    )
    : null;
};

export default Menu;
