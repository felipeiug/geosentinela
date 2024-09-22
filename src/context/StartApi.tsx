import axios from "axios";
import { mockData } from "../mock";


// Fução API
export const StartApi: React.FC<Props> = ({ children }) => {

    axios.interceptors.request.use(
        (config) => {
            // Dados mockados
            console.log(process.env.REACT_APP_URL);

            if (process.env.REACT_APP_URL === "mock") {
                const path = config.url?.replaceAll("mock/", "");
                let mockValue: any = undefined;
                path?.split("/").forEach((value) => {
                    if (!mockValue) mockValue = mockData[value];
                    else mockValue = mockValue[value];
                });

                console.log(mockValue);
                
                return {
                    ...config,
                    data: mockValue ?? {},
                };
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => response,
        async (error) => Promise.reject(error),
    );

    return (<>{children}</>);
};

type Props = {
    children?: React.ReactNode;
};