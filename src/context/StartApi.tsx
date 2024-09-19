import axios from "axios";


// Fução API
export const StartApi: React.FC<Props> = ({ children }) => {

    axios.interceptors.request.use(
        (config) => {
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