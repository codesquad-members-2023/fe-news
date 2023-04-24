import WEEK from '../constants/constants.js'

const getCurrentDate = (date) => {
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    day: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    weekDay: WEEK[date.getDay()],
  };
  const today = `${dateInfo.year}.${dateInfo.month}.${dateInfo.day}.${dateInfo.weekDay}`;

  return today;
};


export default getCurrentDate