// import express from 'express';
// import {getUsers, deleteUserById, getStatistics} from '../controllers/userController';
// import { authMiddleware, managerAuthMiddleware } from '../middleware/authMiddleware';;
// import { errorHandler } from '../utils/errorHandler';

// const router = express.Router();

// /**
//  * @swagger
//  * /users:
//  *  get:
//  *    summary: קבלת כל המשתמשים
//  *    description: תחזיר רשימה של כל המשתמשים. זמין רק למנהלים
//  *    security:
//  *      -cookieAuth: []
//  *    responses:
//  *      200:
//  *         description: רשימת משתמשים הוחזרה בהצלחה
//  *      401:
//  *         description: לא מורשה, נדרשת התחברות
//  *      403: 
//  *         description: נדרשת הרשאת מנהל
//  */
// router.get("/", authMiddleware, managerAuthMiddleware, errorHandler(getUsers));


// /**
//  * @swagger
//  * /users/{id}:
//  *  delete:
//  *    summary: delete user by id
//  *    description: only managers can delete users
//  *    security:
//  *      -cookieAuth: []
//  *    parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        schema:
//  *          type: string
//  *    responses:
//  *      200:
//  *         description: רשימת משתמשים הוחזרה בהצלחה
//  *      401:
//  *         description: לא מורשה, נדרשת התחברות
//  *      403: 
//  *         description: נדרשת הרשאת מנהל
//  */
// router.delete("/:id", authMiddleware, managerAuthMiddleware, errorHandler(deleteUserById))
// /**
//  * @swagger
//  * /users/:
//  *  gety:
//  *    summary: get statistic 
//  *    description: מחזיר את המשתמש עם השכר הגבוה ביותר,   הממוצע של השכר  ,בדיקת איחורים
//  *    security:
//  *      -cookieAuth: []
//  *    responses:
//  *      200:
//  *         description: סטטיסטיקה הוחזרה בהצלחה
//  *      401:
//  *         description: לא מורשה, נדרשת התחברות
//  *      403: 
//  *         description: נדרשת הרשאת מנהל
//  */
// router.get('/statistics', authMiddleware, managerAuthMiddleware, getStatistics)


// export default router;