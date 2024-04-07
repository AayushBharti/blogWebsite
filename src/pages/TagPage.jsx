import React from "react";
import { useLocation, useNavigation } from "react-router";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from '../components/Pagination'

const TagPage = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs Tagged <span>{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  );
};

export default TagPage;
