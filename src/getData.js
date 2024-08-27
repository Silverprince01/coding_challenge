export const getVolume = async (setData) => {
  try {
    setData((prevState) => ({
      ...prevState,
      loading: true,
    }));
    const response = await fetch("/volume.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();
    setData({
      data: jsonData,
      loading: false,
      error: false,
    });
  } catch (err) {
    setData({
      data: null,
      loading: false,
      error: err.message,
    });
  }
};
