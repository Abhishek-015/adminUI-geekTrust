import axios from "axios";

export const getAllUsers = async () =>
  await axios.get(`${process.env.GEEK_TRUST_API}`);
