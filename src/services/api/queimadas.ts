import axios, { AxiosResponse } from "axios";

const queimadas = async (): Promise<AxiosResponse> => {
    return await axios.post(`${process.env.REACT_APP_URL}/queimadas`);
};

export const ApiQueimadas = {
    queimadas: queimadas,
};