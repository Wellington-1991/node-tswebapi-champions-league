import { Request, Response } from "express"
import * as service from "../services/players-service";
import { IStatisticsModel } from "../models/statistics-model-interface";


export const getPlayer = async (req: Request, resp: Response) => {

    const httpResponse = await service.getPlayerService();

    resp.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, resp: Response) => {

    const playerId = parseInt(req.params.id);
    const httpResponse = await service.getPlayerByIdService(playerId);

    resp.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, resp: Response) => {

    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);

    if (httpResponse) {
        resp.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const deletePlayerByID = async (req: Request, resp: Response) => {

    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);

    resp.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, resp: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: IStatisticsModel = req.body;

    const httpResponse = await service.updatePlayerService(id, bodyValue);

    resp.status(httpResponse.statusCode).json(httpResponse.body);
}
