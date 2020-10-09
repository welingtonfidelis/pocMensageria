import axios from 'axios';
import { useSelector } from 'react-redux';

export default {
    client() {
        const { token, baseURLClient } = useSelector(state => state);

        return axios.create({
            baseURL: baseURLClient,
            headers: { Authorization: token }
        });
    },
    message() {
        const { token, baseURLMessage } = useSelector(state => state);

        return axios.create({
            baseURL: baseURLMessage,
            headers: { Authorization: token }
        });
    },
    messageExternal() {
        const { token, baseURLMessageExternal } = useSelector(state => state);

        return axios.create({
            baseURL: baseURLMessageExternal,
            headers: { Authorization: token }
        });
    },
}