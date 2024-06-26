const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
        return description.slice(0, maxLength) + '...';
    }
    return description;
};

export default truncateDescription;