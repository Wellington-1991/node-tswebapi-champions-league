import * as IHttpResponse from "../utils/http-helper";
import * as clubsRepository from "../repositories/clubs-repository";


export const getClubService = async () => {

    const data = await clubsRepository.findAllClubs();
    let response = null;

    if (data.length === 0) {
        response = await IHttpResponse.noContent();
    } else {
        response = await IHttpResponse.ok(data);
    }

    return response;
}