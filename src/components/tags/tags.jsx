import "./tags.scss"

const Tags = (props) => {
  return (
    <div>
      <ul id="tagsList">
        {props.tagsData.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
