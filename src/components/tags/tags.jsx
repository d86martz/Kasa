import "./tags.scss"

const Tags = (props) => {
  return (
    <div id={props.id}>
      <ul className="tagsList">
        {props.tagsData.map((tag) => (
          <li key={tag} className="tagList-item">{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
