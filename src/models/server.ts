import express from 'express';
import routesPersona from '../routes/persona.route';
import connection from '../db/connection';
import cors from 'cors';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
    routes() {
        this.app.use('/api/personas', routesPersona);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    conectarDB() {
        connection.connect((err) => {
            if (err) throw err;
            console.log('Connected to database');
        });
    }

}
export default Server;