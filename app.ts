import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors"
import router from "./src/router";

const app: Express = express();
app.use(express.json({ limit: '50mb' }));
const port =  4000;

app.use(router);
app.use(cors({
  allowedHeaders: ['Content-Type']
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'src')));

console.log(path.join(__dirname, 'src/views'))

app.get("/", (req: Request, res: Response) => {
  res.status(200).render('base')
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});