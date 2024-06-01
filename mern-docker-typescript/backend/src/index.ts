import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
app.get("/joke", async (req: Request, res: Response) => {
  const response = await fetch(`https://official-joke-api.appspot.com/random_joke`,{
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  res.json(data);
});
app.listen(3000, () => console.log("server started"));
