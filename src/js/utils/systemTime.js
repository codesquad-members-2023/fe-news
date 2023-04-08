const systemTimeOption = new Date().toLocaleDateString("ko-KR",
  { year: "numeric",
  month: "numeric",
  day: "numeric",
  weekday: "long" });

export default systemTimeOption;