import io from 'socket.io-client';

const socketUrl = 'http://localhost/';
const socket = io.connect(socketUrl);

export default socket;
