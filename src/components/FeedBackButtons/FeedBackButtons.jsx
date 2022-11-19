import PropTypes from 'prop-types';
import style from './FeedBackButtons.module.css';

export const FeedBackOptions = ({ name, handleClick }) => {
  // console.log("BTNprops",name);
  return (
    <div className={style.btnBox}>
      {name.map(item => (
        <button
          className={style.button}
          key={item}
          name={item}
          type="button"
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedBackOptions.propTypes = {
  name: PropTypes.array,
  handleClick: PropTypes.func,
};
