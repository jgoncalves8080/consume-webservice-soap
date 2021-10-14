import { Request, Response } from "express";
import soap from "soap";
import { baseUrl, args } from "../../../services/";
import { IUser } from "../UserInterface/IUser";

class UserController {
    async index(req: Request, res: Response) {
        soap.createClient(baseUrl, (err: any, client: any) => {
            if (err) return console.log(err);
            client.ConsultarPaciente(args, (err: any, result: IUser) => {
                if (err) return console.log(err);
                res.json({
                    data: result,
                });
            });
        });
    }
}

export default new UserController();
