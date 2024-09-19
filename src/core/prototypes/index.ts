export * from "./clarity";


declare global {
    interface Window {
        clarity: any;
    }
}

export const startPrototypes = () => {
    // Não retirar esta função daqui, pois é necessário inicializar este arquivo
    if (process.env.REACT_APP_DEBUG === "true") console.log("Start nos prototypes");
};