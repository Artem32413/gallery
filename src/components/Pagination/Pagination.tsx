import React, { FC } from "react";
import  Arrow  from "../img/arrow_icon.svg";
import PaginationStyles from "./Pagination.module.scss";

interface PaginationProps {
  photoPerPage: number;
  totalPhotos: number;
  paginate: (number: number) => void;
  nextPage: any;
  prevPage: any;
}

const Pagination: FC<PaginationProps> = ({
  photoPerPage,
  totalPhotos,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers: number[] = [];


  for (let i = 1; i <= Math.ceil(totalPhotos / photoPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNextPage = (event: MouseEvent) => {
    if (event.currentTarget) {
      nextPage(Number(event.currentTarget));
    }
  };
  return (
    <footer>
      <ul className={PaginationStyles.pageListUl} >
        <button id="buttonHendler" className={PaginationStyles.btn} onClick={prevPage}>
          <Arrow  />
        </button>
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a href="!#" className="pageLink" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        <button id="buttonHendler" className={PaginationStyles.btn2} onClick={nextPage}>
          <Arrow  />
        </button>
      </ul>
    </footer>
  );
};

export default Pagination;
function nextPage(arg0: number) {
  throw new Error("Function not implemented.");
}

