import ObrasModelMemory from "./harvardMemory.model.js";
import ObrasModelMongoDB from "./harvardMongo.model.js";

class ModelFactory{

    static get(type){
        switch (type) {
            case 'MEM':
                console.log('Persistiendo en la memoria del servidor!')
                return ObrasModelMemory
            case 'MONGO':
                console.log('Persistiendo en la memoria de MongoDB!')
                return ObrasModelMongoDB;
            default:
                console.log('Persistiendo en ... Default!')
                return ObrasModelMemory;
        }
    }

}

export default ModelFactory