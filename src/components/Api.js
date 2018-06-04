import axios from 'axios'; 

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

export const loadUser = ()=> api.get('user');   
export const loadParestesco = ()=> api.get('parentescos'); 
export const sendUser = (newContact)=> api.post('user', newContact); 
export const loadUserById = (id) => api.get("user/"+id);
export const editUser = (user)=> api.put('user/'+user.id, user)
export const deleteUser = (id)=>  api.delete("user/"+id);
export const ediConctact = (newContact) => api.put('user/'+newContact.id, newContact);

const apis = {
    loadUser,  
    sendUser,
    editUser,
    loadUserById,
    loadParestesco,
    deleteUser
}

export default apis;