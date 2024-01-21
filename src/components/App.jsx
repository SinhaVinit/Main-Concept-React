import FancyBorder from "./FancyBorder";

function WelcomeDialog() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Welcome!</h1>
        <p>Thank you for visiting our spacecraft.</p>
      </FancyBorder>
      <FancyBorder color="red">
        <h1>Welcome!</h1>
        <p>Thank you for visiting our spacecraft.</p>
      </FancyBorder>
    </div>
  );
}

export default WelcomeDialog;
