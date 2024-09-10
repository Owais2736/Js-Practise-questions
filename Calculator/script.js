
let result = document.querySelector(".result")

function handleClear() {
    result.innerHTML = ""
}

function handleNum(e) {
    result.innerHTML = result.innerHTML + e

}

function handleEqual() {
    try {
        
        result.innerHTML = eval(result.innerHTML);
    } catch (error) {
        result.innerHTML = "Error";
    }
}


