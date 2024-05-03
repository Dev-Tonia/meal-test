export default function authHeader() {
  const token = useCookie('userToken')?.value;
  console.log("🚀 ~ authHeader ~ token:", token)

  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
}