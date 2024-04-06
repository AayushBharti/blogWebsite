import PropTypes from "prop-types";

const Card = ({ post }) => {
  return (
    <div className="mt-6 ">
      <div>
        <p className="font-bold">{post.title}</p>
        <p>
          By <span className="italic">{post.author}</span> on <span className="font-semibold underline">{post.category}</span>
        </p>
        <p>
          Posted on <span>{post.date}</span>
        </p>
        <p className="mt-2">{post.content}</p>
        <div>
          {post.tags.map((tag, index) => {
            return (
              <span
                className="underline text-blue-700 font-semibold mr-2"
                key={index}
              >{`#${tag.toLowerCase()} `}</span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

//it was giving some red marks with out them, so added it using chapGpt
Card.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Card;
