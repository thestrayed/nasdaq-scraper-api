'use strict';

require('dotenv').config({ path: '../.env' });

module.exports = {
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TEST_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: false,
            freezeTableName: true,
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci'
            },
            timestamps: true
        }
    },
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: false,
            freezeTableName: true,
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci'
            },
            timestamps: true
        }
    },
    staging: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: false,
            freezeTableName: true,
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci'
            },
            timestamps: true
        }
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: true,
            freezeTableName: true,
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci'
            },
            timestamps: true
        }
    }
};
