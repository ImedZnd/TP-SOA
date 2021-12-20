const grpc = require( 'grpc');
const protoLoader = require( '@grpc/proto-loader');
const packageDef = protoLoader.loadSync("calcul.proto", {});
const grpcObject = grpc. loadPackageDefinition(packageDef);
const calculPackage = grpcObject.calculPackage;

const client =new calculPackage.Calcule('localhost:9000',grpc.credentials.createInsecure());

const params = {
    'first' : 5,
    'second' : 5
}

client.add(params,(err,response)=>{
    console.log('adding '+JSON.stringify(response));
})

client.sub(params,(err,response)=>{
    console.log('subtracting'+JSON.stringify(response));
})

client.mult(params,(err,response)=>{
    console.log('multipiing'+JSON.stringify(response));
})

client.devid(params,(err,response)=>{
    console.log('deviding'+JSON.stringify(response));
})