const Tags = ({ className, tagsData}) => {
  return (
    <div className={className}>
      <ul className="tagsList">
        {tagsData.map((tag) => (
          <li key={tag} className="tagList-item">{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
