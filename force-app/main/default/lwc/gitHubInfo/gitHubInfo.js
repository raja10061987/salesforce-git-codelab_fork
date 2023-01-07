import { LightningElement } from 'lwc';
const GITHUB_URL = 'https://api.github.com/users/';

export default class GitHubInfo extends LightningElement {
    user = {};
    userName;

    updateUserName(event)
    {
     this.userName = event.target.value;
    }

    get isUserInfoAvailable()
    {
        return this.user && this.user.id;
    }
    get gitHubUrl()
    {
        return 'https://github.com/' + this.userName;
    }






    getGithubUserInfo()
    {
        if(this.userName)
        {
          this.user = {};
          fetch(GITHUB_URL + this.userName)
          .then( (response) => {
              if(response.ok)
              {
                 return response.json();
              }
              else
              {
                throw error (response);
              }
          })
          .then((getHubUser) => {
                // console.log('gitHub User: ' + JSON.stringify(getHubUser));
                 this.user = {
                    id: getHubUser.id,
                    name: getHubUser.name,
                    image: getHubUser.avatar_url,
                    blog: getHubUser.blog,
                    about: getHubUser.bio,
                    repos: getHubUser.public_repos,
                    gists: getHubUser.public_gists,
                    followers: getHubUser.followers
                 }
                 console.log('my current usre: ' + JSON.stringify(this.user));
          })
          .catch( (error) => {
              console.log('error: ' + JSON.stringify(error));
          });
        }
        else
        {
            alert('please enter user Name');
        }
    }

}