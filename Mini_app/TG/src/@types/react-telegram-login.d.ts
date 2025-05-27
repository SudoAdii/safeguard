declare module 'react-telegram-login' {
  import * as React from 'react';

  interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date: number;
    hash: string;
  }

  interface TelegramLoginButtonProps {
    dataOnauth: (response: TelegramUser) => void;
    botName: string;
    buttonSize?: number;
    cornerRadius?: number;
    theme?: 'light' | 'dark';
  }

  const TelegramLoginButton: React.FC<TelegramLoginButtonProps>;

  export default TelegramLoginButton;
}
