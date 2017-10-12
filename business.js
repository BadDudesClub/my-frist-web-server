
function go(a, b) {
    return (a + b).toString()
}

function provideValue(a, b) {
    return (a * b).toString()
}

module.exports = {
    'go': go,
    'provideValue': provideValue
}
