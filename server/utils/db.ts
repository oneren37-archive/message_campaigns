/* eslint no-constructor-return: 0 */
const mysql = require('mysql');

interface IDB {
    execute(query: string): Promise<any>;
}

export class DB implements IDB {
  private connection;

  private config = {
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'bd365f1df80165',
    password: '44a31b97',
    database: 'heroku_805f92d88591b45',
  };

  private static instance: any;

  private autoConnect() {
    this.connection = mysql.createConnection(this.config);
    this.connection.connect((err) => {
      if (err) {
        setTimeout(this.autoConnect, 2000);
      }
    });

    this.connection.on('error', (err) => {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') this.autoConnect();
    });
  }

  constructor() {
    if (DB.instance) return DB.instance;
    DB.instance = this;

    this.autoConnect();

    return this;
  }

  public execute(query: string): any {
    return new Promise((resolve, reject) => {
      this.connection.query(query, (error, results, fields) => {
        if (error) reject(error);
        resolve({ error, results, fields });
      });
    });
  }
}
