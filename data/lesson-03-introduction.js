window.LESSON = {
  id: 'bc-03-introduction',
  module: 'Bar Charts',
  title: 'Practice · Introduction',
  vocab: ['rule', 'intro', 'traps'],
  subtitle: 'Bar Charts · тренуємо перше речення відповіді на трьох діаграмах: від розбору прикладу до самостійного написання.',

  intro: [
    { type: 'rule', title: 'Introduction для bar charts: формула', html:
      '<p>Introduction — це <b>1–2 речення</b>, у яких ти <b>своїми словами</b> кажеш, що порівнює діаграма. Без цифр і висновків.</p>' +
      '<ul><li><b>The bar chart</b> + <b>compares / illustrates / presents</b> + <b>що виміряно</b> (the percentage of …, the average number of …) + <b>між ким</b> (across four age groups, in four cities) + <b>коли / де</b>.</li>' +
      '<li><b>compares</b> — найточніше дієслово для bar chart: діаграма саме порівнює групи.</li>' +
      '<li>Три ходи перефразу: <b>1)</b> інше дієслово, <b>2)</b> синонім до ключового іменника (<i>spending → expenditure</i>), <b>3)</b> додай те, чого завдання не назвало (групи, категорії, одиниці виміру).</li>' +
      '<li><b>Один рік</b> → <i>in 2023</i>. <b>Два роки</b> → <i>in 2010 and 2023</i>: це сигнал, що далі можна писати про зміни.</li></ul>' },
    { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
      ['The bar chart below shows the percentage of commuters in four cities who used each mode of transport in 2023.', 'Майже повна копія завдання: змінено два слова.', 'The bar chart compares the proportion of commuters in four European cities who regularly used each of four modes of transport in 2023.'],
      ['The bar chart shows that men spend more time on gaming than women.', 'Це вже висновок (Overview), а не Introduction.', 'The bar chart compares how many hours men and women spent on five leisure activities in the UK in 2022.'],
      ['The bar chart compare internet use in 2010 year and 2023 year.', 'Дієслово без -s при одному bar chart + калька «2010 year».', 'The bar chart compares internet use across four age groups in the UK in 2010 and 2023.']
    ] }
  ],

  rounds: [
  /* ===================== РАУНД 1 ===================== */
  { label: 'Раунд 1', sub: 'з підказками', graph: 'tr',
    words: [['compares','порівнює'],['the proportion of commuters','частка тих, хто їздить на роботу'],['regularly used','регулярно користувалися'],['across / in four cities','у чотирьох містах'],['modes of transport','види транспорту']],
    lead: 'Один рік (2023), чотири міста. Повна підтримка: приклад, банк слів, пояснення до кожної відповіді. Завдання на іспиті звучало б так: <i>The bar chart below shows the percentage of commuters in four European cities who regularly used each of four modes of transport to get to work in 2023.</i>',
    blocks: [
      { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
          ['type', 'The bar chart'], ['verb', 'compares'], ['what', 'the proportion of commuters in four European cities'], ['link', 'who regularly used each of four modes of transport to get to work'], ['when', 'in 2023'], '.' ],
        legend: [['type','вид діаграми'],['verb','дієслово (one chart → -s)'],['what','ЩО порівнюється'],['link','уточнення: хто саме / що саме'],['when','коли']],
        note: 'Зверни увагу: <i>shows → compares</i>, <i>percentage → proportion</i>, а <i>modes of transport</i> замінює повтор «transport». Цифр немає, висновків теж.' },

      { type: 'gap', tag: 'Крок 2 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', intro: 'Використай слова з банку. У деяких реченнях підійдуть і інші варіанти: ми їх теж зарахуємо.',
        bank: ['compares', 'modes', 'across', 'as', 'to'], items: [
          { pre: 'The bar chart ', post: ' the proportion of commuters in four cities.', ok: ['compares', 'illustrates', 'shows', 'presents', 'depicts'], why: 'Підмет <i>the bar chart</i> — однина, тому дієслово з <b>-s</b>.' },
          { pre: 'It covers four ', post: ' of transport: car, public transport, bicycle and walking.', ok: ['modes', 'means', 'types', 'kinds'], why: '<i>four modes / types of transport</i>: множина після числівника.' },
          { pre: 'The chart compares usage ', post: ' four European cities.', ok: ['across', 'in'], why: '<i>across / in four cities</i>: охоплює кілька груп.' },
          { pre: 'Usage is measured ', post: ' the percentage of commuters.', ok: ['as'], why: '<i>measured as</i> + що саме вимірюється.' },
          { pre: 'Commuters used each mode of transport to get ', post: ' work.', ok: ['to'], why: '<i>get to work</i> — стійка фраза.' }
        ] },

      { type: 'choose', tag: 'Крок 3 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Яка Introduction найкраща для цієї діаграми?', opts: [
            ['The bar chart compares the proportion of commuters in four European cities who regularly used each of four modes of transport in 2023.', 1, 'Є вид діаграми, дієслово, що порівнюється, для кого й коли.'],
            ['The bar chart shows transport.', 0, 'Незрозуміло, про що саме: транспорт чого? Де? Коли?'],
            ['Manchester and Warsaw rely on the car, whereas Amsterdam and Copenhagen prefer public transport and cycling.', 0, 'Гарне речення, але це вже Overview. Introduction не містить висновків.'],
            ['Manchester recorded 52% for car usage in 2023.', 0, 'Це деталь із цифрою. Її місце в Body paragraph.']] },
          { q: 'Яке речення граматично правильне?', opts: [
            ['The bar chart compares the proportion of commuters in four cities.', 1, 'Підмет в однині → compares з -s.'],
            ['The bar chart compare the proportion of commuters in four cities.', 0, 'Один bar chart: дієслово має -s.'],
            ['The bar charts compares the proportion of commuters.', 0, 'Тут навпаки: charts — множина, а compares — з -s.']] },
          { q: 'Як сказати «у 2023 році»?', opts: [
            ['in 2023', 1, 'Просто <i>in 2023</i>. Слово «year» не потрібне.'],
            ['in 2023 year', 0, 'Калька з української: слово year зайве.'],
            ['at 2023', 0, 'З роками вживається прийменник in.']] },
          { q: 'Що означає «measured as the percentage of commuters»?', opts: [
            ['«виміряно як відсоток тих, хто їздить на роботу»', 1, 'Саме так: ти називаєш одиницю виміру, якої завдання може не називати.'],
            ['«порівняно з відсотком тих, хто їздить»', 0, 'Це <i>compared with</i>, а не measured as.'],
            ['«загальна кількість тих, хто їздить»', 0, 'Ми говоримо про відсоток, а не про кількість.']] }
        ] },

      { type: 'rewrite', tag: 'Крок 4 · Перепиши і порівняй', tagc: 'blue', title: 'Скажи те саме іншими словами',
        given: 'The bar chart below shows the percentage of commuters in four European cities who used each of four modes of transport to get to work in 2023.',
        task: 'Перепиши речення: <b>1)</b> інше дієслово, <b>2)</b> принаймні два слова-синоніми, <b>3)</b> не копіюй 3 слова поспіль, <b>4)</b> додай назви категорій або міст.',
        models: [
          ['Модель A · compares', 'The bar chart <mark>compares the proportion of commuters</mark> in four European cities — Manchester, Amsterdam, Copenhagen and Warsaw — who <mark>travelled to work by</mark> car, public transport, bicycle or on foot in 2023.'],
          ['Модель B · how', 'The bar chart <mark>illustrates how commuters</mark> in four European cities <mark>got to work</mark> in 2023, <mark>measured as</mark> the percentage who regularly used each of four modes of transport.'],
          ['Модель C · usage', 'The chart <mark>presents usage of</mark> four modes of transport <mark>across</mark> four European cities in 2023.']],
        check: ['Я змінив(ла) дієслово', 'Я замінив(ла) принаймні два слова синонімами', 'Є і ЩО порівнюється, і для кого', 'У моєму реченні немає цифр і висновків'] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The bar chart compares the proportion of commuters in four European cities who regularly used each of four modes of transport in 2023.',
          'The chart illustrates how commuters in four cities got to work in 2023.',
          'The bar chart presents usage of four modes of transport across four European cities.'],
        hint: 'Починай з <b>The bar chart / The chart</b>, потім дієслово з -s, потім ЩО порівнюється.' }
    ] },

  /* ===================== РАУНД 2 ===================== */
  { label: 'Раунд 2', sub: 'менше підказок', graph: 'it',
    words: [['internet usage','користування інтернетом'],['age groups','вікові групи'],['in the previous three months','за останні три місяці'],['in 2010 and 2023','у 2010 і 2023 роках']],
    lead: 'Тепер ДВА роки: 2010 і 2023. У Introduction зміни ще не описуємо, але два роки вже треба назвати. Завдання на іспиті: <i>The bar chart below shows the percentage of people in four age groups in the UK who had used the internet in the previous three months, in 2010 and 2023.</i>',
    blocks: [
      { type: 'choose', tag: 'Крок 1 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Яка Introduction найкраща?', opts: [
            ['The bar chart compares internet usage across four age groups in the UK in 2010 and 2023, measured as the percentage of people who had been online in the previous three months.', 1, 'Повна: вид діаграми, що порівнюється, групи, країна, обидва роки, одиниця виміру.'],
            ['The bar chart shows internet in 2010 and 2023.', 0, 'Граматично слабко й розмито: чия інтернет-активність? Яка саме?'],
            ['The bar chart shows that internet use rose in every age group.', 0, 'Це вже Overview. Introduction не містить висновків.'],
            ['The bar chart shows internet usage in 2010 year and 2023 year.', 0, 'Калька «2010 year»: слово year зайве.']] },
          { q: 'Як найточніше вказати два роки?', opts: [
            ['in 2010 and 2023', 1, 'Є два окремі моменти, тому <i>in … and …</i> найточніше.'],
            ['between 2010 and 2023', 0, '<i>Between</i> натякає на неперервний період. Тут два окремі роки.'],
            ['from 2010 till 2023 years', 0, 'Калька з української: <i>till</i> не вживається в Task 1, а <i>years</i> зайве.']] },
          { q: 'Що означає два роки для мови далі в есе?', opts: [
            ['Тренди й percentage points дозволені: rose, climbed, narrowed', 1, 'Два моменти в часі = можна описувати зміну.'],
            ['Тільки Present Simple, як у першому раунді', 0, 'У першому раунді рік був один. Тепер діаграма показує зміну.'],
            ['Нічого, роки нічого не міняють', 0, 'Саме кількість років вирішує, чи можна писати rose / fell.']] }
        ] },

      { type: 'gap', tag: 'Крок 2 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
          { pre: 'The bar chart ', post: ' internet usage across four age groups in the UK.', ok: ['compares', 'illustrates', 'shows', 'presents', 'depicts'], why: 'Один bar chart: дієслово з -s.' },
          { pre: 'It is measured as the ', post: ' of people who had been online.', ok: ['percentage', 'proportion', 'share', 'number'], why: '<i>the percentage / proportion of people who …</i>.' },
          { pre: 'The data cover two years, 2010 ', post: ' 2023.', ok: ['and'], why: 'Два окремі роки: <i>2010 and 2023</i>.' },
          { pre: 'People are counted if they had used the internet in the ', post: ' three months.', ok: ['previous', 'last', 'past'], why: '<i>in the previous / last three months</i>.' }
        ] },

      { type: 'write', tag: 'Крок 3 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction для цієї діаграми',
        task: 'Подивись на діаграму й напиши 1–2 речення за формулою з початку уроку. Не копіюй завдання.',
        hint: 'The bar chart + <i>compares</i> + <i>internet usage</i> + <i>across four age groups in the UK</i> + <i>in 2010 and 2023</i>.',
        models: [
          ['Модель A', 'The bar chart <mark>compares internet usage across four age groups</mark> in the UK <mark>in 2010 and 2023</mark>, <mark>measured as</mark> the percentage of people who had been online in the previous three months.'],
          ['Модель B', 'The bar chart <mark>illustrates the proportion of people</mark> in four UK age groups who <mark>had used the internet recently</mark>, <mark>comparing</mark> 2010 with 2023.']],
        check: ['Є вид діаграми й дієслово з -s', 'Названо тему своїми словами', 'Є обидва роки', 'Немає цифр і висновків'] },

      { type: 'build', tag: 'Крок 4 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The bar chart compares internet usage across four age groups in the UK in 2010 and 2023.',
          'The chart illustrates the proportion of people who had used the internet in four age groups in 2010 and 2023.'] }
    ] },

  /* ===================== РАУНД 3 ===================== */
  { label: 'Раунд 3', sub: 'майже самостійно', graph: 'ct',
    words: [['average weekly consumption','середнє тижневе споживання'],['measured in cups','виміряно в чашках'],['consumed per week','спожито за тиждень'],['four age groups','чотири вікові групи']],
    lead: 'Один рік (2022), дві серії (кава й чай). Завдання на іспиті: <i>The bar chart below shows the average number of cups of coffee and tea consumed per week by four age groups in Canada in 2022.</i> Спочатку пишеш сам(а), потім порівнюєш.',
    blocks: [
      { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction',
        task: 'Назви обидва напої, групи й одиницю виміру. Року один: <i>in 2022</i>.',
        hint: 'The bar chart + <i>compares</i> + <i>the average weekly consumption of coffee and tea</i> + <i>measured in cups</i> + <i>across four age groups in Canada in 2022</i>.',
        models: [
          ['Модель A', 'The bar chart <mark>compares the average weekly consumption of coffee and tea</mark>, <mark>measured in cups</mark>, <mark>across four age groups</mark> in Canada in 2022.'],
          ['Модель B', 'The chart <mark>illustrates how many cups of coffee and tea</mark> people in four Canadian age groups <mark>drank per week</mark> in 2022.']],
        after: 'Зверни увагу: <i>measured in cups</i> додає одиницю виміру, а два виміри (напої × вікові групи) названо одним реченням.',
        check: ['Є «the bar chart» і дієслово з -s', 'Названо обидва напої й групи', 'Є одиниця виміру (cups)', 'Немає цифр і висновків'] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Перевір себе', qs: [
          { q: 'Яка Introduction найкраща?', opts: [
            ['The bar chart compares the average weekly consumption of coffee and tea, measured in cups, across four age groups in Canada in 2022.', 1, 'Є напої, групи, країна, рік, одиниця виміру.'],
            ['The bar chart shows that coffee is more popular than tea among older Canadians.', 0, 'Це Overview, а не Introduction.'],
            ['The bar chart shows people who drink coffee and tea.', 0, 'Незрозуміло: скільки? Яких груп? Де й коли?']] },
          { q: 'Як сказати «чашок на тиждень»?', opts: [
            ['cups per week', 1, '<i>per week</i> — стійка фраза.'],
            ['cups in a week', 0, 'Не груба помилка, але для одиниці виміру природніше <i>per week</i>.'],
            ['cups for week', 0, 'Немає такого прийменника.']] }
        ] },

      { type: 'build', tag: 'Крок 3 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The bar chart compares the average weekly consumption of coffee and tea across four age groups in Canada in 2022.',
          'The chart illustrates how many cups of coffee and tea Canadians drank per week.'] }
    ] }
  ],

  outro: [
    { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
      '<ul><li>Будувати Introduction: <b>The bar chart + compares + що виміряно + між ким + коли / де</b></li>' +
      '<li>Перефразовувати завдання: <i>shows → compares</i>, <i>spending → expenditure</i>, <i>measured as / in</i></li>' +
      '<li>Називати <b>один рік</b> (in 2023) чи <b>два</b> (in 2010 and 2023): від цього залежить мова далі</li></ul>' +
      '<p class="small" style="margin-top:8px">Далі: Practice · Overview: дві головні історії діаграми без цифр.</p>' }
  ]
};
