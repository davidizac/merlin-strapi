'use strict';

/**
 * clients-asked router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::clients-asked.clients-asked');
