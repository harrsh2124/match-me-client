import dayjs from 'dayjs';

export const truncateString = (text, count) => {
    return text.slice(0, count) + (text.length > count ? '...' : '');
};

export const getDate = (timestamp) => {
    return dayjs.unix(timestamp).format('DD/MMMM/YYYY');
};

export const getTime = (timestamp) => {
    return dayjs.unix(timestamp).format('hh:mm A');
};

export const getYearsDifference = (timestamp) => {
    const today = dayjs();
    return today.diff(dayjs.unix(timestamp), 'y');
};
