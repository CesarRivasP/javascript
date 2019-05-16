// Promises con Ajax
const downloadUsers = (cant) => new Promise((resolve, reject) => {
  console.log(cant);
  // Pasar la cantidad a la api
  const api = `https://www.randomuser.me/api/?results=${cant}&nat=us`;

  // Llamado ajax
  const xhr = new XMLHttpRequest();

  // abrir la conexion
  xhr.open('GET', api, true);

  xhr.setRequestHeader("content-type", "application/json");

  // on load
  xhr.onload = () => { //aqui se realiza la respuesta
    if(xhr.status === 200){ //results forma parte de lo que viene en el json
      // resolve(JSON.parse(xhr.responseText).results); // responseText es la respuesta
      resolve(JSON.parse(xhr.responseText).results); // responseText es la respuesta
      //con JSON.parse se convierte de un string a un objeto de JS
    }
    else if(xhr.status === 204){ //results forma parte de lo que viene en el json
      // resolve(JSON.parse(xhr.responseText).results); // responseText es la respuesta
      resolve(JSON.parse(xhr.responseText).results); // responseText es la respuesta
      //con JSON.parse se convierte de un string a un objeto de JS
    }
    else { // statusText va a traer el resultado cuando sea incorrecto
      reject(Error(xhr.statusText))
    }
  }




  xhr.onerror = () => reject(Error("Network Error"));


  // con send se envia el request a la DB
  xhr.send()
})

// console.log(downloadUsers(15));
downloadUsers(15)
  .then(
    // (results) => console.log(results),
    (members) => pressHTML(members),
    (error) => console.error(
        new Error('Hubo un error', error)
    )
  )

const pressHTML = (users) => {
  let html = ';'
  users.forEach((user) => {
    console.log(user);
    html += `<li>
               name: ${user.name.first} ${user.name.last}
               contry: ${user.nat}
               image:
                  <img src="${user.picture.medium}" alt="" />
             </li>`
  })
  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = html;
}
