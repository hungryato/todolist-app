import express, {Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    created_at: Date;
}

app.get('/tasks', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.json(result.rows as Task[]);
    } catch (error) {
        res.status(500).json({error: 'Database error'});
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});