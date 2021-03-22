export interface AppRoute {
  name: string;
  path: string;
  component: any;
}

export interface Theme {
  colors: any;
  breakpoints: any;
  buttons: any;
  font: any;
  mq: any;
  heading: any;
  type: string;
}

export interface ButtonProps {
  type?: any;
  buttonText?: string;
}

export interface SpinnerProps {
  type?: string;
  size?: string;
  variant?: string;
}

export interface AvatarProps {
  src?: string | any;
  size?: string;
  editable?: boolean;
  ishashtag?: boolean;
  tag?: string;
  path?: any;
}
export interface IconProps {
  variant?: string;
  onClick?: any;
}
