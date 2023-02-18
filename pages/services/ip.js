import axios from 'axios';

const getIp = async () => {
  const ipResponse = await axios.get(`/api/ip`);

  return {
    data: ipResponse.data,
    error: ipResponse?.data.error,
    status: ipResponse?.data.status,
  };
};

export { getIp };
