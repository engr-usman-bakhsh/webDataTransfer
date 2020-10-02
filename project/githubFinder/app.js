// instantiate github
const gitHub = new Github;
// new ui
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// search Input Event Listner
searchUser.addEventListener('keyup',(e) => {
  const userText = e.target.value;
  if (userText !== ''){
    // console.log(userText);
    // make http call
    gitHub.getUser(userText)
    .then(data => {
      // console.log(data);
      if(data.profile.message === 'Not Found'){
        // Show Alert 
        setTimeout(
        ui.showAlert('User not found','alert'),2000);
        // Clear Profile
        ui.clearProfile();

      }else{
        // Show Profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    })
  }else {
    // clear profile
    ui.clearProfile();
  }
})