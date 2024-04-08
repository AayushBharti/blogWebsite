import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default Home;
