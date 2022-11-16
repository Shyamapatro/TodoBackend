"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Models = require("../models");
const Response = require("../config/response");

exports.getTodoCards = (criteria, projection) => {
	return new Promise((resolve, reject) => {
		Models.todo.findAndCountAll({
				attributes: projection,
				
			})
			.then(result => {
				resolve(result);
			}).catch(err => {
				console.log("getAll err ==>>  ", err);
				reject(Response.error_msg.implementationError);
			});
	});
};

exports.getTodoCard = (criteria, projection) => {
	return new Promise((resolve, reject) => {
		Models.todo
			.findOne({
				where: criteria,
				attributes: projection,
				
			})
			.then(result => {
				resolve(result);
			}).catch(err => {
				console.log("get err ==>>  ", err);
				reject(Response.error_msg.implementationError);
			});
	});
};
exports.addTodoCards = (objToSave) => {
	return new Promise((resolve, reject) => {
		Models.todo.create(objToSave)
			.then((result) => {
				console.log("data is saved successfully",result)
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};
