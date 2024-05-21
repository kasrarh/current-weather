/**
 * Converts the current time to HH:MM format (24-hour clock) considering the provided timezone offset.
 *
 * @param {number} timezoneOffset - The timezone offset in seconds.
 * @returns {string} The formatted time string in HH:MM format.
 */
export const convertTimezoneToHHMM =(timezoneOffset) => {
  // Convert timezone offset to milliseconds and adjust current time.
  const timezoneOffsetMs = timezoneOffset * 1000;
  const currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + timezoneOffsetMs);
  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  // Extract formatted time string (HH:MM)
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return formattedTime;
}
