const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
};

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first();
}

function findSteps(id) {
    return db('schemes')
        .join('steps', 'steps.scheme_id' , 'schemes.id')
        .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where('id', id)
}

function add(scheme) {
    return db('schemes').insert(scheme, 'id')
}

function addStep(step, scheme_id) {

}

function update(changes, id) {
    return db('schemes').where({id}).update(changes)
}

function remove(id) {
    return db('schemes').where({id}).del();
}