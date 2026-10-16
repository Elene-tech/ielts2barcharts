(function () {
  var CHK = ['Introduction перефразована (не копія завдання), без цифр', 'Overview: 2 історії, без цифр і причин', 'Body 1: найсильніша група даних, обидві групи в одному реченні', 'Body 2: решта або протилежність, є зв’язка з Body 1', 'Мова відповідає роками: один рік → без rose / fell; два роки → зміни й percentage points', 'Є множник і прислівник під розрив (double, noticeably, substantially)', 'Немає переліку всіх цифр і причин', '150+ слів (ціль 160–175)', 'Встиг(ла) за 20 хвилин'];
  window.LESSON = {
    id: 'bc-08-full-response',
    module: 'Bar Charts',
    title: 'Final Task · Повна відповідь самостійно',
    subtitle: 'Bar Charts · Introduction + Overview + Body 1 + Body 2 на нових діаграмах. Три завдання з різним рівнем підтримки, таймер 20 хвилин.',
    vocab: ['rule', 'intro', 'overview', 'adverbs', 'ratios', 'compare', 'change', 'grouping', 'body-templates', 'traps'],

    intro: [
      { type: 'rule', title: 'План на 20 хвилин', html:
        '<ol style="margin-left:20px"><li><b>3 хв — читання й нотатки</b>: скільки років? Хто лідирує? Два найбільші контрасти? Як згрупувати?</li>' +
        '<li><b>14 хв — письмо</b>: Introduction (1–2 речення) → Overview (2 речення) → Body 1 → Body 2.</li>' +
        '<li><b>3 хв — перевірка</b>: роки й мова, множники, обсяг (160–175 слів, мінімум 150).</li></ol>' +
        '<p class="small" style="margin-top:8px">Три завдання: перше з підказками, друге з однією підказкою, третє як на іспиті. Словник доступний у будь-який момент (кнопка 📚). Моделі відкриваються після того, як ти напишеш власну відповідь.</p>' }
    ],

    rounds: [
    { label: 'Завдання 1', sub: 'із підказками', graph: 'dv',
      lead: 'Один рік (2024), дві групи. Підказки до кожного абзацу відкриваються за потреби.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Household devices, urban vs rural', minutes: 20, minWords: 150, target: '160–175', showAfter: 100,
          prompt: 'The bar chart below shows the percentage of urban and rural households that owned five types of electronic device in 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Скільки років? · лідери · два найбільші контрасти · як групувати…', ua: 'Сортуй пристрої за розривом між urban і rural: де майже порівну, а де найбільший контраст?' },
            { key: 'intro', label: 'Introduction', rows: 2, starter: 'The bar chart compares the percentage of …', words: 'compares · urban and rural households · five types of electronic device · owned' },
            { key: 'overview', label: 'Overview', rows: 3, starter: 'Overall, urban households …, though …', words: 'led in every category · the gap was marginal for · the widest divides appeared for', ua: 'Дві історії без цифр: хто лідирує + де розрив мінімальний і де максимальний. Рік один: Past Simple, без rose / fell.' },
            { key: 'body1', label: 'Body 1', rows: 5, starter: 'Smart TVs were the most commonly owned device …', words: 'broadly similar · noticeably higher · compared with · respectively', ua: 'Smart TV, laptop і tablet: найменші й помірні розриви.' },
            { key: 'body2', label: 'Body 2', rows: 5, starter: 'The sharpest contrasts, however, …', words: 'more than twice the rural figure · against just · the two least common devices', ua: 'Smart speaker і games console: розрив понад удвічі. Починай зі зв’язки.' }],
          models: [
            ['Introduction', 'The bar chart <mark>compares the percentage of urban and rural households</mark> that owned five types of electronic device in 2024.'],
            ['Overview', '<mark>Overall</mark>, urban households <mark>led in every category</mark>, though the gap was <mark>marginal for smart TVs</mark>. <mark>The widest divides</mark>, however, appeared for smart speakers and games consoles.'],
            ['Body 1', 'Smart TVs were the most commonly owned device in both areas, at 78% of urban and 74% of rural households, so the two figures were <mark>broadly similar</mark>. Laptop ownership was <mark>noticeably higher</mark> in urban areas, at 72% <mark>compared with</mark> 58%, while tablets followed a similar pattern, at 55% and 41% <mark>respectively</mark>.'],
            ['Body 2', '<mark>The sharpest contrasts, however</mark>, appeared at the lower end of the chart. Smart speakers were owned by 48% of urban households, <mark>more than twice the rural figure</mark> of 22%, and games consoles by 39%, <mark>against just</mark> 18% in rural areas, which was also more than double. In relative terms, therefore, the urban advantage was greatest for <mark>the two least common devices</mark>.']],
          after: 'Порівнюй рішення, а не слова: чи є в Overview дві історії без цифр? Чи Body 2 починається з контрасту? Чи є множник («more than twice»)? Рік один: жодного rose / fell. Сподобалась фраза: випиши її й використай у наступному завданні.',
          check: CHK }
      ] },

    { label: 'Завдання 2', sub: 'одна підказка', graph: 'ob',
      lead: 'Діаграма має ДВА роки (2015 і 2024): мова змін і percentage points легальні. Єдина підказка: Body 1 = дві молодші групи (вони вже високі й майже на стелі), Body 2 = дві старші групи (наздоганяють), у кінці порівняй розриви.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Online banking, 2015 vs 2024', minutes: 20, minWords: 150, target: '160–175', showAfter: 100, hints: false,
          prompt: 'The bar chart below shows the percentage of adults in four age groups who used online banking in 2015 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Підказка: Body 1 = 18–29 і 30–49, Body 2 = 50–69 і 70+. Що в Overview? Як змінився розрив між найвищою й найнижчою групою?' },
            { key: 'intro', label: 'Introduction', rows: 2 },
            { key: 'overview', label: 'Overview', rows: 3 },
            { key: 'body1', label: 'Body 1', rows: 5 },
            { key: 'body2', label: 'Body 2', rows: 5 }],
          models: [
            ['Introduction', 'The bar chart <mark>compares the percentage of adults</mark> in four age groups who used online banking in 2015 and 2024.'],
            ['Overview', '<mark>Overall</mark>, online banking <mark>grew in popularity in every age group</mark>, becoming the norm for adults under 50 by 2024. <mark>The most dramatic growth</mark>, however, came from the oldest groups, which <mark>had started from far lower levels</mark>.'],
            ['Body 1', 'In 2015, 62% of 18–29 year olds already used online banking, and this figure <mark>rose to</mark> 89% by 2024. The 30–49 group followed a similar trajectory, <mark>climbing from</mark> 50% to 84%, so that for both groups online banking was <mark>effectively mainstream</mark> by the end of the period.'],
            ['Body 2', '<mark>The older groups, by contrast</mark>, grew far faster in proportion. Usage among 50–69 year olds <mark>jumped</mark> from 28% to 66%, <mark>an increase of 38 percentage points</mark>, while the figure for over-70s <mark>nearly quadrupled</mark>, from just 12% to 46%. As a result, the gap between the youngest and oldest groups, 50 points in 2015, <mark>narrowed only slightly to 43 points</mark> by 2024, although the youngest group’s lead shrank from more than five times to just under double.']],
          after: 'Зверни увагу: діаграма має два роки, тому Past Simple, rose / jumped / nearly quadrupled і <i>percentage points</i>. Цікавий момент: розрив у пунктах майже не змінився (50 → 43), але у відношенні скоротився з понад п’ятикратного до менш ніж двократного: саме така деталь показує Band 8.',
          check: CHK }
      ] },

    { label: 'Завдання 3', sub: 'як на іспиті', graph: 'el',
      lead: 'Тільки твої знання й словник. Таймер 20 хвилин. Скільки років? Подумай, перш ніж писати.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Electricity generation, four countries', minutes: 20, minWords: 150, target: '160–175', showAfter: 100, hints: false,
          prompt: 'The bar chart below shows the percentage of electricity generated from three sources in four countries in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Подумай: скільки років? Який «профіль» у кожної країни? Як розділити Body 1 і Body 2?' },
            { key: 'intro', label: 'Introduction', rows: 2 },
            { key: 'overview', label: 'Overview', rows: 3 },
            { key: 'body1', label: 'Body 1', rows: 5 },
            { key: 'body2', label: 'Body 2', rows: 5 }],
          models: [
            ['Introduction', 'The bar chart <mark>compares the percentage of electricity generated from three sources</mark> (renewables, coal and gas) in four countries in 2023.'],
            ['Overview', '<mark>Overall</mark>, each country had a distinct profile: Country A <mark>relied mainly on</mark> renewables, <mark>whereas</mark> coal <mark>dominated</mark> Countries B and C, and Country D had <mark>the most balanced mix</mark>. Gas contributed a <mark>broadly similar share</mark> everywhere.'],
            ['Body 1', 'Country A generated 55% of its electricity from renewables, <mark>the highest renewables figure of the four countries</mark>, while coal accounted for only 20%. <mark>At the opposite extreme</mark>, Country C depended on coal for 60% of its electricity, <mark>the highest figure on the chart</mark> and <mark>three times the proportion in Country A</mark>, with renewables contributing just 15%.'],
            ['Body 2', 'Countries B and D <mark>occupied the middle ground</mark>. Country B generated 45% of its electricity from coal and 30% from renewables, <mark>whereas</mark> Country D had the most balanced profile, at 40% renewables and 30% each for coal and gas. Gas contributed <mark>between 25% and 30%</mark> in all four countries, <mark>the most similar figures</mark> of any source.']],
          after: 'Зверни увагу: рік один (2023), тому всі дієслова статичні: relied, dominated, contributed, depended. Групування за «профілем» країн (екстреми A і C / середина B і D) краще за групування за джерелом, бо воно показує «хто проти кого».',
          check: CHK }
      ] }
    ],

    outro: [
      { type: 'rule', title: '🎯 Модуль Bar Charts завершено', html:
        '<p>Якщо більшість пунктів чек-листа — «так», ти готовий(а) до наступного типу завдань. Якісь «ні»? Повернись до відповідного уроку: це нормальна частина навчання.</p>' +
        '<p class="small" style="margin-top:8px">Скачай свої відповіді кнопкою «📝 Мої відповіді» й покажи їх викладачеві.</p>' }
    ]
  };
})();
