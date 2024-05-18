document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://khmer-shoping.onrender.com'; // Add your API base URL here

    const getUsersButton = document.getElementById('getUsersButton');
    const getUserForm = document.getElementById('getUserForm');
    const updateUserForm = document.getElementById('updateUserForm');
    const deleteUserForm = document.getElementById('deleteUserForm');

    getUsersButton.addEventListener('click', async function() {
        try {
            const response = await fetch(apiUrl + '/users', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer your_token_here' // Add your authorization token here
                }
            });
            const data = await response.json();
            console.log(data);
            // Display users data in the UI (optional)
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    });

    getUserForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const userId = document.getElementById('userId').value;

        try {
            const response = await fetch(apiUrl + '/users/' + userId, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer your_token_here' // Add your authorization token here
                }
            });
            const data = await response.json();
            console.log(data);
            // Display user data in the UI (optional)
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    });

    updateUserForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const userId = document.getElementById('updateUserId').value;
        const newUsername = document.getElementById('updateUsername').value;
        const newEmail = document.getElementById('updateEmail').value;

        const requestBody = {};
        if (newUsername) requestBody.username = newUsername;
        if (newEmail) requestBody.email = newEmail;

        try {
            const response = await fetch(apiUrl + '/users/' + userId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer your_token_here' // Add your authorization token here
                },
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    });

    deleteUserForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const userId = document.getElementById('deleteUserId').value;

        try {
            const response = await fetch(apiUrl + '/users/' + userId, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer your_token_here' // Add your authorization token here
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    });
});
