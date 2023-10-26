import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayCsv } from "../api";
import { useState } from "react";

function CsvDisplay() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const display = async () => {
      const res = await displayCsv(id);
      console.log(res);
      setData(res);
    };

    display();
  }, [id]);

  const changePage = async (page) => {
    const res = await displayCsv(id, page);
    setData(res);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-max py-2">
      <h1 className="text-2xl font-bold">CSV Data</h1>
      <div className="flex flex-col items-center justify-center min-h-max py-2">
        <table className="table-auto">
          <thead>
            <tr>
              {data &&
                data.header.map((item, idx) => (
                  <th key={idx} className="px-4 py-2">
                    {item}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, idx) => (
                    <td key={idx} className="border px-4 py-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {data && (
        <div className="flex gap-2">
          {data.pageInfo.prev && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => changePage(data.pageInfo.prev)}
            >
              {data.pageInfo.prev}
            </button>
          )}

          {data.pageInfo.current && (
            <button className="bg-blue-300 text-white font-bold py-2 px-4 rounded">
              {data.pageInfo.current}
            </button>
          )}

          {data.pageInfo.next && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => changePage(data.pageInfo.next)}
            >
              {data.pageInfo.next}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default CsvDisplay;
