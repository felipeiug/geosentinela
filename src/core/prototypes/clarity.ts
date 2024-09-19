import { generateRandomHash } from "../core";
import { Cryper } from "../cryper";

// Eventos do observatório
export const observatorioButtonOpenOutrasAreas = "observatorio/ver_outras_áreas";

// Eventos da landing page
export const landingSendForm = "landing/send_form";
export const landingSendFormError = "landing/send_form_error";

interface ClaritySessionResponse {
    id: string;
    session?: string;
    page?: string;
    userHint: string;
}

export const setClaritySesion = async (emailOrId?: string): Promise<ClaritySessionResponse | undefined> => {
    let userId = emailOrId;

    if (!userId) {
        const clarityId = localStorage.getItem("clarityId");
        if (clarityId) {
            userId = Cryper.decrypt(clarityId);

        } else {
            userId = generateRandomHash(10);
            const encriptedId = Cryper.encrypt(userId);
            localStorage.setItem("clarityId", encriptedId);
        }
    }


    const clarityData = await window.clarity("identify", userId);
    return clarityData;
};