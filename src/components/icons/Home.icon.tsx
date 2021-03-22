import { useTheme } from '@emotion/react';
import React from 'react';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const HomeSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;
  return (
    <Svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 13V8.5H9.5V13H13.25V7H15.5L8 0.25L0.5 7H2.75V13H6.5Z" fill="#828282" />
    </Svg>
  );
};

export default HomeSvg;
