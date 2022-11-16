const _ = require("underscore");
const moment = require("moment");
const Joi = require("joi");
const Response = require("../config/response");
let commonHelper = require("../Helper/common");
let Services = require("../services");
let message = require("../config/messages");
let todoProjection = ["id", "taskName", "comment", "date"];

module.exports = {
  getTodoCards: async () => {
    let getTodo = await Services.todoServices.getTodoCards(todoProjection);
    if (getTodo) {
      return getTodo;
    } else {
      return {
        rows: [],
        count: 0,
      };
    }
  },
  addTodoCards: async (payloadData) => {
    console.log(payloadData);
    const schema = Joi.object().keys({
      taskName: Joi.string().required(),
      comment: Joi.string().optional(),
      date:Joi.date().optional(),
    });

    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    console.log("Payload Data", payload);
    let condition = {
      taskName: payload.taskName,
    };
    let checktodo = await Services.todoServices.getTodoCard(condition,["id", "taskName"]);
    if (checktodo) throw Response.error_msg.alreadyExist;
    let objToSave = {};
    if (_.has(payload, "taskName") && payload.taskName != "")
      objToSave.taskName = payload.taskName;
    if (_.has(payload, "comment") && payload.comment != "")
      objToSave.comment = payload.comment;
    if (_.has(payload, "date") && payload.date != "")
      objToSave.date = payload.date;
    let addTodo = await Services.todoServices.addTodoCards(objToSave);
    if (addTodo) {
      return message.success.ADDED;
    } else {
      throw Response.error_msg.InvalidData;
    }
  },
};
