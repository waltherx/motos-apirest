"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('express-jwt');
const getTokenFromHeaders = (req) => {
    if ((req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
        (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};
const auth = {
    required: jwt({
        secret: process.env.JWT_SECRET || 'superSecret',
        getToken: getTokenFromHeaders,
        algorithms: ['HS256'],
    }),
    optional: jwt({
        secret: process.env.JWT_SECRET || 'superSecret',
        credentialsRequired: false,
        getToken: getTokenFromHeaders,
        algorithms: ['HS256'],
    }),
};
exports.default = auth;
