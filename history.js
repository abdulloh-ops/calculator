function showHistory() {
    var historyList = document.getElementById("historyList");

    var history = JSON.parse(localStorage.getItem("history")) || [];

    // Eski ma'lumotlarni tozalash
    historyList.innerHTML = "";

    if (history.length === 0) {
        historyList.innerHTML = "History empty";
        return;
    }

    history.forEach(function(item) {
        var p = document.createElement("p");

        var historyText = item
            .replace(/\*/g, "×")
            .replace(/\//g, "÷");

        p.textContent = historyText;

        historyList.appendChild(p);
    });
}


function clearHistory() {
    localStorage.removeItem("history");
    showHistory();
}


function goBack() {
    window.location.href = "index.html";
}


showHistory();