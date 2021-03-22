export const GenerateReference = (): string => {
  const ref = 'Ref' + new Date().getMilliseconds().toString();
  return ref;
};

export const getComputedThemeColor = (variant: string, theme: any): string => {
  const color =
    variant === 'dark' && theme.type === 'light'
      ? theme.colors.dark
      : variant === 'brand'
      ? theme.colors.primary
      : theme.colors.white;
  return color;
};

export const getTimeDifference = (rawDate: string): string => {
  const currentDate = new Date();
  const date = new Date(rawDate);
  const diff = currentDate.valueOf() - date.valueOf();
  const seconds = Math.ceil(diff / 1000);
  const minutes = Math.ceil(seconds / 60);
  const hours = Math.ceil(minutes / 60);
  const days = Math.ceil(hours / 24);
  let timeinstring = '';
  if (seconds < 60) {
    timeinstring = seconds + ` ${seconds === 1 ? `sec` : `secs`}`;
  } else if (minutes < 60) {
    timeinstring = minutes + ` ${minutes === 1 ? `min` : `mins`}`;
  } else if (hours < 24) {
    timeinstring = hours + ` ${hours === 1 ? `h` : `hs`}`;
  } else {
    timeinstring = days + ` ${days === 1 ? `d` : `ds`}`;
  }
  return timeinstring + ' ago';
};

export const addEventListenerToDoc = (wrapperId: string, cb: any): void => {
  window.addEventListener(
    'click',
    (e: any) => {
      const target: HTMLElement | null = document.querySelector(`#${wrapperId}`);
      if (target?.contains(e.target)) {
        cb(true);
      } else {
        cb(false);
      }
    },
    false,
  );
};

export const getSize = (size: string): string => {
  let _size;
  switch (size) {
    case 'xs':
      _size = '30px';
      break;
    case 'sm':
      _size = '50px';
      break;
    case 'sm2':
      _size = '65px';
      break;
    case 'md':
      _size = '100px';
      break;
    case 'lg':
      _size = '200px';
      break;
    case 'xl':
      _size = '300px';
      break;
    case 'xxl':
      _size = '500px';
      break;
    default:
      _size = '50px';
  }
  return _size;
};
