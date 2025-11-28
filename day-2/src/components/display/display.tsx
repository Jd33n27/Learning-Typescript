import style from "./display.module.css";

const Display = ({ count }: { count: number }) => {
  return (
    <div className={style.Container}>
      <div className={style.display}>{count}</div>
    </div>
  );
};

export default Display;
