// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'commspics',
      user:     process.env.PG_DATABASE_USER,
      password: process.env.PG_DATABASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'gallery'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'commspics',
      user:     'admin',
      password: 'LordByron'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'gallery'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'commspics',
      user:     'admin',
      password: 'LordByron'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'gallery'
    }
  }

};
