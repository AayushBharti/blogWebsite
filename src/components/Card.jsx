import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="mt-6 ">
      <NavLink to={`/blog/${post.id}`}>
        <p className="font-bold">{post.title}</p>
      </NavLink>
      <p>
        By <span className="italic">{post.author}</span> on
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-semibold underline">{post.category}</span>
        </NavLink>
      </p>

      <p>
        Posted on <span>{post.date}</span>
      </p>

      <p className="mt-2">{post.content}</p>

      <div>
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span className="underline text-blue-700 font-semibold mr-2">
                {`#${tag.toLowerCase()} `}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

//it was giving some red marks with out them, so added it using chapGpt
Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Card;
