import { Router } from "itty-router"

const router = Router()
    .all('*', () => new Response('Not Found.', { status: 404 }))

addEventListener('fetch', event =>
  event.respondWith(router.handle(event.request))
)

export default {
  port: parseInt(process.env.PORT || "8080"),
  fetch: router.handle
}