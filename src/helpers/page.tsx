export const checkIsLastPage = (pageNumber: any, length: any) => {
  return pageNumber == length;
};

export const calculateWidthOfProgress = (pageNumber: any, length: any) => {
  return Math.floor((Number(pageNumber) / length) * 100);
};
