import React, { useRef } from 'react';
import NotificationSystem from 'react-notification-system';

const defaultContextData: any = {
  dark: false,
};

export const NotificationContext = React.createContext(defaultContextData);

export const NotificationProvider = (props: any) => {
  const notificationSystem = useRef();

  const addNotification = ({ title = '', message = '', level = 'warning' }: any) => {
    const notification: any = notificationSystem.current;
    notification.addNotification({
      message: message,
      level: level,
    });
  };

  const SuccessNotification = (message: any) => {
    addNotification({
      message: message || 'Your request was processed successfully',
      level: 'success',
    });
  };

  const ErrorNotification = (message: any) => {
    addNotification({
      message: message || 'Something went wrong while trying to process your request!',
      level: 'error',
    });
  };
  const WarningNotification = (message: any) => {
    addNotification({
      message,
      level: 'warning',
    });
  };
  return (
    <NotificationContext.Provider
      value={{
        SuccessNotification,
        ErrorNotification,
        WarningNotification,
      }}
    >
      <NotificationSystem {...props} ref={notificationSystem} />
      {props.children}
    </NotificationContext.Provider>
  );
};
