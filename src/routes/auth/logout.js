// import { serialize } from 'cookie';

export async function LOGOUT({cookies}) {
  cookies.delete("token")
}
