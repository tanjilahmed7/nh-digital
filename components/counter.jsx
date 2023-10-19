const Counter = ({ count, symbol = "", title }) => {
  return (
    <div className="counter">
      <h3>
        {count}
        {symbol}
      </h3>
      <p>{title}</p>
    </div>
  );
};

export default Counter;
