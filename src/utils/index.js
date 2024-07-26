export function getTodayDetails() {
  const date = Date.now();
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
