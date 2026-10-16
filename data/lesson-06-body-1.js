(function () {
  var CHK_S = ['Обидві групи в одному реченні', 'Є множник або прислівник під розрив (double, far, noticeably)', 'Дієслова різні (led, devoted, recorded), а не «spent» тричі', 'Past Simple, жодних rose / fell / increased', 'Є суперлатив на всю діаграму (the highest … on the chart)', 'Немає причин і переліку всіх цифр'];
  var CHK_T = ['Є старт: рік + цифра', 'Є фініш: рік + цифра', 'Показано масштаб (percentage points, nearly double)', 'Past Simple і мова змін (є два роки)', 'Дієслова різні й відповідають розміру зміни (edged up, climbed, jumped)', 'Немає причин і переліку всіх цифр'];
  window.LESSON = {
    id: 'bc-06-body-1',
    module: 'Bar Charts',
    title: 'Practice · Main Body 1',
    subtitle: 'Bar Charts · пишемо перший Body paragraph на трьох діаграмах. Слова й логіка допомагають, а текст пишеш ти.',
    vocab: ['body-templates', 'verbs', 'adverbs', 'ratios', 'compare'],

    intro: [
      { type: 'rule', title: 'Логіка Body paragraph для bar charts', html:
        '<p>Body 1 — це <b>найсильніша логічна група</b> даних (2–3 категорії або 2 групи). Кожне речення порівнює <b>щонайменше дві групи</b>. Одне речення з однією групою й однією цифрою — змарнований рядок.</p>' +
        '<p><b>Діаграма за один рік:</b></p>' +
        '<ol style="margin-left:20px"><li><b>Лідер</b> + обидві групи: <i>X was the most popular …, at 15 hours for men and 13 for women</i></li><li><b>Множник або прислівник</b> під розрив: <i>exactly double</i>, <i>more than three times</i>, <i>noticeably higher</i></li><li><b>Найгостріший контраст</b> із двома цифрами: <i>whereas / against / compared with</i></li></ol>' +
        '<p style="margin-top:8px"><b>Діаграма за два роки:</b> <b>старт → фініш → масштаб (percentage points) → що сталося з розривом</b>.</p>' +
        '<p class="small" style="margin-top:8px">Спочатку тобі допомагають плани й фрази. З кожним раундом підказок менше. У кінці кожного раунду порівнюєш свій абзац із моделлю.</p>' }
    ],

    rounds: [
    /* ---------- Раунд 1 · Leisure ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'lg',
      lead: 'Один рік (2022): Past Simple, жодних rose / fell. Body 1 = активності, де лідирують чоловіки (TV, sport, gaming). Усі підказки відкриті.',
      words: [['was the most popular activity for both sexes','найпопулярніше заняття для обох статей'],['devoted … to','присвятили … на'],['exactly double','рівно вдвічі'],['the starkest contrast','найрізкіший контраст'],['more than three times','більш ніж утричі']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Активності, де лідирують чоловіки: крок за кроком', steps: [
            { title: 'Лідер для обох груп', ua: 'Яка активність найпопулярніша? Обидві цифри в одному реченні.', frame: 'Watching TV was the most popular activity for both sexes, at [figure] hours for men and [figure] for women.' },
            { title: 'Множник: sport', ua: 'Яка пропорція між чоловіками й жінками?', frame: 'Men devoted [figure] hours to sport, [multiplier] the female figure of [figure].' },
            { title: 'Найгостріший контраст: gaming', ua: 'Яка активність має найбільший розрив? Який множник?', frame: 'The starkest contrast, however, appeared in gaming, where men spent [figure], [multiplier] the [figure] recorded by women.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про TV, sport і gaming',
          task: '2–3 речення. Спирайся на план вище й діаграму. Пам’ятай: рік один, тому жодних <s>rose / increased</s>.',
          hint: 'TV: 15 і 13. Sport: 8 і 4 (рівно вдвічі). Gaming: 10 і 3 (10 ÷ 3 = 3,3).',
          rows: 5, min: 15,
          models: [
            ['Модель A', '<mark>Watching TV was the most popular activity for both sexes</mark>, at 15 hours a week for men and 13 for women. Sport showed a clearer divide: men <mark>devoted</mark> 8 hours to it, <mark>exactly double</mark> the female figure of 4. <mark>The starkest contrast</mark>, however, appeared in gaming, where men spent 10 hours, <mark>more than three times</mark> the 3 hours recorded by women.'],
            ['Модель B', 'Men spent more time than women on watching TV, sport and gaming. The TV figures were 15 hours a week for men <mark>against</mark> 13 for women, while sport time for men was <mark>exactly twice the female figure</mark> (8 hours against 4). The gap was widest for gaming, where men spent <mark>more than three times as many hours as women</mark> (10 against 3).']],
          after: 'Порівняй: чи є в тебе обидві групи в одному реченні? Чи є множник замість двох голих цифр? Чи немає rose / increased? Модель A використовує <i>devoted / recorded</i>, модель B — <i>against / twice</i>: обидва варіанти хороші.',
          check: CHK_S }
      ] },

    /* ---------- Раунд 2 · Internet ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'it',
      lead: 'ДВА роки (2010 і 2023): Past Simple і мова змін. Body 1 = дві наймолодші групи (16–24 і 25–44). Фраз менше: тільки логіка.',
      words: [['edged up','трохи зріс'],['climbed','піднявся'],['near-universal levels','майже всеохопний рівень'],['respectively','відповідно']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Молодші групи: крок за кроком', steps: [
            { title: 'Старт 2010', ua: 'Яка частка в обох молодших групах уже в 2010 році? Скажи, що вона й так висока.' },
            { title: 'Фініш 2023', ua: 'Що сталося з кожною групою? Дієслова мають бути різні й відповідати розміру зміни.' },
            { title: 'Масштаб', ua: 'На скільки percentage points змінилась кожна група? Чому зростання скромне?' },
            { title: 'Підсумок', ua: 'Яким був рівень обох груп у 2023: майже всі? Скажи без вигаданих причин.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про групи 16–24 і 25–44',
          task: '2–3 речення. Старт, фініш і масштаб.',
          hint: '16–24: 92 → 99 (+7). 25–44: 85 → 97 (+12).',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'In 2010, internet use was <mark>already widespread</mark> among the youngest groups, at 92% for 16–24 year olds and 85% for 25–44 year olds. By 2023, both figures had <mark>reached near-universal levels</mark>, at 99% and 97% <mark>respectively</mark>, although the growth was modest at 7 and 12 <mark>percentage points</mark>.'],
            ['Модель B', 'The 16–24 group led in both years, <mark>edging up</mark> from 92% to 99%, while the 25–44 group <mark>climbed</mark> from 85% to 97%, <mark>a rise of 12 percentage points</mark>. As a result, the two younger groups were almost indistinguishable by 2023.']],
          after: 'Зверни увагу: <i>edged up</i> (+7) і <i>climbed</i> (+12) — різні дієслова для різних масштабів. Це і є лексична різноманітність.',
          check: CHK_T }
      ] },

    /* ---------- Раунд 3 · Transport ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'tr',
      lead: 'Один рік (2023): Past Simple без трендів. Body 1 = «автомобільні» міста, Manchester і Warsaw. Фраз мало, думай про лідера й множник.',
      words: [['recorded the highest','зафіксував найвищий'],['substantially more than','значно більше, ніж'],['more than twice the figure for','більш ніж удвічі більше, ніж у'],['the highest walking figure on the chart','найвищий показник пішої ходьби на діаграмі']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Manchester і Warsaw: план (за потреби)', collapsed: true, steps: [
            { title: 'Найвищий стовпчик', ua: 'Яке місто має найвищий показник автомобіля й чому це важливо для всієї діаграми?' },
            { title: 'Порівняння з іншими', ua: 'Який прислівник або множник підходить для порівняння з Amsterdam і Copenhagen? Порахуй розрив.' },
            { title: 'Другий міський «характер»', ua: 'Warsaw: схожий профіль + виняток (пішохідний рекорд).' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про Manchester і Warsaw',
          task: '2–3 речення. Одне місто чи обидва в кожному реченні, суперлатив на всю діаграму, один множник.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'Manchester <mark>recorded the highest car usage of all four cities</mark>, at 52%, <mark>substantially more than</mark> Amsterdam’s 31% and <mark>more than twice the figure for</mark> Copenhagen (22%). Warsaw showed a similar car-dependent profile at 48%, although walking was also popular there, at 30%, <mark>the highest walking figure on the chart</mark>.'],
            ['Модель B', 'The car was most widely used in Manchester (52%) and Warsaw (48%), <mark>compared with</mark> 31% in Amsterdam and 22% in Copenhagen. Manchester’s figure was <mark>more than double</mark> Copenhagen’s, while Warsaw also <mark>recorded the highest walking figure on the chart</mark>, at 30%.']],
          after: 'Ти вже тричі написав(ла) Body 1 на різних діаграмах: структура абзацу щоразу та сама. Змінюються лише слова й цифри. Перевір розриви: 52 ÷ 31 ≈ 1,7 (тобто 68%) — substantially, а 52 ÷ 22 = 2,4 — more than twice.',
          check: CHK_S }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Порівнювати <b>дві групи в одному реченні</b>, а не писати «група за групою»</li>' +
        '<li>Підбирати <b>прислівник або множник</b> під реальний розрив</li>' +
        '<li>Для діаграм із двома роками будувати абзац за схемою <b>старт → фініш → масштаб</b></li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Practice · Main Body 2: решта даних, виняток і зворотний патерн.</p>' }
    ]
  };
})();
