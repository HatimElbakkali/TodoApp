import customAxios from "./axios";

export default {
  get: async (id) => {
    const data = await customAxios.get(`/${id}`);
    return data.data;
  },
  getAll: async () => {
    const data = await customAxios.get("/");
    return data.data;
  },
  create: async (todo) => {
    const data = await customAxios.post("/", todo);
    return data;
  },
  update: async (todo) => {
    console.log(customAxios.defaults.baseURL);
    console.log(todo.id);

    const response = await customAxios.put(`/${todo.id}`, todo);

    return response.data;
  },
  delete: async (id) => {
    return await customAxios.delete(`/${id}`);
  },
};
