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
      return response;
    } catch (error) {
      return error;
    }
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
      return error;
    }
  }
}

export default new AuthService();
