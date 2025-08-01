import { Router } from 'express';
import { getTasks, createTask } from '../controllers/taskControllers';

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     description: Retorna una lista de todas las tareas almacenadas en la base de datos
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetTasksError'
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Crea una nueva tarea con nombre, descripción opcional y color personalizable
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTaskRequest'
 *           example:
 *             name: "Completar proyecto"
 *             description: "Finalizar el desarrollo del proyecto web"
 *             color: "#dcfce7"
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Datos de entrada inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateTaskError'
 */
router.post('/task', createTask);

export default router;
