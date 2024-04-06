import { useContext, useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

// const url = codehelp-apis.vercel.app/api/get-blogs?page=6

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-full ">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
