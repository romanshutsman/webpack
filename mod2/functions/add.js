function add(a, b) {
    return a + b;
}

function addAdMultiply(a, b, c) {
    return (a + b) * c;
}

module.exports = {
    add,
    addAndMultiply: addAdMultiply
};