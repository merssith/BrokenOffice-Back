const itemService = require("../services/itemService.js");

exports.getAllItems = (req, res) => {
  itemService
    .getAllItems()
    .then((items) => res.status(200).send(items))
    .catch((err) => res.status(500).send(err));
};

exports.getItem = (req, res) => {
  const id = req.params.id;
  itemService
    .getItem(id)
    .then((item) => res.status(200).send(item))
    .catch((err) => res.status(500).send(err));
};

exports.createItem = (req, res) => {
  const item = req.body;
  itemService
    .createItem(item)
    .then((newItem) => res.status(201).send(newItem))
    .catch((err) => res.status(500).send(err));
};

exports.deleteItem = (req, res) => {
  const id = req.params.id;
  itemService
    .deleteItem(id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(500).send(err));
};


exports.editItem = (req, res) => {
  const id = req.params.id;
  itemService
    .editItem(id, req.body)
    .then((updatedItem) => res.status(202).send(updatedItem))
    .catch((err) => res.status(500).send(err));
};

exports.getPredictions = (req, res) => {
  const url = req.body.ImageUrl;
  itemService
    .getPredictions(url)
    .then((predictions) => res.status(202).json(predictions))
    .catch((err) => res.status(500).send(err));
};
