import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, handleDismiss }) {
  const IconTag = ICONS_BY_VARIANT[variant];
  const className = `${styles.toast} ${styles[variant]}`;

  return (
    <div className={className}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <VisuallyHidden>{variant}</VisuallyHidden>
      <p className={styles.content}>{message}</p>
      <button
        className={styles.closeButton}
        onClick={handleDismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
