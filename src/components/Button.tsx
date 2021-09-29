import React from 'react';
import styled from "@emotion/styled";

const StyledButton = styled.button<{ size: string }>`
    border: thin solid #dddddd;
    border-radius: 50%;
    width: ${props => props.size === 'lg' ? 72 : 48}px;
    height: ${props => props.size === 'lg' ? 72 : 48}px;
    margin: 6px;
    outline: none;
    background-color: transparent;
    color: currentColor;
    cursor: pointer;
    transition: 0.2s all;
    flex: none;
`

interface ButtonProps {
  size?: string
  children: React.ReactNode,
  onClick?: (event: React.MouseEvent) => void,
}

function Button({size = 'md', children, onClick}: ButtonProps) {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
