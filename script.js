const historyList = document.getElementById("history");

function convertTemp() {

    let temp = parseFloat(
        document.getElementById("temperature").value
    );

    let from =
        document.getElementById("fromUnit").value;

    let to =
        document.getElementById("toUnit").value;

    let result;

    if (isNaN(temp)) {
        alert("Please enter valid temperature");
        return;
    }

    if (from === to) {
        result = temp;
    }

    else if (from === "C") {
        if (to === "F")
            result = (temp * 9 / 5) + 32;
        else
            result = temp + 273.15;
    }

    else if (from === "F") {
        if (to === "C")
            result = (temp - 32) * 5 / 9;
        else
            result = ((temp - 32) * 5 / 9) + 273.15;
    }

    else if (from === "K") {
        if (to === "C")
            result = temp - 273.15;
        else
            result = ((temp - 273.15) * 9 / 5) + 32;
    }

    result = result.toFixed(2);

    const output =
        `${temp}°${from} = ${result}°${to}`;

    document.getElementById("result")
        .innerHTML = output;

    let li = document.createElement("li");
    li.textContent = output;
    historyList.prepend(li);
}

function copyResult() {

    let text =
        document.getElementById("result").innerText;

    navigator.clipboard.writeText(text);

    alert("Result copied!");
}

document
.getElementById("themeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light"))
        themeBtn.innerText="☀";
    else
        themeBtn.innerText="🌙";
});