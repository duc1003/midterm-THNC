import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/user.controller.js';

const route = express.Router();

route.get('/', getAllUsers);
route.get('/:id', getUserById);
route.post('/', createUser);
route.delete('/:id', deleteUser);
route.put('/:id', updateUser);

export default route;