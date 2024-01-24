function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.colour}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder colour="blue">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

export default Dialog;
