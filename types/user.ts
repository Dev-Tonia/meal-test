export interface UserPayloadInterface {
  email: string;
  password: string;
}

interface IUserRegister {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  password: string;
}

export interface ISelectedAdminUser {
  user_id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}
interface IUser {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email_verification_status: string;
  role: string;
  dob: string | null; // Assuming date of birth is a string or null
  gender: string | null; // Assuming gender is a string or null
  phone: string | null; // Assuming phone number is a string or null
  photo: string | null; // Assuming photo is a string or null
  state: {
    id: number;
    name: string;
  };
  lga: {
    id: number;
    name: string;
  };
  profile: {
    user_id: string;
  };
}

export interface AdminProfileInterface {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email_verification_status: boolean;
  role: string;
  dob: string | null;
  gender: string | null;
  phone: string | null;
  photo: string;
  longitude: number | null;
  latitude: number | null;
  address: string | null;
  is_online: string;
  state: string | null;
  lga: string | null;
  bank: string | null;
  profile: {
    user_id: string;
  };
}
