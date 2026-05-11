export const CustomHeader = (props) => {
  return (
    <div className="content-center">
      <h1>{props.title}</h1>
      {props.description && 
      <p>{props.description}</p>
      }
    </div>
  );
};
