function showtimezone(event) {
  const timezone = event.target.value;
  if (timezone) {
    const currentTime = moment()
      .tz(timezone)
      .format("[It's] dddd, MMMM Do, YYYY LT");
    document.querySelector("#timezoneDisplay").innerHTML = currentTime;
    alert(currentTime);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let countryselect = document.querySelector("#country");
  countryselect.addEventListener("change", showtimezone);
});
