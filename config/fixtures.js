const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const fixtures = {
  order: ['Condition', 'Case', 'User']
};

const conditions = fs.readFileSync('data/conditions.tsv');
fixtures.Condition = parse(conditions, {
  delimiter: '\t',
  from_line: 2,
  columns: ['code', 'description']
});

fixtures.Case = fs.readdirSync('data/cases').map((filename) => ({
  id: filename.slice(0, -4),
  record: fs.readFileSync('data/cases/' + filename, { encoding: 'utf8' })
}));

const users = fs.readFileSync('data/users.tsv');
fixtures.User = parse(users, {
  delimiter: '\t',
  columns: true
});

module.exports.fixtures = fixtures;
