import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { PORT } from 'config'

//init app
const app: Express = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
	res.send('Server running!!')
})

app.listen(PORT, () => {
	console.log(`Server is listening on: ${PORT}`)
})
