## Общие

`npm run start-front-server` - для запуска в рабочем режиме
___

Логин администратора - `admin`
Пароль администратора - `123456`

## Для инициализации БД

1. Применить schema.sql
2. Применить fill-db.sql

Я это делал через Query Tool у БД
https://yadi.sk/i/dfwQpN7GAg2Gbw

## env переменные

Добавить файл `.env` в корень проекта

## Общие
`PORT` - порт на котором будет работать сервер

## Для работы с PostgreSQL

`DB_PGPORT` - порт, по умолчанию - 5432
`DB_PGHOST` - хост, по умолчанию - 'localhost'
`DB_PGUSER` - пользователь
`DB_PGDATABASE` - база данных
`DB_PGPASSWORD` - пароль

## Проект на heroku

https://arcmag-typoteka-project-2.herokuapp.com/
