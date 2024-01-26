const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "learn";

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	const collection = db.collection("students");

	//  add one data to the collection
	// const student = { name: 'Shafira Salsa', email: 'shafira@gmail.com' }
	// await collection.insertOne(student);
	// console.log(`Inserted student with _id: ${student._id}`);

	// add many data to the collection
	// const students = [
	// 	{
	// 		name: 'Agus',
	// 		email: 'agus@gmail.com'
	// 	},
	// 	{
	// 		name: 'Agus',
	// 		email: 'agus@gmail.com'
	// 	},
	// 	{
	// 		name: 'Agus',
	// 		email: 'agus@gmail.com'
	// 	},
	// 	{
	// 		name: 'Agus',
	// 		email: 'agus@gmail.com'
	// 	},
	// ];

	// await collection.insertMany(students, (err, result) => {
	// 	if (err) return console.log('Failed to insert documents');

	// 	return console.log('Inserted many documents');
	// });

	// read all data from collection
	// const data = await collection.find().toArray();
	// console.log(data);

	// read data by name
	// const data = await collection.find({name: 'Satria Reza Ramadhan'}).toArray();

	// read data by id
	// const data = await collection.find({_id: new ObjectId('65b3dd98e216aceac9d7cd35')}).toArray();
	// console.log(data);

	// update data by id
	// const updateData = await collection.updateOne({ _id: new ObjectId("65b3dd80b2ae4425569b752c") }, { $set: { name: "Agus", email: "agus@gmail.com" } });

	// update more than one data
	// const updateData = await collection.updateMany({
	// 	name: "Agus",
	// }, 
	// {
	// 	$set:  {name: "Agus Tus"}
	// })

	// delete data by id
	// await collection.deleteOne({ _id: new ObjectId("65b3dd80b2ae4425569b752c") })
	// 	.then((result) => console.log(result))
	// 	.catch((err) => console.log(err));

	// delete more than one data
	await collection.deleteMany({
		name: 'Agus'
	}).then((result) => {
		console.log(result);
	}).catch((err) => {
		console.log(err)
	});

	return "done.";
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
