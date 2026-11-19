import customAxios from "./axios";
import TodoModel from "../modules/TodoModel";

export default {
  get: async (id: string): Promise<TodoModel> => {
    const response = await customAxios.get<TodoModel>(`/${id}`);
    return response.data;
  },

  getAll: async (): Promise<TodoModel[]> => {
    const response = await customAxios.get<TodoModel[]>("/");
    return response.data;
  },

  create: async (todo: TodoModel): Promise<TodoModel> => {
    const response = await customAxios.post<TodoModel>("/", todo);
    return response.data;
  },

  update: async (todo: TodoModel): Promise<TodoModel> => {
    const response = await customAxios.put<TodoModel>(`/${todo.id}`, todo);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await customAxios.delete(`/${id}`);
  },
};