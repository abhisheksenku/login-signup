document.addEventListener('DOMContentLoaded', async function () {
    const signUPForm = document.getElementById('signup_form');

    try {
        const response = await axios.get('http://localhost:3000/user/fetch');
        console.log('Fetched users:', response.data);
    } catch (error) {
        console.log('Error while fetching users:', error);
    }

    signUPForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(signUPForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        try {
            const response = await axios.post('http://localhost:3000/user/add', data);
            console.log('User added:', response.data);
            signUPForm.reset();
        } catch (error) {
            console.log('Error while adding the data:', error);
        }
    });
});
