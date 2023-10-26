import React from "react";
import { uploadCsv } from "../api";
import { useCsvs } from "../hooks";
import { useState } from "react";

function Form() {
  const {addCsvToState} = useCsvs();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
	setLoading(true);

    event.preventDefault();

    const formData = new FormData(event.target);
    const csv = await uploadCsv(formData);
	addCsvToState(csv);

	event.target.reset();
	setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-fit py-2 gap-10 my-28">
      <header className="flex flex-col items-center justify-center w-full text-center">
        <h1 className="text-6xl font-bold">CSV Reader</h1>
        <p className="mt-3 text-2xl">
          Upload a CSV file and view it in tabular format
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex gap-5">
        <input
          type="file"
          name="csvfile"
          accept=".csv"
          required
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
        <input
          type="submit"
          value={loading ? "Uploading..." : "Upload"}
          className="p-2 border-2 border-gray-300 rounded-lg"
		  disabled={loading}
        />
      </form>
    </div>
  );
}

export default Form;
