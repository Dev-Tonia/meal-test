export default function authHeader() {
  const token = useCookie('token')?.value;

  if (token) {
    return { Authorization: `Bearer ${token} ` };
  } else {
    return { Authorization: '' };
  }
}