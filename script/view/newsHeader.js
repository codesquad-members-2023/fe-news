const viewNewsHeader = () => {
  const root = document.querySelector(".root");
  const newsHeader = document.createElement("header");
  root.appendChild(newsHeader);
  newsHeader.innerHTML = newsHeaderTemplate();
};

export { viewNewsHeader };
