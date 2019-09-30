'use strict';

const Controller = require('egg').Controller;
const toPdf = require('office-to-pdf');
const fs = require('fs');
const path = require('path');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async home() {
    await this.ctx.render('home.tpl');
  }
  async filePreview() {
    const ctx = this.ctx;
    // 从cdn上拉取资源
    // const {data} = await ctx.curl('https://img.maihaoche.com/filePreview20190928/excel/excelTest.xlsx', {
    //   method: 'GET',
    // });
    const data = await fs.readFileSync(path.join(this.config.static.dir, '/testExcel.xlsx'));
    const pdfBuffer = await toPdf(data);
    ctx.set('Content-Type', 'application/pdf');
    ctx.body = pdfBuffer;
  }
}

module.exports = HomeController;
