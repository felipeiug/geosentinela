import { ApiQueimadas } from "./queimadas";


// Dados da API
export function getApiSchema(): ApiSchema {
    return {
        queimadas: ApiQueimadas,
    };
}

// Schemas
export interface ApiSchema {
    queimadas: typeof ApiQueimadas;
}