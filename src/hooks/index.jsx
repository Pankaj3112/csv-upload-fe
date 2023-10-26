import { useContext, useEffect, useState } from "react";
import { CsvContext } from "../providers";
import { getCsvs } from "../api";

export const useCsvs = () => {
  return useContext(CsvContext);
};

export const useProvideCsvs = () => {
  const [csvs, setCsvs] = useState([]);

  useEffect(() => {
    const fetchCsvs = async () => {
      const response = await getCsvs();
      setCsvs(response);
    };

    fetchCsvs();
  }, []);

  const addCsvToState = (csv) => {
	setCsvs([csv, ...csvs]);
  }

  const deleteCsvFromState = (id) => {
	setCsvs(csvs.filter(csv => csv._id !== id));
  }

  return { csvs, addCsvToState, deleteCsvFromState };
};
