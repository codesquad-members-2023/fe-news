const makeLogoDataSet = () => {
  const dataSet = [];
  const logoData = document.querySelectorAll(".thumb img");
  logoData.forEach((logo) => {
    let logoObj = {
      imgSrc: logo.currentSrc,
      alt: logo.alt,
    };
    dataSet.push(logoObj);
  });
  console.log(dataSet);
};
