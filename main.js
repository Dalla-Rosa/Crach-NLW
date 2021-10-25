const redeSociais = {
  github: 'Dalla-Rosa',
  youtube: 'youtube',
  facebook: 'facebook',
  twitter: 'twitter',
  instagram: 'instagram'
}

function changeredeSociais() {
  for (let li of linksSociais.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${redeSociais[social]}`
  }
}

changeredeSociais()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${redeSociais.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()