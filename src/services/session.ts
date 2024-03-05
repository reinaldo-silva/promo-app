import { api } from "@services/index";

export async function signIn(): Promise<any> {
  const res = await api.get("/users/1");

  return res.data;
}
