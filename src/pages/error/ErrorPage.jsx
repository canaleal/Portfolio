/* eslint-disable max-len */
import React from 'react';
import PageHeader from '../../components/PageHeader';

function Error() {
  return (
    <div className="main">

      <PageHeader title="404 Error" color="bg-red" />

      <div className="px-5 my-4 ">
        <p>Welcome to the backrooms. Nothing exists here, so please use the Navbar to select another page.</p>
      </div>

    </div>
  );
}

export default React.memo(Error);
