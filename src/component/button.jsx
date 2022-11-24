const Button = ({ className, type, text, onClick }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;
