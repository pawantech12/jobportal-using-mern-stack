const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const getStatus = (deadline) => {
  const currentDate = new Date();
  const deadlineDate = new Date(deadline);
  return currentDate > deadlineDate ? "Closed" : "Open";
};

export { formatDate, getStatus };
