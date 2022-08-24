// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

/**
 * 데이터 타입 정의
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} street
 */

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {{lat: string, lng: string}} geo
 * @property {string} street
 * @property {string} suite
 * @property {string} zipcode
 */

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerHTML = user.name;
      email.innerHTML = user.email;
      address.innerHTML = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
