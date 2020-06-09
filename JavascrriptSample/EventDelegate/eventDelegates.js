document.querySelector("#parent").addEventListener('keyup', (e) => {
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
    if (e.target.dataset.multicolor != undefined) {

        e.target.style.backgroundColor = e.target.value.length > 0 ? "yellow" : "green";
    }
});



document.addEventListener('keyup', (e) => {
    debugger;
    if (e.target.dataset.removeasterisk != undefined && e.target.value.indexOf("*") != -1 && e.target.value != "") {
        alert("* not Allowed")
        e.target.value = e.target.value.toString().replace("*", "").trim();
        e.stopPropagation();
    }
});


