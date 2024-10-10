import express from 'express';
import {
  //changeIsMemberStatus,
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
  
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);

//router.put('/upgrade/:userId', changeIsMemberStatus);
router.post('/sign-out', signout);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);


export default router;