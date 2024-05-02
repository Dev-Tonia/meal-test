import axios from "axios";
import authHeader from "./authHeader";

const API_URL = 'https://api.mealtrips.com/api';

class AuthService {
  async login(user: IUserLogin) {
    try {

      const response = await axios
        .post(API_URL + '/login', {
          email: user.email,
          password: user.password
        });

      return response

    } catch (error) {
      console.log(error);
      throw error
    }
  }
  async getUser() {
    try {
      const response = await axios.get(API_URL + '/account/profile', {
        headers: authHeader()
      });
      return response
    } catch (error) {
      console.log(error);
      throw error
    }
  }
  //   register(user: IUserRegister) {
  //     try {
  //       return axios.post(API_URL + 'signup', {
  //         firstname: user.firstname,
  //         lastname: user.lastname,
  //         email: user.email,
  //         role: user.role,
  //         password: user.password
  //       })
  //     } catch (error) {
  //       throw error;
  //     };
  //   }
}

export default new AuthService();

