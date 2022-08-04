'use strict';

/**
 * clients-asked service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clients-asked.clients-asked');
