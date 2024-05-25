// script.js

// Kullanıcıyı giriş yapmaya yönlendirir
function loginUser(username, password) {
    // Kullanıcı adı ve şifre kontrolü yapılabilir
    // Örnek olarak sadece konsola log yazdırıyoruz
    console.log('Kullanıcı adı:', username);
    console.log('Şifre:', password);
}

// Formun submit olayını dinler ve kullanıcıyı giriş yapmaya yönlendirir
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginUser(username, password);
});
