import { Request, Response } from "express";
import { IncomingHttpHeaders } from 'http'

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

declare module 'http' {
  interface IncomingHttpHeaders {
    user_id: string
  }
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id }: IncomingHttpHeaders = request.headers;


    const listAll = this.listAllUsersUseCase.execute({ user_id })

    return response.json({ users: listAll })
  }
}

export { ListAllUsersController };
