import React, { useState, useEffect } from 'react';

const DatePercentage = () => {
  const [percentageComplete, setPercentageComplete] = useState(0);

  useEffect(() => {
    const diffDays = (startDate, endDate) => {
      const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
      return Math.round(Math.abs(endDate - startDate) / msPerDay);
    }

    const startDate = new Date('2022-01-01');
    const endDate = new Date('2024-12-31');
    const currentDate = new Date(); // Today's date

    const totalDays = diffDays(startDate, endDate);
    const elapsedDays = diffDays(startDate, currentDate);

    let percentage = (elapsedDays / totalDays) * 100;
    percentage = Math.min(percentage, 100); // Cap the percentage at 100%
    setPercentageComplete(percentage.toFixed(2)); // Set the state with the formatted percentage
  }, []);

  return (
    <p className="leading-tight text-left w-full scp mb-3">
      Jan 2022 - Current ({percentageComplete}% Completion)
    </p>
  );
};

export default DatePercentage;