const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("calcul.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculPackage = grpcObject.calculPackage;

const server = new grpc.Server();

server.bind('localhost:9000', grpc.ServerCredentials.createInsecure());
server.addService(calculPackage.Calcule.service, {
    'add' : add,
    'sub': sub,
    'mult': mult,
    'devid': devid
});
server.start();

function add (call,callback) {
    const response = {
        'res' : call.request.first +  call.request.second
    }
    callback(null, response);
}

function sub (call,callback) {
    const response = {
        'res' : call.request.first -  call.request.second
    }
    callback(null, response);
}

function mult (call,callback) {
    const response = {
        'res' : call.request.first *  call.request.second
    }
    callback(null, response);
}

function devid (call,callback) {
    const response = {
        'res' : call.request.first /  call.request.second
    }
    callback(null, response);
}

