import React from 'react';

function AttentionBar({ message }) {
  return (
    <div className="bg-smoke">

      <div className=" py-8 px-5">
        <p className="font-bold">Attention</p>
        <p className="text-sm mt-2">{message}</p>
      </div>

      <hr />

    </div>
  );
}

export default AttentionBar;
