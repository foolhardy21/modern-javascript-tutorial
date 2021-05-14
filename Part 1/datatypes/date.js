function getWeekDay(date) {
  let weekDays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',

  }
  return weekDays[date.getDay()].slice(0,2).toUpperCase();
}



console.log( getWeekDay(new Date(2012,0,3)) )
