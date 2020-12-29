import axios from 'axios';

class CategoryAPI {
    static getAllCategories() {
        return axios.get('http://localhost:3000/api/v1/categories').then( response => {
            return response.data;
        }).catch(error => {return error;});
    }
}

export default CategoryAPI;