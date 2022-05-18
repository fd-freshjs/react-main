import React, { useEffect } from 'react';

function Input (props) {

  const { onChange: handleChange, children, ...rest } = props;

  function onChange(e) {
      const value = e.target.value;
      const name = e.target.name;
      // save
      handleChange(name, value);
  }

  useEffect(() => {
    console.log('handleChange()');
  }, [handleChange]);

  return (
    <label>
      {children}
      <input onChange={onChange} {...rest} />
    </label>
  )
}

export default Input