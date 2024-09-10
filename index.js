function showtimezone(event) {
  const timezone = event.target.value;
  if (timezone.length > 0) {
    const currentTime = moment()
      .tz(timezone)
      .format("[It's] dddd, MMMM Do, YYYY LT [in] z");
    document.querySelector("#timezoneDisplay").innerHTML = currentTime;
    alert(currentTime);
  }
}
let countryselect = document.querySelector("#country");
countryselect.addEventListener("change", showtimezone);
