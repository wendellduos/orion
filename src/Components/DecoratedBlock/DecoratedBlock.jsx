import "./DecoratedBlock.css";

const DecoratedBlock = ({ children }) => {
  return (
    <div className="DecoratedBlock">
      <div className="inline-deco"></div>
      {children}
    </div>
  );
};

export default DecoratedBlock;
