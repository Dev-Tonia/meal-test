import axios from "axios";
import authHeader from "./authHeader";

class AuthService {
  async login(user: IUserLogin) {
    const config = useRuntimeConfig();
    try {
      const response = await axios.post(config.public.baseURL + "/login", {
        email: user.email,
        password: user.password,
      });
      console.log(response);
      return response;
    } catch (error) {}
  }
  async getUser() {
    const config = useRuntimeConfig();

    try {
      const response = await axios.get(
        config.public.baseURL + "/account/profile",
        {
          headers: authHeader(),
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new AuthService();
