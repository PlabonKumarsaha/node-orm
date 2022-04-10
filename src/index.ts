import { createConnection } from 'typeorm';
import express from 'express';
import { Client } from './entities/Client';


var mysql = require('mysql');


const main = async () => {

    try{
        const conn = await createConnection({
            type:"mysql",
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '12345',
			database: 'test-orm',
            entities : [Client],
			synchronize: true,
           }).then(()=>{
               console.log('Connected to sql');
           });

    }catch(err){
        console.log('error connecting')
        throw new Error("Unable to connect!")
    }       

}
let obj =main()

console.log(obj)