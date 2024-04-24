import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(({ message, variant }) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      { message, variant, id: crypto.randomUUID() },
    ]);
  }, []);

  const deleteToast = React.useCallback(
    (id) => {
      const nextToasts = [...toasts];
      const filterToasts = nextToasts.filter((toast) => toast.id !== id);
      setToasts(filterToasts);
    },
    [toasts]
  );

  useEscapeKey(() => {
    setToasts([]);
  });

  const value = React.useMemo(() => {
    return { toasts, addToast, deleteToast };
  }, [addToast, deleteToast, toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
