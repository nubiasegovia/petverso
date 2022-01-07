import axios from 'axios';

// Definindo a base do url para os endpoints
const apiUrl = "localhost:3000";
// https://petverso-api.herokuapp.com
// // Definindo o bjeto do serviço
// const authService = {

//     // Definindo a função de login
//     async authenticate(data) {
//         const endpoint = `${apiUrl}/auth/login`
//         return axios.post(endpoint, data);
//     },
//     // Função para setar o usuário logado no local storage
//     setLoggedUser(data){
//         let parsedData = JSON.stringify(data)
//         localStorage.setItem("user", parsedData)
//     },

//     // Função responsável por recuperar o usuário logado do local storage
//     getLoggedUser(){
//         let data = localStorage.getItem("user");
//         if(!data) return null;
//         try {
//             let parsedData = JSON.parse(data)
//             return parsedData
//         } catch (error) {
//             console.log(error)
//             return null
//         }
//     },

//     createUser(){
//         const endpoint = `${apiUrl}/user/registrar`
//             return axios.post(endpoint, data);
       
//     }
// }

export default apiUrl;