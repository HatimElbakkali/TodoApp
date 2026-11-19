import { useEffect, useState } from "react";
import Api from "../../Api/Todo.ts";
import {Link} from 'react-router-dom'

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await Api.getAll();
      setTodo(data);
    })();
  }, []);

  const deleteCallbak = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id: string = e.currentTarget.dataset.id!;
    await Api.delete(id);
    setTodo((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-purple-800">Todo List</h1>
        <p className="mt-2 text-gray-500">Manage your tasks easily.</p>
      </div>

      {/* Todo Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-purple-800 text-white">
            <tr>
              <th className="px-6 py-4">#ID</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Completed</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {todos.map((todo) => (
              <tr
                key={todo.id}
                className="transition-colors hover:bg-purple-50"
              >
                <td className="px-6 py-5 font-medium text-gray-500">
                  {todo.id}
                </td>

                <td className="px-6 py-5 font-medium text-gray-800">
                  {todo.title}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      todo.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <Link className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-800" to={`/todo/${todo.id}/update`}>Update</Link>

                    <button
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                      onClick={deleteCallbak}
                      data-id={todo.id}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {todos.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No todos found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
