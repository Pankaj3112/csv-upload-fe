import React from "react";
import { useCsvs } from "../hooks";
import { File } from ".";

function FilesList() {
  const { csvs } = useCsvs();

  return (
    <div className="flex flex-col items-center justify-center py-2 gap-10">
      {csvs.map((csv) => (
        <File key={csv._id} csv={csv} />
      ))}
    </div>
  );
}

export default FilesList;
