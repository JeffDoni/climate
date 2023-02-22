const KEY = '333b6839812f425889d131612232202';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
  const fecthResponse = await fetch(url);
  const data = await fecthResponse.json();
  return data;
};

export default fetchData;
