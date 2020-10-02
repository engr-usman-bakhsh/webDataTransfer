class Github{
  constructor () {
    this.client_id = '5af8a4de99e432fe1512';
    this.client_secret = 'e1df3c88157d0946da88afc504298f42d9fe49a5';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
    
  }
}