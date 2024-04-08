import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

//step-1 - context creation
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const navigate = useNavigate();

  //data filling
  async function fetchBlogPosts(page = 1, tag = null, category) {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;
    // console.log(url);
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    try {
      const result = await fetch(url);
      const data = await result.json();
      // console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  //next and previous buttons
  function handlePageChange(page) {
    navigate({ search: `?page=${page}` });
    setPage(page);
    // fetchBlogPosts(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  //step-2 - context providing
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
