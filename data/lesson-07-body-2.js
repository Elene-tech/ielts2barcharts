(function () {
  var CHK_S = ['Абзац починається зі зв’язки (In contrast / Meanwhile / The remaining …)', 'Є виняток або зворотний патерн (the one activity where …)', 'Схожі категорії об’єднані (broadly similar, ranging from … to …)', 'Обидві групи в одному реченні', 'Past Simple, жодних rose / fell / overtook', 'Немає причин і переліку всіх цифр'];
  var CHK_T = ['Абзац починається зі зв’язки (The older groups, by contrast …)', 'Є множник (more than doubled, nearly quadrupled)', 'Дієслова різні й відповідають розміру зміни (jumped, soared)', 'Є порівняння РОЗРИВІВ між роками (the gap narrowed to …)', 'Past Simple і мова змін (є два роки)', 'Немає причин і переліку всіх цифр'];
  window.LESSON = {
    id: 'bc-07-body-2',
    module: 'Bar Charts',
    title: 'Practice · Main Body 2',
    subtitle: 'Bar Charts · пишемо другий Body paragraph: решта даних, виняток, зворотний патерн і схожі категорії. Слова й логіка допомагають, а текст пишеш ти.',
    vocab: ['body-templates', 'grouping', 'compare', 'ratios', 'change'],

    intro: [
      { type: 'rule', title: 'Логіка Body 2', html:
        '<p>Body 2 — це <b>решта даних</b>. Вона <b>протилежна</b> Body 1 або <b>схожа</b> в усіх групах. Не повторюй структуру Body 1.</p>' +
        '<ol style="margin-left:20px"><li><b>Зв’язка</b> з Body 1: <i>In contrast, … / The older groups, by contrast, … / The remaining …</i></li><li><b>Зворотний патерн або виняток</b>: <i>X was the one activity where Y led</i></li><li><b>Схожість</b>: <i>broadly similar, ranging from … to …</i></li><li>(Два роки) <b>порівняння розривів</b>: <i>the 62-point gap narrowed to 35 points</i></li></ol>' +
        '<p class="small" style="margin-top:8px">Не описуй кожну категорію окремо. Екзаменатору потрібна логіка групування, а не перелік.</p>' }
    ],

    rounds: [
    /* ---------- Раунд 1 · Leisure ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'lg',
      lead: 'Один рік (2022): Past Simple без трендів. Body 2 = reading (жінки попереду) і socialising (майже порівну). Усі підказки відкриті.',
      words: [['the one activity where','єдине заняття, де'],['a reversed pattern','зворотний патерн'],['broadly similar','приблизно однакові'],['closely matched','майже рівні']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Reading і socialising: крок за кроком', steps: [
            { title: 'Зв’язка і виняток', ua: 'Яка активність — єдина, де жінки лідирують? Почни з <i>In contrast, …</i>', frame: 'In contrast, reading was the one activity where women [verb], at [figure] hours …' },
            { title: 'Розмір розриву', ua: 'Порахуй 7 ÷ 4: який прислівник або множник?', frame: '…, [adverb / multiplier] the male figure of [figure].' },
            { title: 'Схожість', ua: 'Яка активність майже порівну? Дві цифри через respectively або against.', frame: 'Socialising, meanwhile, was broadly similar, at [figure] and [figure] hours respectively.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про reading і socialising',
          task: '2–3 речення. Не повторюй структуру Body 1.',
          hint: 'Reading: 7 і 4 (7 ÷ 4 = 1,75). Socialising: 9 і 8.',
          rows: 5, min: 15,
          models: [
            ['Модель A', '<mark>In contrast</mark>, reading was <mark>the one activity where</mark> women led, at 7 hours a week, <mark>nearly double</mark> the male figure of 4. Socialising, <mark>meanwhile</mark>, was <mark>broadly similar</mark> for both sexes, at 9 hours for men and 8 for women.'],
            ['Модель B', 'Reading was <mark>the only activity in which</mark> women spent more time than men (7 hours <mark>against</mark> 4), <mark>a reversal of the pattern seen elsewhere</mark>. The two sexes were <mark>closely matched</mark> in socialising, at 9 and 8 hours <mark>respectively</mark>.']],
          after: 'Порівняй: чи є в тебе виняток («the one activity where») і зв’язка («In contrast»)? Socialising показує, що не все треба описувати докладно: схожі категорії можна стиснути в одне речення.',
          check: CHK_S }
      ] },

    /* ---------- Раунд 2 · Internet ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'it',
      lead: 'ДВА роки (2010 і 2023): Past Simple і мова змін. Body 2 = старші групи (45–64 і 65+): це найбільше зростання. Не забудь порівняти розриви.',
      words: [['more than doubled','зріс більш ніж удвічі'],['jumped','стрибнув'],['the gap narrowed to …','розрив скоротився до …'],['by contrast','навпаки']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Старші групи: крок за кроком', steps: [
            { title: 'Зв’язка', ua: 'Почни зі зв’язки: старші групи, навпаки, зросли найсильніше.' },
            { title: 'Дві групи', ua: 'Для кожної: старт → фініш + різне дієслово. Одна з них має множник.' },
            { title: 'Розрив', ua: 'Як змінився розрив між найвищою й найнижчою групою: з якого значення до якого?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про групи 45–64 і 65+',
          task: '2–3 речення. Множник замість двох цифр і розрив між роками.',
          hint: '45–64: 61 → 90 (+29). 65+: 30 → 64 (більш ніж удвічі). Розрив 16–24 vs 65+: 62 → 35.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'The older groups, <mark>by contrast</mark>, saw the steepest growth. Internet use among 45–64 year olds <mark>jumped</mark> from 61% to 90%, while the figure for over-65s <mark>more than doubled</mark>, from 30% to 64%. As a result, the <mark>62-point gap</mark> between the youngest and oldest groups in 2010 <mark>narrowed to 35 points</mark> by 2023.'],
            ['Модель B', 'Growth was far steeper among older people. The 45–64 group <mark>rose by 29 percentage points</mark>, from 61% to 90%, and the 65+ group by 34, from 30% to 64%, <mark>so that the gap separating them from the youngest group narrowed from 62 to 35 points</mark>.']],
          after: 'Зверни увагу: множник (<i>more than doubled</i>) замінює пару цифр і робить речення сильнішим, а порівняння розривів (62 → 35) показує, що ти бачиш діаграму цілком.',
          check: CHK_T }
      ] },

    /* ---------- Раунд 3 · Transport ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'tr',
      lead: 'Один рік (2023): Past Simple. Body 2 = Amsterdam і Copenhagen: протилежний «табір». Фраз мало: думай, чим ці міста відрізняються від Body 1.',
      words: [['relied far less on the car','набагато менше покладалися на авто'],['stood out for','вирізнявся …'],['five times the figure for','у п’ять разів більше, ніж у'],['the opposite profile','протилежний профіль']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Amsterdam і Copenhagen: план (за потреби)', collapsed: true, steps: [
            { title: 'Зв’язка і протилежний профіль', ua: 'Яке головне відрізнення від Manchester і Warsaw? Покажи цифри авто.' },
            { title: 'Amsterdam', ua: 'У чому лідер? Із ким порівняти (slightly ahead)?' },
            { title: 'Copenhagen', ua: 'Який рекорд? Який множник відносно Warsaw?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про Amsterdam і Copenhagen',
          task: '2–3 речення. Відкривай зв’язкою і порівняй з Body 1.',
          rows: 5, min: 15,
          models: [
            ['Модель A', '<mark>In contrast</mark>, Amsterdam and Copenhagen <mark>relied far less on the car</mark>, at 31% and 22% <mark>respectively</mark>. Amsterdam recorded the highest public transport figure, at 41%, <mark>slightly ahead of</mark> Manchester’s 38%, while Copenhagen <mark>stood out for</mark> cycling, with 45% of commuters using a bicycle, <mark>five times the figure for</mark> Warsaw (9%).'],
            ['Модель B', 'Amsterdam and Copenhagen showed <mark>the opposite profile</mark>. Public transport led in Amsterdam, at 41%, while in Copenhagen the bicycle was the most popular mode, used by 45% of commuters, <mark>five times the Warsaw figure of 9%</mark>.']],
          after: 'Перевір множник: 45 ÷ 9 = 5,0: рівно п’ять разів, тож «nearly» тут не потрібне. А 41 vs 38 — лише 3 пункти (≈ 8%): slightly ahead.',
          check: CHK_S }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Будувати Body 2 як <b>продовження</b> Body 1, а не повтор його структури</li>' +
        '<li>Називати виняток або зворотний патерн: <i>the one activity where …</i></li>' +
        '<li>Стискати схожі категорії: <i>broadly similar, ranging from … to …</i></li>' +
        '<li>Для двох років порівнювати <b>розриви</b>, а не тільки стовпчики</li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Final Task: пишеш повну відповідь самостійно (Introduction + Overview + Body 1 + Body 2).</p>' }
    ]
  };
})();
