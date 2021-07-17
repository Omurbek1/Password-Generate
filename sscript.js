const empty = ""
const uCase = "W,Y,A, E, I, O, U,B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Z, "
const lCase = "w,y,a, e, i, o, u,b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, z, "
const number = "0123456789";
const symbol = "!@#$%^&*()?~";

const plength = document.getElementById("p-length")
const upperCase = document.getElementById("p-uppercase")
const loverCase = document.getElementById("p-lowercase")
const pNumber = document.getElementById("p-number")
const psymbol = document.getElementById("p-symbol")
const submit = document.getElementById("submit")
const password = document.getElementById("password")


submit.addEventListener('click', () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += uCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (psymbol.checked) ? initialPassword += symbol : "";
    (loverCase.checked) ? initialPassword += lCase : "";


    password.value = generatePassword(plength.value,
        initialPassword)

});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * 
        initialPassword.length));

    }
    return pass;
}



// Copy password

const copy=document.getElementById('copy');
copy.addEventListener("click",()=>{
    if(password.value===""){
        alert("Password generate a password")

    }else{
        password.select();
        document.execCommand('copy');
        alert("Password has been copied to clipboard ")
    }
})