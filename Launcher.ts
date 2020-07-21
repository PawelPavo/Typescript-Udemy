import { Server } from './Server';

class Launher {
    //instance variables
    private name: string;
    private server: Server;
    constructor() {
        this.server = new Server();
    }

    public launchApp() {
        console.log('started app');
        this.server.createServer();
    }
}

new Launher().launchApp();