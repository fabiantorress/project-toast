import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification" >
      {toasts?.map(({ message, variant, id }, index) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
            message={message}
            handleDismiss={() => handleDismiss(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
