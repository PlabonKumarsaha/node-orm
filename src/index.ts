import { createConnection } from 'typeorm';
import express from 'express';


var mysql = require('mysql');


const main = async () => {

    

        const conn = mysql.createConnection({
            type: 'sql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '12345',
			database: 'test-orm',
           });
		console.log('Connected to sql');

		


}