function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p className="boiling">The water would boil.</p>;
  }
  return <p className="notBoiling">The water would not boil.</p>;
}

export default BoilingVerdict;
