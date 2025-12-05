import axios from 'axios';
export default axios.create(
    {
        baseURL:'https://avengeful-semiphilosophically-hilary.ngrok-free.dev',
        headers: {"ngrok-skip-browser-warning": "true"}
    }
);