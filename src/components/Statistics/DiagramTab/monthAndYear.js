const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('ru', { month: 'long' });

const months = new Array(12).fill(0).map((_, i) => {
  return new Date(`${i + 1}`).toLocaleString('ru', { month: 'long' });
});

const range = (start, stop) =>
  Array.from({ length: stop - start }, (_, i) => (start += 1));

const years = range(currentYear - 4, currentYear + 0);

// eslint-disable-next-line import/no-anonymous-default-export
export default { currentYear, currentMonth, months, years };