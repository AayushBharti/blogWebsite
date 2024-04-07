import { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

// const url = codehelp-apis.vercel.app/api/get-blogs?page=6

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams;
  const location = useLocation();

  // useEffect(() => {
  //   //fetch the initial blogposts data
  //   fetchBlogPosts();
  // }, []);

  useEffect(() => {
    //if page found else page=1
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      //then it means we have to show tags wala page
      //last waale / ke baad wali value ko tag me save karo without "_"
      const tag = location.pathname.split("/").at(-1).replaceAll("_", " ");
      fetchBlogPosts(Number(page), tag);
    } 
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("_", " ");
      fetchBlogPosts(Number(page), null, category);
    } 
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);
  //runs this whenever pathname or page no(in locaton.search) changes

  return (
    // <div className="w-full ">
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
