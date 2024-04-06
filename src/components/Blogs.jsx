import { AppContext } from "../context/AppContext";
import Card from "./Card";
import Spinner from "./Spinner";
import { useContext } from "react";

const Blogs = () => {
  //step-3 -- consuming the context
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-full max-w-[680px] mx-auto mt-16 mb-20
    flex flex-col justify-center items-center min-h-screen">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((post,index) => (
            <Card key={index} post={post}/>
        ))
      )}
    </div>
  );
};

export default Blogs;
