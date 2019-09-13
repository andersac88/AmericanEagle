let expand = document.getElementsByClassName('plus');
for (let i = 0; i < expand.length; i++) {
    expand[i].addEventListener("click", clickFunction)
}

document.getElementById("collapse").addEventListener("click", collapseButton)

function clickFunction(i) {
    let value = i.target.dataset.value;
    if (value === '1') {
        if (document.getElementById("about").style.display === 'block'){
            document.getElementById("about").style.display = "none";
        } else {
            document.getElementById("about").style.display = "block";
        }
    } else if (value === '2') {
        if (document.getElementById("service").style.display === 'block'){
            document.getElementById("service").style.display = "none";
        } else {
            document.getElementById("service").style.display = "block";
        }
    } else if (value === '3') {
        if (document.getElementById("shop").style.display === 'block'){
            document.getElementById("shop").style.display = "none";
        } else {
            document.getElementById("shop").style.display = "block";
        }
    }
}

function collapseButton(i) {
    if (document.getElementById("header-bottom").style.display === 'block') {
        console.log('ping')
        document.getElementById("header-bottom").style.display = "none";
    } else {
        document.getElementById("header-bottom").style.display = "block";
        console.log('pong')
    }
}

function slideShow() {
    if (document.getElementById("slide1").style.display === 'block') {
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide2").style.display = "block";
    } else {
        document.getElementById("slide1").style.display = "block";
        document.getElementById("slide2").style.display = "none";
    }
    setTimeout(slideShow, 5000);
}

slideShow();
