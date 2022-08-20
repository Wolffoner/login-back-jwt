import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import userRoutes from './api/routes/user.routes';
import authRoutes from './api/routes/auth.routes';
import database from './api/config/database.config';

const main = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    database.connect(process.env.DATABASE || '');
    const PORT = process.env.PORT || 3000;

    app.use('/api/v0', userRoutes);
    app.use('/api/v0', authRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();
