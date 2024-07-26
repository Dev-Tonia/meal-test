import axios from "axios";
import authHeader from "./authHeader";

class AuthService {

  async login(user: IUserLogin) {
    const config = useRuntimeConfig()
    try {

      const response = await axios
        .post(config.public.baseURL + '/login', {
          email: user.email,
          password: user.password
        });

      return response

    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message || 'Invalid credentials';
        return {
          success: false,
          message: errorMessage
        }
      }
      throw error;
    }
  }
  async getUser() {
    const config = useRuntimeConfig()

    try {
      const response = await axios.get(config.public.baseURL + '/account/profile', {
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
