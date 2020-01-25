'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const {getRandomInt, shuffle} = require(`../../utils`);

const EXIT_CODE_ERROR = 1;
const DEFAULT_COUNT = 1;
const FILE_NAME = `mock.json`;
const MAX_ANNOUNCE_COUNT = 4;

const TITLES = [
  `Ёлки.История деревьев`,
  `Как перестать беспокоиться и начать жить`,
  `Как достигнуть успеха не вставая с кресла`,
  `Обзор новейшего смартфона`,
  `Лучше рок - музыканты 20 - века`,
  `Как начать программировать`,
  `Учим HTML и CSS`,
  `Что такое золотое сечение`,
  `Как собрать камни бесконечности`,
  `Борьба с прокрастинацией`,
  `Рок — это протест`,
  `Самый лучший музыкальный альбом этого года`,
];

const SENTENCES = [
  `Ёлки — это не просто красивое дерево.Это прочная древесина.`,
  `Первая большая ёлка была установлена только в 1938 году.`,
  `Вы можете достичь всего.Стоит только немного постараться и запастись книгами.`,
  `Этот смартфон — настоящая находка.Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
  `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
  `Собрать камни бесконечности легко, если вы прирожденный герой.`,
  `Освоить вёрстку несложно.Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
  `Бороться с прокрастинацией несложно.Просто действуйте.Маленькими шагами.`,
  `Программировать не настолько сложно, как об этом говорят.`,
  `Простые ежедневные упражнения помогут достичь успеха.`,
  `Это один из лучших рок - музыкантов.`,
  `Он написал больше 30 хитов.`,
  `Из под его пера вышло 8 платиновых альбомов.`,
  `Процессор заслуживает особого внимания.Он обязательно понравится геймерам со стажем.`,
  `Рок - музыка всегда ассоциировалась с протестами.Так ли это на самом деле ?`,
  `Достичь успеха помогут ежедневные повторения.`,
  `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
  `Как начать действовать ? Для начала просто соберитесь.`,
  `Игры и программирование разные вещи.Не стоит идти в программисты, если вам нравится только игры.`,
  `Альбом стал настоящим открытием года.Мощные гитарные рифы и скоростные соло - партии не дадут заскучать.`,
];

const CATEGORIES = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`,
];

module.exports = {
  name: `--generate`,
  async run(count) {
    if (count > 1000) {
      console.error(chalk.green(`Не больше 1000 объявлений`));
      process.exit(EXIT_CODE_ERROR);
    }

    const baseDatetime = new Date();
    baseDatetime.setMonth(-3);

    const mockData = Array.from({length: +(count || DEFAULT_COUNT)}, () => ({
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      announce: shuffle(SENTENCES.slice()).slice(0, getRandomInt(1, MAX_ANNOUNCE_COUNT)),
      fullText: shuffle(SENTENCES.slice()).slice(0, getRandomInt(1, SENTENCES.length)),
      createdDate: new Date(getRandomInt(+baseDatetime, Date.now())).toISOString().replace(/T/, ` `).replace(/\..*$/, ``),
      category: shuffle(CATEGORIES.slice()).slice(0, getRandomInt(1, CATEGORIES.length - 1)),
    }));

    try {
      await fs.writeFile(FILE_NAME, JSON.stringify(mockData));
      console.log(chalk.green(`Данные успешно сгенерированы`));
    } catch (err) {
      console.error(chalk.red(`Ошибка при записи моковых данных в файл`));
      process.exit(EXIT_CODE_ERROR);
    }
  }
};

