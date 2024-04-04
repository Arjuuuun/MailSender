"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./src/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '50mb' }));
const port = 4000;
app.use(router_1.default);
app.use((0, cors_1.default)());
app.set('view engine', 'pug');
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'src')));
console.log(path_1.default.join(__dirname, 'src/views'));
app.get("/", (req, res) => {
    res.status(200).render('base');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
