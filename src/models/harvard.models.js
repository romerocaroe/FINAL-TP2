const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  id: ObjectId,
  title: String,
  date: Date
});


/* 
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