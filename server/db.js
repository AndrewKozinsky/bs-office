import postgres from 'postgres'
import dotenv from 'dotenv'
dotenv.config()

export const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'test',
    username: 'postgres',
    password: 'postgres'
})

/*
export const sql = postgres({
    host: '192.168.1.79',
    port: 5432,
    database: 'test',
    username: 'andreyAdmin',
    password: '123456'
})*/
