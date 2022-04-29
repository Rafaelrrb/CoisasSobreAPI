const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    .then(response => response.json()) // define que recebe um JSON
    .then(data => (renderApiResult.textContent = JSON.stringify(data))) // cconverte pra um formato JSON que e lindo pelo html
    .catch(error => console.error(error))
}

// GET com parametros
function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json()) // define que recebe um JSON
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    }) // cconverte pra um formato JSON que e lindo pelo html
    .catch(error => console.error(error))
}

//PUT
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error))
}

//POST
function addUser(newUser) {
  fetch(url, {
    method: 'POST', // define o tipo pra POST
    body: JSON.stringify(newUser), // passa convetrndo o objeto em JSON
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error))
}

//DELETE
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Luiz',
  avatar: 'https://picsum.photos/400/200',
  city: 'RS'
}

const updatedUser = {
  name: 'Rafael Borba',
  avatar: 'https://picsum.photos/400/200',
  city: 'RS'
}
//addUser(newUser)

//updateUser(updatedUser, 1)
deleteUser(2)
getUsers()
getUser()
