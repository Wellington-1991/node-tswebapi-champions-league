import { IPlayerModel } from "../models/player-model-interface";
import * as playersRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";
import { IStatisticsModel } from "../models/statistics-model-interface";
import { MessageHttp } from "../utils/messages-http-response/messages-http";


export const getPlayerService = async () => {

    const data = await playersRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
}

export const createPlayerService = async (player: IPlayerModel) => {

    let response = null;

    if (Object.keys(player).length !== 0) {
        response = await playersRepository.insertPlayer(player);
        response = await httpResponse.created(response);
    } else {
        response = await httpResponse.badRequest();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {

    const data = await playersRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
}

export const deletePlayerService = async (id: number) => {

    let response = null;
    const isDeleted = await playersRepository.deleteOnePlayer(id);

    if (isDeleted) {
        response = await httpResponse.ok(MessageHttp.SUCCESS.DELETED);
    } else {
        response = await httpResponse.badRequest();
    }

    return response;
}

export const updatePlayerService = async (id: number, statistics: IStatisticsModel) => {

    let response = null;

    const data = await playersRepository.findAndModifyPlayer(id, statistics);

    if (Object.keys(data).length === 0) {
        response = await httpResponse.badRequest();

    } else {
        response = await httpResponse.ok(data);
    }

    return response;
}
