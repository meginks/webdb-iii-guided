// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rolex.db'
    }, 
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }, 
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// -> Knex init 
// -> in the knexfile.js, write the migrations and seeds distinctions in the development object 
// --> knex migrate:latest 
// --> knex migrate:make users_table
// --> npx knex migrate:latest  
// above instructions are for creating one table at a time 

