import config from '../../config.js'
import { MongoClient } from "mongodb"

class MongoConnection {
    static client = null
    static db = null

    static connect = async () => {
        try {
        //Seteamos la URL de la base de datos
        MongoConnection.client = new MongoClient(config.DBSTR)

        await MongoConnection.client.connect()
        console.log('Mongo DB connected! ')

        //indicar la base con la que vamos a trabajar
        MongoConnection.db = MongoConnection.client.db(config.BASE)
        } catch (error) {
            console.log('Connection error DB: ', error)
        }
    }

}

export default MongoConnection