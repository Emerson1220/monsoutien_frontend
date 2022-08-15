import React from 'react';

function ButtonsResult({ data }) {
  return (
    <>
      {data && (
        <pre style={{ textAlign: 'left', color: 'red' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <button type='sunmit'>submit</button>
    </>
  );
}

export default ButtonsResult;
