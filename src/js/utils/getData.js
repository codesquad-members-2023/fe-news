export const getData = async (url) => await fetch(url).then((res) => res.json());
