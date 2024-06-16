class ProductsModelMongoDB {
    constructor() {

    }

    getProducts = async () => {
      const products = await MongoConnection.db.collection("products").find({}).toArray()
      return products;
    };
  
    getProductsById = async (id) => {

    };

    postProduct = async (prod) => {
      const newProduct = await MongoConnection.db.collection("products").insertOne(prod)
      return newProduct
    };
}
  
export default ProductsModelMongoDB;

/**
 * 
 * division (string)
id ()
primaryimageurl (string)
technique (string)
description (string)
title (string)
dated (string)
culture 
url ()string


author (people.name)(string)
 */