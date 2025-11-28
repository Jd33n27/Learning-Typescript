import style from "./button.module.css";

interface buttonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: buttonProps) => {
  return (
    <div>
      <button className={style.btn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
