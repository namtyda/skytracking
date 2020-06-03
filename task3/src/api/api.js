import axios from 'axios';

const instAxios = axios.create({
  baseURL: 'https://api.unsplash.com/',
  timeout: 5000,
  headers: {
    Authorization: 'Client-ID 25056273d6d0670ca497a640ff3816acbc342aafb43ddb9d2b9a2c63ad9d5d12'
  }
});

export const api = {
  getRandomPhoto() {
    return instAxios.get('photos/random')
      .then(res => res)
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}