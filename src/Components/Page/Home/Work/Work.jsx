import React, { useState } from "react";
import style from "./style.module.css";
import Projects from "./Projects/Projects";
import data from "./data.json";
import Pagination from "./Pagination/Pagination";
import Filter from "./Filter/Filter";

function Work() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);

  // filer data
  const filteredData = data.filter((item) => {
    return query === ""
      ? item
      : item.category.some((cat) =>
          cat.type.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
  });

  // handle filter buttons
  const handleClick = (e) => {
    const btnValue = e.target.value;
    setActive(active === btnValue ? null : btnValue);
    setQuery(active === btnValue ? "" : btnValue);
    setCurrentPage(1);
  };

  const handleChange = (e) => {
    return setQuery(e.target.value);
  };

  // Pagination
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(8);

  // Get current projects
  const indexOfLastPage = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastPage - projectsPerPage;
  const currentProjects = filteredData.slice(
    indexOfFirstProject,
    indexOfLastPage
  );

  // set page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={style.section} id="work">
      <div className="sectionTitle">
        <h1> •• SELECTED WORKS</h1>
      </div>
      <div className={style.wrapper}>
        <Filter
          handleChange={handleChange}
          handleClick={handleClick}
          active={active}
        />
        <Projects data={currentProjects} />
        <Pagination
          postsPerPage={projectsPerPage}
          totalProjects={filteredData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default Work;
