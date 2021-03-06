import { useTheme } from '@emotion/react';
import React from 'react';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const PencilSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.25 10.9375V13.75H3.0625L11.3575 5.45504L8.545 2.64254L0.25 10.9375ZM13.5325 3.28004C13.825 2.98754 13.825 2.51504 13.5325 2.22254L11.7775 0.467544C11.485 0.175044 11.0125 0.175044 10.72 0.467544L9.3475 1.84004L12.16 4.65254L13.5325 3.28004Z"
        fill="white"
      />
    </Svg>
  );
};

export default PencilSvg;
