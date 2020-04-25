// Init Github object
const github = new Github();
// Init UI object
const ui = new UI();
// Search Input
const searchUser = document.getElementById('searchUser');

// Add Event Listener

searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if(userText !== ''){
        //Send request to github
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    // Show Profile
                    ui.showProfile(data.profile)
                    // Show Repos
                    ui.showRepos(data.repo)
                }
            });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})