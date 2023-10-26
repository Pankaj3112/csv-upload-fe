import React from "react";
import { Link } from "react-router-dom";
import { deleteCsv } from "../api";
import { useCsvs } from "../hooks";

function File({ csv }) {
  const { deleteCsvFromState } = useCsvs();

  const handleDelete = async () => {
    await deleteCsv(csv._id);
    deleteCsvFromState(csv._id);
  };

  return (
    <div className="flex flex-row items-center justify-between w-1/2 px-4 py-2 bg-gray-100 rounded-md shadow-md">
      <p>{csv.filename}</p>

      <div className="flex flex-row items-center justify-between gap-4">
        <div className="cursor-pointer">
          <Link to={`/csv/${csv._id}`}>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </div>

        <div className="cursor-pointer" onClick={handleDelete}>
          <p>
            <i className="fa-solid fa-trash"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default File;
