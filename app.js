// Search Input
const github = new Github();
const searchUser = document.getElementById('searchUser');

// Add Event Listener

searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if(userText !== ''){
        //Send request to github
        github.getUser(userText)
            .then(data => {
                console.log(data.profile.id)
            });
        
    } else {
        //
    }
})