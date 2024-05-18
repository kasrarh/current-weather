export const convertTimezoneToHHMM =(timezoneOffset) => {
  const timezoneOffsetMs = timezoneOffset * 1000;
  const currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + timezoneOffsetMs);
  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return formattedTime;
}
