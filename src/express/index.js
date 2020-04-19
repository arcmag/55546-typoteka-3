'use strict';

const path = require(`path`);
const express = require(`express`);
const appRoutes = require(`./routes`);
const app = express();

const logger = require(`../logger`).getLogger();
const STATIC_DIR = path.join(__dirname, `public`);

app.set(`view engine`, `pug`);
app.set(`views`, path.join(__dirname, `templates`));

app.use(express.static(STATIC_DIR));
app.use(express.json());

app.use((req, res, next) => {
  logger.debug(`Маршрут запроса: ${req.url}`);
  next();
});

app.use(appRoutes);

app.use(`/articles`, require(`./routes/articles`));
app.use(`/posts`, require(`./routes/posts`));

app.use(`/api/articles`, require(`./routes/api/articles`));
app.use(`/api/categories`, require(`./routes/api/categories`));
app.use(`/api/search`, require(`./routes/api/search`));

module.exports = app;
