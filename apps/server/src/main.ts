import { NestFactory } from '@nestjs/core'
import type {
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import {
  FastifyAdapter,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  )
  await app.listen(3000)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
