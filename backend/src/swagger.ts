import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API para gestionar tareas con colores personalizables',
      contact: {
        name: 'Task Manager Team',
        email: 'support@taskmanager.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Servidor de desarrollo'
      }
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID único de la tarea',
              example: 1
            },
            name: {
              type: 'string',
              description: 'Nombre de la tarea',
              example: 'Completar proyecto'
            },
            description: {
              type: 'string',
              nullable: true,
              description: 'Descripción detallada de la tarea',
              example: 'Finalizar el desarrollo del proyecto web'
            },
            color: {
              type: 'string',
              description: 'Color de la tarea en formato hexadecimal',
              example: '#dcfce7'
            }
          },
          required: ['name']
        },
        CreateTaskRequest: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Nombre de la tarea (obligatorio)',
              example: 'Completar proyecto'
            },
            description: {
              type: 'string',
              nullable: true,
              description: 'Descripción de la tarea',
              example: 'Finalizar el desarrollo del proyecto web'
            },
            color: {
              type: 'string',
              description: 'Color de la tarea en formato hexadecimal',
              example: '#dcfce7'
            }
          },
          required: ['name']
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Mensaje de error específico',
              example: 'Error al obtener lista de tareas'
            }
          }
        },
        GetTasksError: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error al obtener la lista de tareas',
              example: 'Error al obtener lista de tareas'
            }
          }
        },
        CreateTaskError: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error al crear una nueva tarea',
              example: 'Error al crear tarea'
            }
          }
        },
        ValidationError: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error de validación de datos',
              example: 'El campo "name" es obligatorio.'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts']
}

export const specs = swaggerJsdoc(options) 