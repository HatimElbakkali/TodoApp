import { useForm } from "react-hook-form";
import TodoModel from "../../modules/TodoModel";
import Api from "../../Api/Todo";
import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";

type TodoFormData = {
  title: string;
  completed: boolean;
};

function TodoForm({ isUpdate = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<TodoFormData>({
    mode: "onChange",
    defaultValues: async () => {
      if (isUpdate) {
        const response = await Api.get(params.id);
        return response;
      }
      return {};
    },
  });
  const params = useParams();
  const navigate = useNavigate();
  const submitForm = (data: TodoFormData) => {
    const todo = new TodoModel(data.title, data.completed);
    if (isUpdate) {
      const todo = new TodoModel(data.title, data.completed, data.id);
      Api.update({ ...todo, id: params.id }).then((response) => {
        navigate("/");
      });
    } else {
      Api.create(todo).then((response) => {
        navigate("/");

      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {isUpdate ? "Update" : "create"} Todo
      </h1>

      <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Title</label>

          <input
            type="text"
            {...register("title", {
              required: {
                value: true,
                message: "Required field",
              },
            })}
            placeholder="Enter todo title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {errors.title?.message && (
            <small className="text-red-500 text-sm">
              {errors.title.message}
            </small>
          )}
        </div>

        {/* Completed */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("completed")}
            className="w-4 h-4 accent-blue-600 cursor-pointer"
          />

          <label className="text-sm font-medium text-gray-700">Completed</label>
        </div>

        {/* Submit */}
        <button
          disabled={!isValid || !isDirty}
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isUpdate ? "Update" : "create"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
