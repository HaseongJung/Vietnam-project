export const getDateStart = (date: Date | string) => {
  const DATE_START_TIME = new Date(date);
  DATE_START_TIME.setUTCHours(0, 0, 0, 0);

  return DATE_START_TIME;
};

/**
 * Return string format for VN
 * @param date
 * @returns
 */
export const getDateLocalFormatVN = (date: Date | string) => {
  return new Date(date).toLocaleString("vi-vn");
};

export const getDateFormatVN = (date: Date | string) => {
  return new Date(date).toLocaleDateString("vi-vn");
};

export const getHourFormatVN = (date: Date | string) => {
  return new Date(date).toLocaleTimeString("vi-vn");
};