import React, { FC, useState } from "react";
import styles from "./Main.module.scss";
import  VectorArrow from "../img/VectorArrow.svg";
import { useGetPhotoByNameQuery } from "../../services/pokemon";


interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  name?: string;
  created?: string;
}
interface MainProps {
  setPhoto: Photo[];
  loading: boolean;
}




const Main: FC<MainProps> = () => {
const {data = [], isLoading, isError} = useGetPhotoByNameQuery('')
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error!</h2>

  return (
    <main>

      <div className="overMain">
        <div className="block-input">
          <div className={styles.widthPhoto}>
            {
            data.map((item:any) => (
              <div className={styles.photoInfo} key={item.id}>
                <img
                  src={item.imageUrl}
                  alt=""
                  className={styles.overPhotoclass}
                />
                <div className={styles.overInfoPhoto}>
                  <div className={styles.block}>
                    <p className={styles.nameText}>{item.name}</p>
                    <p className={styles.data}>{item.created}</p>
                  </div>
                  <button>
                    <VectorArrow />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
