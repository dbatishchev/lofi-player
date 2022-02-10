import React from 'react';
import styled from "@emotion/styled";

const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  outline: none !important;
  appearance:none;
  border:none;
  border-radius: 4px;

  &::-moz-focus-outer {
    border: 0;
  }
  
  &:hover {
    outline:none;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: white;
    cursor: pointer;
    border-radius: 50%;
    outline:none;
  }
  
  &::-moz-range-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: white;
    cursor: pointer;
    border-radius: 50%;
    outline:none;
  }
  
  &::-moz-range-progress {
    background-color: #fff;
    height: 100%;
    border-radius:30px;
    border:none;
  }
  
  &::-moz-range-track {  
    background-color: #ccc;
    border-radius:30px;
    border:none;
      height: 100%;
  }
`

type VolumeProps = {
  className?: string,
  value: number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const Volume: React.FC<VolumeProps> = ({className = '', value, onChange}) => {
  return (
    <StyledRangeInput
      className={className}
      value={value}
      onChange={onChange}
      type="range" min="0" max="100"
    />
  );
}

export default Volume;
