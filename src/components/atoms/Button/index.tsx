import React from 'react';
import styled from '@emotion/styled';

const BButton = styled.button<any>`
  ${({ theme, icon, variant, action }) => `
  border-radius: 4px;
  border: 1px solid transparent;
  background-color:  ${variant === 'plain' ? `transparent` : theme.colors.primary} ;
  color: ${action === 'danger' ? theme.colors.error : variant === 'plain' ? theme.colors.black : theme.colors.white};
  padding: 8px 28px;
  cursor:pointer;
  display:flex;
  align-items:center;

  &:disabled{
    opacity:.6;
  }
  & > svg{
    margin-right: 10px;
  }
  ${
    icon &&
    `& span {
    display:none;
  }`
  }
`}

  ${({ theme }) => theme.mq.sm`
  & span{
    display: inline-block;
  }
`}
`;
const Button = (props: any): any => {
  const { children, ...rest } = props;
  return (
    <BButton {...rest}>
      {rest.icon}
      <span>{children}</span>
    </BButton>
  );
};

export default Button;
