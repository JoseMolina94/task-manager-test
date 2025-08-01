import { Request, Response } from 'express'
import pool from '../database'

export const getTasks = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks')
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener tareas:', error)
    res.status(500).json({ error: 'Error al obtener tareas' })
  }
}

export const createTask = async (req: Request, res: Response) => {
  const { name, description, color } = req.body

  if (!name) {
    return res.status(400).json({ error: 'El campo "name" es obligatorio.' })
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO tasks (name, description, color) VALUES (?, ?, ?)',
      [name, description || null, color || '#ffffff']
    )

    res.status(201).json({
      id: (result as any).insertId,
      name,
      description: description || null,
      color: color || '#ffffff',
    })
  } catch (error) {
    console.error('Error al crear tarea:', error)
    res.status(500).json({ error: 'Error al crear tarea' })
  }
}
