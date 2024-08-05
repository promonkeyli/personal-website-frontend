"use client";
import type React from "react";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IToastProps {
  /* toast 持续时间 ms为单位，默认500ms */
  duration?: number;
  /* 显示与否 */
  show: boolean;
  /* 提示的内容 */
  message: ReactNode;
  /* toast类别：成功/失败/信息 */
  type?: "success" | "error" | "info" | "warning";
  /* 关闭的钩子 */
  onClose?: () => void;
}
export default function IToast(props: IToastProps) {
  const { duration = 500, message, show, type = "success", onClose } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (show) {
        const timer = setTimeout(() => {
          onClose?.();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, show, onClose]);

  return (
    <div
      className={`toast toast-top toast-center transition-transform transform ${
        show ? "translate-y-5" : "invisible translate-y-8"
      }`}
    >
      <div className={`alert alert-${type}`}>{message}</div>
    </div>
  );
}

export interface IToastContextType {
  showToast: (msg: ReactNode) => void;
}

const IToastContext = createContext<IToastContextType | null>(null);

// 非组件中调用
let globalShowToast: (message: ReactNode) => void;

export const IToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<{ message: ReactNode; show: boolean }>({
    message: "",
    show: false,
  });

  const showToast = (message: ReactNode) => {
    setToast({ message, show: true });
  };

  const closeToast = () => {
    setToast({ message: "", show: false });
  };

  globalShowToast = showToast; // 设置全局 showToast 方法

  return (
    <IToastContext.Provider value={{ showToast }}>
      {children}
      <IToast message={toast.message} show={toast.show} onClose={closeToast} />
    </IToastContext.Provider>
  );
};
export const useToast = (): IToastContextType => {
  const context = useContext(IToastContext);
  if (context === null) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const showToast = (message: ReactNode) => {
  if (globalShowToast) {
    globalShowToast(message);
  } else {
    console.error("showToast function is not initialized");
  }
};
