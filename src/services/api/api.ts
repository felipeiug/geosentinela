import axios, { AxiosResponse } from "axios";
import { ApiQueimadas } from "./queimadas";

//Request genérica
const getData = async (path: string): Promise<AxiosResponse> => {
    return await axios.post(`${process.env.REACT_APP_URL}/${path}`);
};

// Dados da API
export function getApiSchema(): ApiSchema {
    return {
        queimadas: ApiQueimadas,
        getData: getData,
    };
}

// Schemas
export interface ApiSchema {
    getData: typeof getData;
    queimadas: typeof ApiQueimadas;
}