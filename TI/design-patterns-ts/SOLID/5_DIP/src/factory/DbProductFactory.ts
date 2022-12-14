import IDbProduct from "../model/IDbProduct";
import Db from '../model/Db'
import MySQLProduct from '../model/MySQLProduct';
import MongoDBProduct from '../model/MongoDBProduct'

export default class DbProductFactory {

    private static type: Db = Db.MONGODB

    public static create(): IDbProduct {
        if (DbProductFactory.type === Db.MYSQL) {
            return new MySQLProduct()
        }
        if (DbProductFactory.type === Db.MONGODB) {
            return new MongoDBProduct()
        }
    }
}