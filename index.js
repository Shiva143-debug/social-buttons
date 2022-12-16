const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button buttonText="Like" className="b1" />
      <Button buttonText="Comment" className="b2" />
      <Button buttonText="Share" className="b3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
