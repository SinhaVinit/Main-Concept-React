import "./FancyBorder.css";

function FancyBorder(props) {
  return (
    <div className={"fancyBorder fancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

export default FancyBorder;
