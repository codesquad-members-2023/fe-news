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

const makeRollingData = () => {
  const dataList = [];
  const rollingData = document.querySelectorAll(".type02 li a strong");
  rollingData.forEach((data) => {
    const dataObj={headLine:data.innerText};
    dataList.push(dataObj);
});
  console.log(dataList);
};
