import Collapses from "../collapses/collapses";

const CollapsesList = (props) => {
    const itemsList = props.data.props.itemsListLabel
  const title = itemsList.props.itemTitle;
  const content = itemsList.props.itemContent;
  return (
    <div id={`${props.title}-collapses`}>
      <ul id="collapsesList">
        <li key={props.itemTitle} className="collapsesList-item">
          {itemsList.map(() => {
            return <Collapses title={title} content={content} />;
          })}
        </li>
      </ul>
    </div>
  );
};
export default CollapsesList;
