// isImage checks if a url is an image.
export const isImage = (url: string): boolean => {
  return url.match(/\.(jpeg|jpg|gif|png|webm)$/) != null;
};

// numberWithCommas adds commas to a number.
const numberWithCommas = (num: string | number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// formatValue formats a value based on the key.
export const formatValue = (value: string | number, key: string): string => {
    if (key === "price") {
        return `£${numberWithCommas(value)}`;
    }
    if (key === "mileage") {
        return `${numberWithCommas(value)} miles`;
    }
    return value.toString();
}