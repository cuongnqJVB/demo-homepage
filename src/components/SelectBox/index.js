import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import './style.scss';
const { Option } = Select;
const SanText = styled.div`
  font-family: HyundaiSansTextKR;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0;
`;
export default ({
  name,
  text,
  textvalue,
  requirefield = false,
  class_selectbox,
  defaultValue,
  placeholder,
  data = [],
  onBlur = () => {},
  ...props
}) => {
  return (
    <div className={`tt-select-box-wrap ${class_selectbox}`}>
      <SanText className="title">
        {textvalue} <b hidden={!requirefield}>*</b>
      </SanText>
      <Select
        name={name}
        onBlur={onBlur}
        suffixIcon={<img src="/Images/arrow.png" />}
        className="select-box-field"
        style={{ width: '100%', height: '100%' }}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...props}
      >
        {text}
      </Select>
    </div>
  );
};
