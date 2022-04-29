const url = 'http://localhost:5500/api'

//GET
function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

// GET com parametros
function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userID.textContent = response.data.id
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

//POST
function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//PUT
function updateUser(id, upUser) {
  axios
    .put(`${url}/${id}`, upUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//DELETE
function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Bruno',
  avatar: 'https://picsum.photos/200/300',
  city: 'SLS'
}

const upUser = {
  name: 'Rafa',
  avatar: 'https://picsum.photos/200/300',
  city: 'Rs'
}

updateUser(1, upUser)
deleteUser(5)
getUsers()
getUser(2)
//addNewUser(newUser)
