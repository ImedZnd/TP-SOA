const grpc = require( 'grpc');
const protoLoader = require( '@grpc/proto-loader');
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc. loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client =new todoPackage.Todo('localhost:9000',grpc.credentials.createInsecure());

client.createTodo({
    'id' : 1,
    'text' : 'Hello'
},(err,response)=>{
    console.log('recived from server'+JSON.stringify(response));
})

client.readTodos({},(err,response)=>{
    console.log('todos'+JSON.stringify(response));
})