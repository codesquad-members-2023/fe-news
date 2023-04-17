const fetcher = (url) => {
  return async (type, cb) => {
    try {
      const response = await fetch(`${url}${type}`);
      const data = await response.json();
      return cb(data);
    } catch (error) {
      console.error(error);
    }
  };
};

export default fetcher;
