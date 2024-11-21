"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
;
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/get', (req, res) => {
    res.send('gETtiNg');
});
app.get('/send/:id', (req, res) => {
    console.log(`query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Header: ${JSON.stringify(req.headers)}`);
    console.log(`method: ${req.method}`);
    res.status(202).header('X-Custom-Header', 'foo').send(req.params.id);
});
app.listen(port, () => {
    console.log(`App Running Successfully at ${port}`);
});
