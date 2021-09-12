import PropTypes from 'prop-types';
import css from './Button.module.css';
function Button({ type, buttonName, handleClick, id }) {
  return (
    <button className={css.button} onClick={handleClick} id={id} type={type}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  buttonName: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
