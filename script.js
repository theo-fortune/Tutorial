const getYearProgress = (year) => {
  //* Get today's date
  const today = new Date();

  //* Calculate the start of the year and the end of the year
  const startOfYear = new Date(year, 0, 1);
  const endOfYear = new Date(year, 11, 31);

  //* Calculate the total number of days in the year
  const totalDaysInYear = (endOfYear - startOfYear) / (1000 * 60 * 60 * 24) + 1;

  //* Calculate the number of days spent so far
  const daysSpent = (today - startOfYear) / (1000 * 60 * 60 * 24) + 1;

  //* Calculate the percentage of the year that has passed
  const percentageSpent = (daysSpent / totalDaysInYear) * 100;

  //* Calculate the number of days remaining
  const daysRemaining = totalDaysInYear - daysSpent;

  //* Format the output
  const formattedPercentage = percentageSpent.toFixed(2);
  const formattedDaysSpent = Math.floor(daysSpent);
  const formattedDaysRemaining = Math.floor(daysRemaining);

  //* Output the result
  console.log(
    `${year} is ${formattedPercentage}% gone, ${formattedDaysSpent} days have been spent so far. And now we have ${formattedDaysRemaining} days remaining.`
  );
};

//* Example usage
const currentYear = new Date().getFullYear();
getYearProgress(currentYear);
