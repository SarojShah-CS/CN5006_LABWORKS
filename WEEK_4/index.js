import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://sarojshahcs_db_user:admin@cluster0.xzs8qu3.mongodb.net/"

const PersonSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
age: Number,
gender: String,
salary: Number
});

const Person = mongoose.model(
'modelname',
PersonSchema,
'personCollection'
);

async function insertOne() {
const doc1 = new Person({
name: 'NHQ',
age: 32,
gender: 'Male',
salary: 1234
});
const savedDoc = await doc1.save();
console.log('One document inserted');
console.log(savedDoc);
}

async function insertMany() {
 const manypersons = [
 { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 },
 { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 },
 { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 },
 { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 }
 ];
 const result = await Person.insertMany(manypersons);
 console.log('Many documents inserted');
 console.log(result);
}

// Find all documents
async function findAll() {
const docs = await Person.find({})
.sort({ salary: 1 }) // sort by salary ascending
.select('name salary age')
.limit(100);
console.log("Showing multiple documents");
docs.forEach(doc => {
console.log(doc.age, doc.name, doc.salary);
});
}

async function main() {
 try {
 await mongoose.connect(MONGO_URI);
 console.log(`Connected to ${MONGO_URI}`);
//  await insertOne();
//  await insertMany();
 } catch (err) {
 console.error('Error:', err);
 } finally {
 await mongoose.connection.close();
 console.log('Connection closed');
 }
}
main();