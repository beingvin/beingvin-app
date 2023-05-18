import React from "react";
import style from "./style.module.css";

function Paginaion({ postsPerPage, totalProjects, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProjects / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav>
      <ul className={style.pagination}>
        {currentPage > 1 && (
          <li
            className={` ${style.previous}`}
            onClick={() => {
              paginate(currentPage - 1);
            }}
          >
            Previous
          </li>
        )}

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={` ${style.numbers} ${
              currentPage === number ? style.active : " "
            }`}
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </li>
        ))}

        {currentPage < pageNumbers.length && (
          <li
            className={` ${style.next}`}
            onClick={() => {
              paginate(currentPage + 1);
            }}
          >
            Next
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Paginaion;
