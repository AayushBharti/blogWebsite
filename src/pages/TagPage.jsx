import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div className="mt-10">
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs Tagged <span>{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
