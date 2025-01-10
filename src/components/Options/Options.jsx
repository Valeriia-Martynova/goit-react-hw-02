import React from "react";
import styles from "./Options.module.css";

const Options = ({ options, onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onFeedback(option)}
          className={styles.button}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={onReset} className={styles.reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
