import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { type Context, Hono } from 'hono'
import { env } from 'hono/adapter'
import { compress } from 'hono/compress'
import app from './hono-entry'

const envs = env<{ NODE_ENV: string; PORT: string }>({ env: {} } as unknown as Context<object>)

const nodeApp = new Hono()

nodeApp.use(compress())

nodeApp.use(
  '/assets/*',
  serveStatic({
    root: `./dist/client/`,
  })
)

// biome-ignore lint/style/noNonNullAssertion: <explanation>
nodeApp.route('/', app!)

const port = envs.PORT ? Number.parseInt(envs.PORT, 10) : 3000

console.info(`Server listening on http://localhost:${port}`)
serve({
  fetch: nodeApp.fetch,
  port: port,
})
