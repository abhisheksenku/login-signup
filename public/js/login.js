document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login_form');
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await axios.post('http://localhost:3000/user/login', data);
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:',error.message);
        }
    });
});
