import express from 'express';
import cors from 'cors';
import userRoutes from './api/routes/user.routes';
import authRoutes from './api/routes/auth.routes';
import database from './api/config/database.config';


const main = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    //TODO: .env file
    const PORT = 3000;

    database.connect();

    app.use('/api/v0', userRoutes);
    app.use('/api/v0', authRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();
