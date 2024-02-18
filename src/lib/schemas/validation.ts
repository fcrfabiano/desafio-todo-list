import z from "zod";

const todo = z.object({
  todo: z
    .string()
    .min(1, { message: "O nome da tarefa é obrigatório" }),
});

export { todo };
