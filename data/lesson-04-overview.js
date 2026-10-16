window.LESSON = {
  id: 'bc-04-overview',
  module: 'Bar Charts',
  title: 'Practice · Overview',
  vocab: ['rule', 'overview', 'compare', 'change'],
  subtitle: 'Bar Charts · знаходимо дві головні історії діаграми й записуємо їх 1–2 реченнями без цифр.',

  intro: [
    { type: 'rule', title: 'Overview: формула', html:
      '<p>Overview — це <b>2 «історії»</b>, записані <b>без цифр</b> (1–2 речення, після Introduction). Це найважливіший абзац: без нього Task Achievement не вище Band 5.</p>' +
      '<ul><li><b>Історія 1</b> — хто лідирує загалом (яка група, яка категорія).</li>' +
      '<li><b>Історія 2</b> — найгостріший контраст: де групи розійшлися найбільше, де патерн перевернувся, де є виняток.</li>' +
      '<li>Фрази: <i>Overall, … , whereas …</i> · <i>The widest divides appeared in …</i> · <i>X was the one category where …</i></li>' +
      '<li>Не пиши: цифри, причини, свою думку, «In conclusion».</li></ul>' },
    { type: 'rule', title: '⚠ Головне правило bar charts: порахуй роки!', html:
      '<p><b>Один рік</b> (2022, 2023, 2024) → діаграма це «знімок». Пиши Past Simple і <b>статичні</b> дієслова: <i>was, led, spent</i>. <b>Жодних</b> <s>rose, fell, increased, overtook</s>. Замість «rose with age» → <i>was higher among older groups</i>.</p>' +
      '<p><b>Два роки</b> (2010 і 2023) → зміни реальні. Пиши Past Simple і мову змін: <i>rose in every group</i>, <i>the most dramatic growth</i>.</p>' },
    { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
      ['Overall, men spent 10 hours on gaming and women spent 3 hours.', 'Цифри — для Body. Overview їх не містить.', 'Overall, men spent far more time on gaming and sport, whereas reading was the one activity where women led.'],
      ['Overall, men’s gaming time rose compared with women’s.', 'Діаграма за ОДИН рік (2022): rose неможливе. Це різниця між групами, а не зміна.', 'Overall, men devoted far more time to gaming than women did.'],
      ['Overall, men prefer gaming because games are designed for them.', 'Причина, якої немає на діаграмі. Task 1 описує тільки дані.', 'Overall, gaming was the activity where men led by the widest margin.']
    ] }
  ],

  rounds: [
  /* ===================== РАУНД 1 ===================== */
  { label: 'Раунд 1', sub: 'з підказками', graph: 'lg',
    words: [['the most popular activity for both sexes','найпопулярніше заняття для обох статей'],['led in','лідирував у'],['the one activity where','єдине заняття, де'],['whereas','тоді як']],
    lead: 'Один рік (2022), дві групи (чоловіки й жінки). Past Simple, жодних дієслів руху. Усі підказки відкриті.',
    blocks: [
      { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
          ['link', 'Overall,'], ['type', 'watching TV was the most popular activity for both sexes,'], ['verb', 'whereas'], ['what', 'gaming and sport were the activities where men led by the widest margin'], '.' ],
        legend: [['link','вступне слово'],['type','історія 1: лідер для обох'],['verb','сполучник контрасту'],['what','історія 2: найбільший контраст']],
        note: 'Цифр немає, дієслів руху теж: рік один, тому <i>was</i> і <i>led</i>. «Найбільший розрив» бачимо в gaming (10 vs 3) і sport (8 vs 4).' },

      { type: 'pick', tag: 'Крок 2 · Знайди дві історії', tagc: 'purple', title: 'Що має увійти в Overview?', need: 2, opts: [
          ['Watching TV was the most popular activity for both men and women.', 1, 'Лідер для обох груп: історія 1.'],
          ['Men led in gaming and sport, whereas reading was the one activity where women clearly led.', 1, 'Найбільший контраст і виняток: історія 2.'],
          ['Men spent 10 hours a week on gaming.', 0, 'Цифра однієї категорії — для Body.'],
          ['Men prefer gaming because games are designed for them.', 0, 'Причина, якої немає на діаграмі.'],
          ['Women spent 7 hours on reading.', 0, 'Перелік чисел — це переказ, а не огляд.'],
          ['Men’s gaming time rose compared with women’s.', 0, 'Рік один (2022): rose неможливе. Це різниця між групами.']] },

      { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', bank: ['was', 'more', 'where', 'similar', 'whereas'], items: [
          { pre: 'Overall, watching TV ', post: ' the most popular activity for both sexes.', ok: ['was'], why: 'Один рік (2022) → Past Simple: <i>was</i>.' },
          { pre: 'Men spent far ', post: ' time on gaming than women.', ok: ['more'], why: '<i>far more … than</i>: розрив понад 200% → far / markedly + comparative.' },
          { pre: 'Reading was the one activity ', post: ' women clearly led.', ok: ['where', 'in which'], why: '<i>the one activity where / in which</i>: виняток.' },
          { pre: 'Socialising was broadly ', post: ' for both sexes.', ok: ['similar', 'equal', 'comparable'], why: '<i>broadly similar</i> — нічия без цифр.' }
        ] },

      { type: 'choose', tag: 'Крок 4 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, watching TV was the most popular activity for both sexes, but men spent far more time on gaming and sport, whereas reading was the one activity where women led.', 1, 'Дві історії, без цифр, Past Simple.'],
            ['Overall, men spent 10 hours on gaming, while women spent 7 hours on reading.', 0, 'Цифри. Їх місце — у Body paragraphs.'],
            ['In conclusion, men play more video games because they have more free time.', 0, 'Власна думка й причина. Task 1 цього не оцінює.'],
            ['Overall, men’s leisure time rose in gaming and fell in reading.', 0, 'Рік один: rose і fell — зміна в часі, а діаграма показує різницю між групами.']] },
          { q: 'Діаграма за 2022 рік. Яке речення правильне?', opts: [
            ['Men spent more time on gaming than women did.', 1, 'Статичне порівняння, Past Simple.'],
            ['Men’s gaming time rose compared with women’s.', 0, 'Rose означає зміну в часі: рік один.'],
            ['Gaming increased for men.', 0, 'Increased теж потребує двох моментів часу.']] },
          { q: 'Яка активність єдина, де жінки лідирували?', opts: [
            ['Reading (7 годин проти 4)', 1, 'У socialising чоловіки 9, жінки 8; у TV 15 і 13; у sport 8 і 4; у gaming 10 і 3.'],
            ['Socialising', 0, 'Socialising: чоловіки 9, жінки 8. Майже порівну, але чоловіки трохи попереду.'],
            ['Watching TV', 0, 'TV: чоловіки 15, жінки 13.']] }
        ] },

      { type: 'rewrite', tag: 'Крок 5 · Перепиши і порівняй', tagc: 'blue', title: 'Підвищ рівень до Band 7',
        given: 'Men spent 10 hours on gaming and women spent 3 hours. Women spent 7 hours on reading and men spent 4.',
        task: 'Перепиши як Overview: почни з <i>Overall,</i>, прибери цифри, додай сполучник контрасту й слово, що описує розмір розриву (far / markedly).',
        models: [
          ['Модель A', '<mark>Overall</mark>, men spent <mark>far more</mark> time on gaming, <mark>whereas</mark> reading was <mark>the one activity where</mark> women led.'],
          ['Модель B', '<mark>The widest divide appeared in</mark> gaming, which men dominated, <mark>while</mark> women spent more time than men on reading only.']],
        after: 'Зверни увагу: цифри (10, 3, 7, 4) зникли, а історія залишилась: gaming — найбільший розрив, reading — виняток.',
        check: ['Є Overall або схожа фраза', 'Немає цифр', 'Є сполучник контрасту', 'Немає дієслів руху (rose, increased)'] },

      { type: 'build', tag: 'Крок 6 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, watching TV was the most popular activity for both sexes.',
          'Men spent far more time on gaming than women did.',
          'Reading was the one activity where women clearly led.'] }
    ] },

  /* ===================== РАУНД 2 ===================== */
  { label: 'Раунд 2', sub: 'менше підказок', graph: 'it',
    words: [['rose in every age group','зріс у кожній віковій групі'],['the most dramatic growth','найдраматичніше зростання'],['had started from far lower levels','починали з набагато нижчого рівня'],['almost universal','майже всеохоплюючий']],
    lead: 'Тепер ДВА роки: 2010 і 2023. Мова змін повертається: rose, grew, the most dramatic growth. Цифр у Overview все одно немає.',
    blocks: [
      { type: 'pick', tag: 'Крок 1 · Знайди дві історії', tagc: 'purple', title: 'Що має увійти в Overview?', need: 2, opts: [
          ['Internet use rose in every age group, and by 2023 it was almost universal among under-45s.', 1, 'Універсальний тренд: історія 1 (99% і 97% у молодших).'],
          ['The most dramatic growth occurred among the oldest groups, which had started from far lower levels.', 1, 'Хто змінився найсильніше: історія 2.'],
          ['Usage among 16–24 year olds was 92% in 2010.', 0, 'Цифра — для Body.'],
          ['Young people use the internet more because they grew up with it.', 0, 'Причина, якої немає на діаграмі.'],
          ['Internet use fell among over-65s.', 0, 'Неправда: 65+ зросли з 30% до 64%. Перевіряй факти!'],
          ['The figure for over-65s reached 64% in 2023.', 0, 'Деталь із цифрою: для Body.']] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Читаємо уважно', qs: [
          { q: 'Діаграма показує 2010 і 2023. Що це означає для мови?', opts: [
            ['Мова змін дозволена: rose, grew, climbed, jumped, narrowed.', 1, 'Є два моменти в часі, тож зміни реальні.'],
            ['Тільки Present Simple й порівняння, як для діаграм про групи.', 0, 'Те правило діяло для одного року. Тут два.'],
            ['Можна писати will, бо 2023 — недавній рік.', 0, 'Обидва роки — фактичні дані, їх описуємо в минулому часі.']] },
          { q: 'Яке твердження правильне?', opts: [
            ['By 2023 internet use was almost universal among under-45s.', 1, '99% (16–24) і 97% (25–44): майже всі.'],
            ['Internet use stayed the same among over-65s.', 0, 'У 65+ було 30%, стало 64%: зростання.'],
            ['The oldest group had the highest figure in 2023.', 0, 'У 2023 найвищий показник у 16–24 (99%). У 65+ найнижчий (64%).']] },
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, internet use rose in every age group, with the most dramatic growth among the oldest groups, which had started from far lower levels.', 1, 'Дві історії без цифр.'],
            ['Overall, internet use rose from 30% to 64% among over-65s.', 0, 'Цифри — для Body.'],
            ['Overall, older people started using the internet because it became cheaper.', 0, 'Причини та власна думка. Task 1 їх не оцінює.']] }
        ] },

      { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
          { pre: 'Overall, internet use ', post: ' in every age group.', ok: ['rose', 'increased', 'grew', 'went up'], why: 'Два роки → мова змін, Past Simple: <i>rose / grew</i>.' },
          { pre: 'The ', post: ' growth occurred among the oldest groups.', ok: ['most dramatic', 'biggest', 'steepest', 'greatest', 'largest', 'sharpest'], why: '<i>the most dramatic / steepest growth</i>: суперлатив перед іменником.' },
          { pre: 'These groups had ', post: ' from far lower levels.', ok: ['started'], why: '<i>had started</i> — Past Perfect: стан ДО 2010-го, до моменту, який ми описуємо.' },
          { pre: 'By 2023, use was almost ', post: ' among under-45s.', ok: ['universal', 'total', 'complete'], why: '<i>almost universal</i> — 97–99% без цифр.' }
        ] },

      { type: 'write', tag: 'Крок 4 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview (2 речення)',
        task: 'Дві історії: що відбулось у всіх групах + хто змінився найбільше. Без цифр.',
        hint: 'Історія 1: <i>internet use rose in every age group</i>. Історія 2: <i>the most dramatic growth among the oldest groups</i>, які починали з низького рівня.',
        models: [
          ['Модель A', '<mark>Overall</mark>, internet use <mark>rose in every age group</mark>, and by 2023 it was <mark>almost universal among under-45s</mark>. <mark>The most dramatic growth</mark>, however, occurred among the oldest groups, which <mark>had started from far lower levels</mark>.'],
          ['Модель B', 'Usage <mark>grew across the board</mark>, <mark>particularly steeply among</mark> people aged 45 and over, <mark>who had been far less likely</mark> to go online in 2010.']],
        check: ['Є дві історії', 'Немає цифр', 'Немає причин і власної думки', 'Past Simple і мова змін (є два роки)'] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, internet use rose in every age group.',
          'The most dramatic growth occurred among the oldest groups, which had started from far lower levels.'] }
    ] },

  /* ===================== РАУНД 3 ===================== */
  { label: 'Раунд 3', sub: 'майже самостійно', graph: 'ct',
    words: [['considerably more popular among','значно популярніша серед'],['was strongest at the two ends','найсильніший на двох краях'],['the more popular drink','популярніший напій'],['from the 25–39 group onwards','починаючи з групи 25–39']],
    lead: 'Знову один рік (2022), дві «серії» (кава й чай). Past Simple, жодних дієслів руху: «overtook» і «rose with age» тут не можна.',
    blocks: [
      { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview (2 речення)',
        task: 'Знайди дві історії: <b>1)</b> який напій популярніший серед старших груп, <b>2)</b> яка форма в чаю й де кава обганяє чай (статично!). Без цифр.',
        hint: 'Історія 1: <i>coffee was considerably more popular among older groups</i>. Історія 2: <i>tea was strongest at the two ends of the age range</i>; кава була популярнішою у всіх групах, починаючи з 25–39.',
        models: [
          ['Модель A', '<mark>Overall</mark>, coffee was <mark>considerably more popular among the older age groups</mark>, <mark>whereas</mark> tea drinking <mark>was strongest at the two ends of the age range</mark>. Coffee was <mark>the more popular drink in every group from 25–39 upwards</mark>.'],
          ['Модель B', '<mark>Coffee led among</mark> all but the youngest drinkers, <mark>while</mark> tea <mark>was most popular among</mark> 18–24 year olds and, to a lesser extent, the oldest group.']],
        after: 'Зверни увагу: «from 25–39 upwards» — це статичний патерн, а не «overtook». Слово <i>overtook</i> означає зміну в часі.',
        check: ['Є дві історії', 'Немає цифр', 'Немає overtook / rose / fell', 'Past Simple (один рік)'] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Перевір себе', qs: [
          { q: 'Яке твердження правильне для діаграми за 2022 рік?', opts: [
            ['Tea was the more popular drink among 18–24 year olds.', 1, 'У 18–24: чай 11, кава 7.'],
            ['Coffee overtook tea after the 18–24 group.', 0, 'Overtook — дієслово зміни в часі, а діаграма за один рік.'],
            ['Coffee consumption rose with age in every group.', 0, 'Rose: рік один. До того ж у 55–70 кава (13) нижча, ніж у 40–54 (15).']] },
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, coffee was considerably more popular among the older groups, whereas tea drinking was strongest at the two ends of the age range.', 1, 'Дві історії, без цифр, статичні дієслова.'],
            ['Overall, coffee went up with age and tea went down.', 0, 'Тренди при одному році, а ще й неточно: у чаю U-подібна форма.'],
            ['Overall, 40–54 year olds drank 15 cups of coffee.', 0, 'Цифра однієї категорії — для Body.']] }
        ] },

      { type: 'build', tag: 'Крок 3 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, coffee was considerably more popular among the older age groups.',
          'Tea drinking was strongest at the two ends of the age range.'] }
    ] }
  ],

  outro: [
    { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
      '<ul><li>Знаходити <b>2 історії</b>: лідер + найгостріший контраст (або виняток)</li>' +
      '<li>Писати Overview <b>без цифр, без причин і без «In conclusion»</b></li>' +
      '<li>Рахувати роки: <b>один рік</b> → статичні дієслова (was, led), <b>два роки</b> → rose, grew, the most dramatic growth</li></ul>' +
      '<p class="small" style="margin-top:8px">Далі: Practice · Як шукати інформацію на діаграмі: що саме вибрати для Body.</p>' }
  ]
};
