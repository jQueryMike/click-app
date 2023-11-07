export const isImage = (url: string): boolean => {
  return url.match(/\.(jpeg|jpg|gif|png|webm)$/) != null;
};

const numberWithCommas = (num: string | number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatValue = (value: string | number, key: string): string => {
    if (key === "price") {
        return `£${numberWithCommas(value)}`;
    }
    if (key === "mileage") {
        return `${numberWithCommas(value)} miles`;
    }
    return value.toString();
}