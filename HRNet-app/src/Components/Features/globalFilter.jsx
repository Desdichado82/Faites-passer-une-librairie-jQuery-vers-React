import React from 'react';

const GlobalFilterInput = React.memo(({ value, onChange, count }) => {
  console.log('GlobalFilterInput rendering...');

  return (
    <span>
      Search:{' '}
      <input
        value={value}
        onChange={onChange}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  );
}, (prevProps, nextProps) => {
  // Memoize the component based on props
  return (
    prevProps.value === nextProps.value &&
    prevProps.count === nextProps.count
  );
});

GlobalFilterInput.displayName = 'GlobalFilterInput'; // Provide a display name

export default GlobalFilterInput;
