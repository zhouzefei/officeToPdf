'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.home);
  router.get('/pdfPreview', controller.home.pdfPreview);
  router.get('/excelPreview', controller.home.excelPreview);
};
