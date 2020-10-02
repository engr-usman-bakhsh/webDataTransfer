class UI{
  constructor(){
    this.profile =  document.getElementById('profile')
    this.latestRepos = document.querySelector('table')
  }
  // display profile in UI
  showProfile(user){
    this.profile.innerHTML = 
    `
    <div id="public-repos">
    <li>Public Repos : ${user.public_repos}</li>
    <li>Public Gists : ${user.public_gists}</li>
    <li>Followers : ${user.followers}</li>
    <li>Following : ${user.following}</li>
  </div>
  <br><br>
  <div class="image personal-data">
    <img src=${user.avatar_url} alt="Profile" width="200px" height="200px" id="profilePic">
  </div>
  <div class="personal-data">
    <li>Company : ${user.company}</li>
    <li>Website/blog : ${user.blog}</li>
    <li>Location : ${user.location}</li>
    <li>Members Since : ${user.created_at}</li>
  </div>
  <div id="button">
    <a id="view-profile" href="${user.html_url}" target="_blank">View Profile</a>
  </div>
  <br><br>
<h1 id="repos">Latest Repos</h1>
    `
  }
  // Show users Repos
  showRepos(repos){
    let output='';
    repos.forEach(function(repo){
      output += `
          <tr>
            <td><a href="${repo.html_url}" target = "_blank" >${repo.name}</a></td>
            <td>Stars: ${repo.stargazers_count}</td>
            <td>Watchers: ${repo.watchers_count}</td>
            <td>Forks: ${repo.forks_count}</td>
          </tr>
      `
    });
    // Output repository
    document.querySelector('table').innerHTML = output;
  }

  showAlert(msg,id){
    // clear any alert
    this.clearAlert()
    
    // Create div
    const div = document.createElement('div');
    // Add ID
    div.id = id;
    // Add Text
    div.appendChild(document.createTextNode(msg));
    // get Parrent to insert the div in the UI
    const alert = document.querySelector('.alert');
    // insert
    alert.appendChild(div);
    // clear alert after 3 second
    setTimeout(() => {
      this.clearAlert();
    },2000)
  }
  // clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('#alert');
    if(currentAlert){
      currentAlert.remove()
    }
  }

  // clear profile
  clearProfile(){
    this.profile.innerHTML = '';
    this.latestRepos.innerHTML = '';

  }
}