import React from 'react';

export default function InputField({ type, name, onChange, placeholder, value }) {
  return (
    <input
      className='text-gray-600 text-lg p-[11px] shadow-lg rounded-l-lg  w-3/4 outline-none border border-blue-400 input-field'
      type={type || 'text'}
      name={name || ''}
      placeholder={placeholder || ''}
      onChange={onChange || (() => {})}
      value={value}
    />
  );
}