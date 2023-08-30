const inputs = document.querySelectorAll(".input");

function addclass() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remclass(params) {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addclass);
    input.addEventListener("blur", remclass);
});

// Toggle password

function showPassword(params) {
    var password = document.getElementById('password');
    var eyeicon = document.querySelector('.fa-eye');

    if (password.type === "password") {
        password.type = "text";
        eyeicon.style.color = "#232ae7";
    } else {
        password.type = "password";
        eyeicon.style.color = "#d9dde4";
    }
}
