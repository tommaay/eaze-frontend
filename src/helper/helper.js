export const formatSearch = searchInput => {
    const formattedInput = searchInput.split(' ');
    return formattedInput.join('+');
};
