import PropTypes from 'prop-types';
import style from './FeedBackButtons.module.css';

export const FeedBackOptions = ({
  handleGood,
  handleNeutral,
  handleBad,
}) => {
  // console.log("BTNprops",name);
  return (
    <div className={style.btnBox}>
      
        <button
          className={style.button}
          key='good'
          type="button"
          onClick={handleGood}
        >
          good
        </button>
        <button
          className={style.button}
          key='neutral'
          type="button"
          onClick={handleNeutral}
        >neutral
        </button>
        <button
          className={style.button}
          key='bad'
          type="button"
          onClick={handleBad}
        >
          bad
        </button>
    
    </div>
  );
};

FeedBackOptions.propTypes = {
  handleBad: PropTypes.func,
  handleNeutral: PropTypes.func,
  handleGood: PropTypes.func,
};
