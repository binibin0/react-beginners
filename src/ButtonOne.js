import styles from "./ButtonOne.module.css";
import PropTypes from "prop-types";

function ButtonOne({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Click Me
    </button>
  );
}

ButtonOne.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonOne;
