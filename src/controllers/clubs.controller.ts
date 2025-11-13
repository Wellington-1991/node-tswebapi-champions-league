import { Request, Response } from "express";
import * as service from "../services/clubs-service";



export const getClubs = async (req: Request, resp: Response) => {
    const response = await service.getClubService();

    resp.status(response.statusCode).json(response.body);

}