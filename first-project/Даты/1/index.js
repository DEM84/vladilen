const getDateFormat = (date, separator = ".") => {
  let myMonth = date.getMonth() + 1;
  let myDate = date.getDate();

  if (myDate.toString().length === 1) {
    myDate = "0" + myDate.toString();
  }
  if (myMonth.toString().length === 1) {
    myMonth = "0" + myMonth.toString();
  }

  return myDate + separator + myMonth + separator + date.getFullYear();
};

console.log(getDateFormat(new Date(1812, 7, 26), "★"));
