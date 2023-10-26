export const getCsvs = async () => {
  try {
    const response = await fetch("https://csv-upload-be.onrender.com/get");
    const data = await response.json();

    if (data.success) {
      return data.csvs;
    }

    throw new Error("Error fetching csvs");
  } catch (error) {
    console.log(error);
  }
};

export const uploadCsv = async (formData) => {
  try {
    const response = await fetch("https://csv-upload-be.onrender.com/add", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return data.csv;
    }

    throw new Error("Error uploading csv");
  } catch (error) {
    console.log(error);
  }
};

export const deleteCsv = async (id) => {
  try {
    const response = await fetch(
      `https://csv-upload-be.onrender.com/delete/${id}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data.success) {
      return;
    }

    throw new Error("Error deleting csv");
  } catch (error) {
    console.log(error);
  }
};

export const displayCsv = async (id, page, limit=10) => {
  try {
    const response = await fetch(
      `https://csv-upload-be.onrender.com/display/${id}?page=${page}&limit=${limit}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data.success) {
      return data;
    }

    throw new Error("Error displaying csv");
  } catch (error) {
    console.log(error);
  }
};
