document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await axios.post('http://localhost:5000/user/login', data);
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:',error.message);
        }
    });
});