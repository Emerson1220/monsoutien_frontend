//Style
import style from './BtnStandard.module.scss';

const BtnStandard = (props) => {
  return (
    <button className={style.BtnStandard}>{props.btnText}</button>
  );
};

export default BtnStandard;
