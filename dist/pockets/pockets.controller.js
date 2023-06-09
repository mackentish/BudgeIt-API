"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pockets_model_1 = __importDefault(require("./pockets.model"));
// GET
function list(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return pockets_model_1.default.find({ user: req.params.userId })
            .then((result) => {
            res.status(200).send(result);
        })
            .catch((err) => {
            res.status(500).send(err);
        });
    });
}
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return pockets_model_1.default.findById(req.params.pocketId)
            .then((result) => {
            res.status(200).send(result);
        })
            .catch((err) => {
            res.status(500).send(err);
        });
    });
}
// PUT
function updateById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return pockets_model_1.default.findByIdAndUpdate(req.params.pocketId, req.body, { new: true })
            .then((result) => {
            res.status(200).send(result);
        })
            .catch((err) => {
            res.status(500).send(err);
        });
    });
}
// POST
function insert(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pocket = new pockets_model_1.default(req.body);
        return pocket
            .save()
            .then((result) => {
            res.status(201).send(result);
        })
            .catch((err) => {
            res.status(500).send(err);
        });
    });
}
function insertMany(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return pockets_model_1.default.insertMany(req.body)
            .then((result) => {
            res.status(201).send(result);
        })
            .catch((err) => {
            res.status(500).send(err);
        });
    });
}
// DELETE
function removeAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return pockets_model_1.default.deleteMany({ user: req.params.userId })
            .then((result) => {
            res.status(200).send("All pockets have been removed");
        })
            .catch((err) => {
            res.status(500).send(err);
        });
    });
}
function removeById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return pockets_model_1.default.findByIdAndDelete(req.params.pocketId)
            .then((result) => {
            res.status(200).send("Pocket has been removed");
        })
            .catch((err) => {
            res.status(500).send(err);
        });
    });
}
exports.default = {
    list,
    getById,
    updateById,
    insert,
    insertMany,
    removeAll,
    removeById,
};