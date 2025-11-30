import style from "./display.module.css";

const Display = ({ count }: { count: number }) => {
  return (
    <div className={style.container}>
      <div className={`${style.display} ${style.animate}`}>{count}</div>
    </div>
  );
};

export default Display;
