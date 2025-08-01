import { Router } from 'express'
import { getTasks, createTask } from '../controllers/taskControllers'

const router = Router()

router.get('/tasks', getTasks)
router.post('/task', createTask)

export default router
