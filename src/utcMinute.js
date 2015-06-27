import interval from "./interval";

export default interval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, offset) {
  date.setTime(+date + offset * 6e4);
});
