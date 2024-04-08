import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}?blogId=${blogId}`;
    // console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("error in fetchRelatedBlogs");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>

      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : blog ? (
        <div>
          <Card post={blog} />
          <h2> Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <Card post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p> No Blog found</p>
      )}
    </div>
  );
};

export default BlogPage;
