const fetchData = async () => {
  try {
    const response = await fetch(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    );
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
