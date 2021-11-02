// import axios from 'axios';

// function addUser(nombre, password, email){
//     axios.post()

// }

// export default addUser;
import axios from 'axios';

function addUser(nombre,password,email){
axios({
    method: 'post',
    url: 'http://127.0.0.1:8081/procesarPost',
    data: {
        nombre: nombre,
        password: password, 
        email: email,
    }
  });
}
export default addUser;