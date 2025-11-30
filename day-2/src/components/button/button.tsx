import style from "./button.module.css";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        className={`${style.btn} ${style.animate} ${style.transition}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
