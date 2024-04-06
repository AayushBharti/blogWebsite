import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {

  const {page,totalPages,handlePageChange} = useContext(AppContext);

  return (
    <div className="w-full bg-gray-50  mx-auto
    py-2 fixed bottom-0 border-t-4">
      <div className="flex justify-between max-w-[680px]
      mx-auto">
        <div className="flex gap-2">
          { 
            page>1 &&
            <button 
            className="border-4 rounded-md px-3 py-0.5"
            onClick={()=>handlePageChange(page-1)}>Previous</button>
          }
          { 
            page<totalPages &&
            <button 
            className="border-4 rounded-md px-3 py-0.5"

            onClick={()=>handlePageChange(page+1)}>Next</button>
          }
        </div>
        <div>
          <p>
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
