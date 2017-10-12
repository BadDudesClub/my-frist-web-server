
function go(a, b) {
    return (a + b).toString()
}

function provideValue(a, b) {
    return (a * b).toString()
}

function synergize(a){
    var result = 1
    
    if(a instanceof Array)
    {
        a.forEach(function(element) 
        {
            result *= element
        })
    } else {
        result = a
    }
    return result.toString()
}

module.exports = {
    'go': go,
    'provideValue': provideValue,
    'synergize': synergize
}


