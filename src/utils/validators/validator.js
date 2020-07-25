export const required = (value) => {
    if(value) {return undefined}
    else {
        return "Field is required!"
    }
};


export const MaxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {return `Max length if ${maxLength} symbols`}
    return undefined;
}