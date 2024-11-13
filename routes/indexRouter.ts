import { Request, Response, Router } from "express";

const indexRouter: Router = Router();

type Message = {
  text: String;
  user: String;
  added: Date;
};

const messages: Message[] = [
  { text: "Hi there", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

indexRouter.get('/', (req: Request, res: Response) => {
  res.render('index', { messages: messages})
})

export default indexRouter;
