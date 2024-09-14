// import React from 'react';

// const Pagination = ({ page, totalPages, setPage }) => {
//   const nextPage = () => {
//     if (page < totalPages) setPage(page + 1);
//   };

//   const prevPage = () => {
//     if (page > 1) setPage(page - 1);
//   };

//   return (
//     <div className="pagination">
//       <button onClick={prevPage} disabled={page === 1}>
//         Previous
//       </button>
//       <span>
//         Page {page} of {totalPages}
//       </span>
//       <button onClick={nextPage} disabled={page === totalPages}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React, { useEffect } from 'react';
import '../App.css';

const Pagination = ({ page, totalPages, setPage }) => {
  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
   
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button onClick={nextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
