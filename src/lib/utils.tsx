export const modifyBody = async (body: string) => {
  // If "\r\n" is found, parse it as a new line

  if (body.includes("\r\n")) {
    const bodyArray = body.split("\r\n");
    return bodyArray.map((item, index) => {
      // If the item is empty, skip it
      if (item === "") {
        return null;
      }
      return (
        <p className="mt-5 leading-normal" key={index}>
          {item}
        </p>
      );
    });
  }
};
export const getStartAndEndYear = (startDate: Date, endDate: Date) => {
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  return `${startYear} - ${endYear}`;
};

export const getDate = (date: Date) => {
  const day = date.getDate();
  const year = date.getFullYear();

  const dayString = day < 10 ? `0${day}` : day;
  const monthName = date.toLocaleString("default", { month: "short" });
  return `${monthName} ${dayString}, ${year}`;
};
