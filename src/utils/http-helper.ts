import { IHttpResponse } from "../models/http-reponse-model-interface";


export const ok = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 200,
        body: data,
    };
};

export const created = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "successeful",
        },
    };
};

export const noContent = async (): Promise<IHttpResponse> => {
    return {
        statusCode: 204,
        body: null,
    };
};

export const badRequest = async (): Promise<IHttpResponse> => {
    return {
        statusCode: 400,
        body: null,
    };
};

export const unauthorized = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 401,
        body: data,
    };
};

export const forbidden = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 403,
        body: data,
    };
};

export const notFound = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 404,
        body: data,
    };
};

export const notAcceptable = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 406,
        body: data,
    };
};

export const conflict = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 409,
        body: data,
    };
};

export const gone = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 410,
        body: data,
    };
};

export const lengthRequired = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 411,
        body: data,
    };
};

export const preconditionFailed = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 412,
        body: data,
    };
};

export const tooMany = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 429,
        body: data,
    };
};

export const serverError = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 500,
        body: data,
    };
};

export const badGateway = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 502,
        body: data,
    };
};

export const serviceUnavailable = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 503,
        body: data,
    };
};

export const gatewayTimeout = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 504,
        body: data,
    };
};

export const httpVersionNotSupported = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 505,
        body: data,
    };
};

