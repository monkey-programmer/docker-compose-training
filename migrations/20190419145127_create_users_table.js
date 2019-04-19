
exports.up = async knex => {
    await knex.schema.createTable('users', 'name', 'description');
};

exports.down = async knex => {
    await knex.schema.dropTable('users');
};
