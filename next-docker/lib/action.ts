"use server";

import dbConnect from "./database/connect";
import Task from "./database/task.model";

export async function getTasks() {
  await dbConnect();

  try {
    const tasks = await Task.find({});
    return tasks;
  } catch (err) {
    console.log(err);
  }
}

export async function createTask(params: {
  title: string;
  description: string;
  status: string;
}) {
  await dbConnect();

  const { title, description, status } = params;

  try {
    const newTask = await Task.create({ title, description, status });
    return newTask;
  } catch (err) {
    console.log(err);
  }
}
