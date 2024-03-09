import "./tags.scss"

const Tags = (props) => {
  return (
    <div id={props.className}>
      <ul className="tagsList">
        {props.tagsData.map((tag) => (
          <li key={tag} className="tagList-item">{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
