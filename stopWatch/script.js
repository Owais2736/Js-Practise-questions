
var interval;
var hour = "00";
var min = "00";
var sec = "00";
function handleClick() {
    let count = 0
    let minn = 1
    let hourr = 1
    clearInterval(interval)
    interval = setInterval(() => {
        document.querySelector(".sec").innerHTML = count++
        if (count <= 9) {
            document.querySelector(".sec").innerHTML = "0" + count
        }
        if (count > 9) {
            document.querySelector(".sec").innerHTML = count
        }

        if (count >= 59) {
            count = 1

            if (minn <= 9) {
                document.querySelector(".minutes").innerHTML = "0" + minn++
            }
            else {
                document.querySelector(".minutes").innerHTML = minn++
            }

        }


        if (minn >= 59) {
            minn = 1

            if (hourr <= 9) {
                document.querySelector(".minutes").innerHTML = "0" + hourr++
            }
            else {
                document.querySelector(".minutes").innerHTML = hourr++
            }

        }



    }, 1000)
}





function handleStop() {
    clearInterval(interval)

}


function handleClear() {

    document.querySelector(".hours").innerHTML = hour
    document.querySelector(".minutes").innerHTML = min
    document.querySelector(".sec").innerHTML = sec
    clearInterval(interval)
}