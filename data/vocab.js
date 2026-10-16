/* Словник Module 3 · Bar Charts. Рівень Band 7.0–7.5.
   tier: 'base' = Основа (достатньо для Band 7), 'extra' = Додатково (за бажанням).
   cols — заголовки колонок; rows — рядки таблиці. id використовується в lesson.vocab для "слів цього уроку". */
window.VOCAB = [
{ id:'rule', tier:'base', title:'Головне правило: один рік чи два?', cols:['Ситуація','Мова','Приклад'], rows:[
  ['ОДИН рік на діаграмі (2022, 2023, 2024)','Past Simple і статичні дієслова: was, spent, recorded, led. ЖОДНИХ rose / fell / increased / overtook.','Men spent more time on gaming than women did.'],
  ['ДВА роки (2010 і 2023)','Мова змін дозволена: rose, climbed, jumped, narrowed. Порівнюй і розриви між роками.','Internet use rose in every age group.'],
  ['Групи (чоловіки / жінки, міста, країни)','Це не час. Тільки порівняння, навіть якщо групи йдуть «зліва направо».','Coffee was more popular among older groups.'],
  ['Як перевірити','Порахуй роки в заголовку й у легенді. Один рік = знімок, два роки = історія.','2022 = знімок. 2010 і 2023 = історія.'],
  ['Статичний «патерн»','Замість «rose with age» пиши «was higher among older groups».','Coffee consumption was higher among older groups.']
]},
{ id:'intro', tier:'base', title:'Introduction: як перефразувати завдання', cols:['Фраза','Переклад','Приклад'], rows:[
  ['The bar chart compares …','найточніше дієслово для bar chart','The bar chart compares internet usage across four age groups in the UK in 2010 and 2023.'],
  ['illustrates · presents · depicts · outlines','синоніми: не повторюй одне й те саме','The bar chart illustrates how three age groups allocated their budgets.'],
  ['the percentage / proportion / share of … who …','що саме виміряно','the percentage of urban and rural households that owned five devices'],
  ['measured in / measured as','одиниці виміру','measured in cups per week · measured as the percentage of people'],
  ['across four age groups · in four cities','охоплює групи','…across four age groups in Canada…'],
  ['categories / types / modes / sources','категорії','four modes of transport · three energy sources'],
  ['expenditure · outlay · the amount spent on','для грошей, замість spending','average monthly expenditure'],
  ['the data show (не shows!)','data — множина','The data show the proportion of …'],
  ['Не пиши','цифри · висновки · копія завдання','']
]},
{ id:'verbs', tier:'base', title:'Дієслова замість «had» і «spent»', cols:['Дієслово','Модель','Приклад'], rows:[
  ['led (in) · was the leader in','X led in Y','Men led in gaming and sport.'],
  ['recorded · posted (формально)','X recorded the highest / lowest figure','Manchester recorded the highest car usage, at 52%.'],
  ['accounted for · made up','X accounted for N% of …','Coal accounted for 60% of electricity in Country C.'],
  ['dominated','X dominated (category)','Coal dominated electricity generation in Countries B and C.'],
  ['outspent (тільки гроші)','X outspent Y by …','The oldest group outspent the others on cinema.'],
  ['allocated · devoted … to','X devoted N hours to Y','Men devoted 10 hours a week to gaming.'],
  ['stood out for','X stood out for Y','Copenhagen stood out for cycling, at 45%.'],
  ['attracted','X attracted the highest expenditure','Eating out attracted the highest expenditure.'],
  ['relied on · depended on','X relied heavily on Y','Country A relied mainly on renewables.'],
  ['Іменники','the figure for · the proportion · the amount allocated to · usage · ownership','…more than twice the figure for Copenhagen.']
]},
{ id:'adverbs', tier:'base', title:'Прислівник під розрив (порівняння двох стовпчиків)', cols:['Розрив','Прислівники','Приклад'], rows:[
  ['до 15%','slightly · marginally · a little','Smart TV ownership was slightly higher in urban areas (78% vs 74%).'],
  ['15–30%','noticeably · somewhat','Laptop ownership was noticeably higher in urban areas (72% vs 58%).'],
  ['30–60%','considerably · significantly','Tablets were considerably more common in urban areas (55% vs 41%).'],
  ['понад 60%','substantially · markedly · far','Manchester’s car usage (52%) was substantially higher than Amsterdam’s (31%).'],
  ['Як рахувати','(більше − менше) ÷ менше. 52 − 31 = 21; 21 ÷ 31 ≈ 68%, тобто substantially / markedly.',''],
  ['Одна фраза','Прислівник + comparative (не двічі): far higher, не «more higher».',''],
  ['Правило','Неправильний прислівник = неточний звіт. Слабкий розрив не називай markedly, а великий не називай slightly.','']
]},
{ id:'ratios', tier:'base', title:'Множники: співвідношення → фраза', cols:['Більше ÷ менше','Фраза','Приклад'], rows:[
  ['1.75–1.95','nearly double · almost twice as high as','7 hours vs 4 (1.75): nearly double the male figure'],
  ['2.0','exactly double · twice as high as','8 hours vs 4 (2.0): exactly twice the female figure'],
  ['2.05–2.3','just over double · more than double','48% vs 22% (2.18): more than double the rural figure'],
  ['2.3–2.7','well over double · more than twice','52% vs 22% (2.36): more than twice the figure for Copenhagen'],
  ['2.7–2.95','nearly three times','38 vs 14 (2.71): nearly three times as high'],
  ['3.0','exactly three times · three times','60% vs 20% (3.0): three times the proportion in Country A'],
  ['3.05–3.3','just over three times · more than three times','10 hours vs 3 (3.33): more than three times the female figure'],
  ['3.4–3.6','nearly three and a half times','62 vs 18 (3.44): nearly three and a half times'],
  ['4× і більше','four / five times the figure for …','45% vs 9% (5.0): five times the figure for Warsaw'],
  ['менше за 1.7×','без множника: прислівник + comparative або «x percentage points higher»','52% vs 31%: substantially higher'],
  ['Правило','Спочатку ПОДІЛИ більше на менше, потім обирай фразу. Точне співвідношення = без «nearly». Трохи менше = nearly / almost. Трохи більше = just over / more than.',''],
  ['Заборонено','✗ two times more · ✗ in two times bigger · ✗ twice more → ✓ twice as much / twice as high / double the figure for','']
]},
{ id:'compare', tier:'base', title:'Контраст і зв’язки між групами в одному реченні', cols:['Функція','Фрази','Приклад'], rows:[
  ['Середина речення','whereas · while · against · compared with / to','Men devoted 10 hours to gaming, whereas women devoted just 3.'],
  ['Початок речення','In contrast, … · By contrast, … · Unlike X, Y …','In contrast, reading was the one activity where women led.'],
  ['Дієслово з порівнянням','outspent · outstripped · led','Men led in sport, at 8 hours against 4 for women.'],
  ['Суперлатив на всю діаграму','the highest figure on the chart · of all four cities · the most popular activity for both sexes','Manchester recorded the highest car usage of all four cities.'],
  ['Виняток','the one category where … · the only activity in which …','Reading was the only activity in which women spent more time.'],
  ['Схожість','broadly similar · almost identical · closely matched · ranging from X to Y','Socialising was broadly similar for both sexes.'],
  ['Обидві групи','in both areas · for both sexes · across all four countries','Smart TVs were the most common device in both areas.'],
  ['Правило','Одне речення = обидві групи. «A spent £62. B spent £8.» — Band 5. «A spent £62, whereas B spent just £8.» — Band 7.','']
]},
{ id:'fractions', tier:'base', title:'Частки замість відсотків (коли діаграма про % від цілого)', cols:['Відсоток','Фраза','Примітка'], rows:[
  ['~10%','about a tenth','one in ten'],
  ['~25%','a quarter · almost a quarter (24%) · roughly a quarter (26%)',''],
  ['~33%','a third · nearly a third (32%)',''],
  ['~50%','half · just under half (49%) · just over half (51%)',''],
  ['~75%','three quarters · nearly three quarters (73%) · just over three quarters (79%)',''],
  ['85%+','a very large majority · more than four fifths','«Overwhelming majority» лише для 75% і більше'],
  ['Правило','Мішай цифри й дроби в одному абзаці, але не заміняй цифри повністю.','']
]},
{ id:'pp', tier:'base', title:'Різниця відсотків і «на скільки»', cols:['Фраза','Значення','Приклад'], rows:[
  ['a rise of N percentage points','зростання на N відсоткових пунктів','a rise of 29 percentage points (61% → 90%)'],
  ['a gap of N points','різниця в N пунктів','a 62-point gap between the youngest and oldest groups'],
  ['by N percentage points','на N пунктів','rose by 34 percentage points'],
  ['at 30%','конкретний рівень','Internet use stood at 30%'],
  ['Правило','Різниця двох відсотків — це percentage points, не «percent».','✗ grew by 29 percent (61→90%) → ✓ a rise of 29 percentage points']
]},
{ id:'change', tier:'base', title:'Мова змін (ТІЛЬКИ коли два роки на діаграмі)', cols:['Розмір зміни','Дієслова','Приклад'], rows:[
  ['дрібна (до 8 пунктів)','edged up · rose slightly · grew marginally','Use among 16–24 year olds edged up from 92% to 99%.'],
  ['помірна (10–15)','climbed · rose · grew','The 25–44 figure climbed from 85% to 97%.'],
  ['велика (25–40)','jumped · rose sharply · surged','Usage among 45–64 year olds jumped from 61% to 90%.'],
  ['у кілька разів','more than doubled · nearly quadrupled · soared','The 65+ figure more than doubled, from 30% to 64%.'],
  ['Розрив між групами','the gap narrowed / widened from X to Y points','The 62-point gap narrowed to 35 points.'],
  ['Ранішій стан','had started from far lower levels (Past Perfect)','The oldest groups had started from far lower levels.'],
  ['Лідер не змінився','remained the highest · stayed ahead','The 16–24 group remained the highest in both years.'],
  ['Не для одного року','✗ overtook · ✗ rose with age · ✗ went up — на діаграмі за один рік це неможливо','']
]},
{ id:'overview', tier:'base', title:'Overview для bar charts: дві історії', cols:['Функція','Фрази','Приклад'], rows:[
  ['Початок','Overall, … · It is clear that … · What stands out is that …','Overall, men spent more time on most activities.'],
  ['Історія 1: лідер','X was the most popular … for both groups · X dominated …','Watching TV was the most popular activity for both sexes.'],
  ['Історія 2: контраст','The widest divides appeared in … · X led in A, whereas Y led in B · patterns diverged most sharply on …','Reading was the one activity where women clearly led.'],
  ['Два «табори»','X relied on A, whereas Y relied on B','Manchester and Warsaw relied on the car, whereas Amsterdam and Copenhagen relied on public transport and cycling.'],
  ['Два роки: універсальний тренд','X rose in every group · the most dramatic growth occurred among …','Internet use rose in every age group.'],
  ['Не пиши','цифри · причини · «In conclusion» · тренди для одного року','']
]},
{ id:'grouping', tier:'base', title:'Як групувати: три принципи', cols:['Принцип','Коли','Приклад розподілу Body 1 / Body 2'], rows:[
  ['За поведінкою груп','Група А лідирує в одних категоріях, група Б — в інших','Men lead: TV, sport, gaming / Women lead: reading + socialising (схожі)'],
  ['За «табором»','Групи (міста, країни) схожі між собою характером','Manchester + Warsaw (car) / Amsterdam + Copenhagen (public transport, cycling)'],
  ['За серією','Дві серії (кава / чай) з різною формою','Body 1 = coffee / Body 2 = tea'],
  ['За змінами (два роки)','Одні групи вже високі, інші наздоганяють','Under-45s (near-universal) / older groups (steepest growth)'],
  ['Рамки для Body 2','The sharpest contrasts, however, … · In contrast, … · The one category where … · broadly similar across …',''],
  ['Правило','Перевір: моє ділення — це «хто проти кого?», а не «зліва направо по осі X».','']
]},
{ id:'approx', tier:'base', title:'Приблизні значення', cols:['Фраза','Значення','Приклад'], rows:[
  ['approximately · about · around · roughly','приблизно','roughly a tenth'],
  ['just over / just under','трохи більше / менше','just over half'],
  ['nearly · almost','майже','almost double'],
  ['well over / well under','значно більше / менше','well under a quarter'],
  ['Правило','Для точних цифр з діаграми приблизники не потрібні: пиши 52%, а не «about 52%».','']
]},
{ id:'body-templates', tier:'base', title:'Шаблони речень для Body', cols:['Тип','Шаблон','Приклад'], rows:[
  ['A · лідер + порівняння','[Category] attracted / recorded the highest [noun], with [group] at [figure], [adverb] more than [figure] and [figure] for the others.','Manchester recorded the highest car usage, at 52%, substantially more than Amsterdam’s 31%.'],
  ['B · множник','The starkest contrast appeared in [category]: [group A] [verb] [figure], [multiplier] the [group B] figure of [figure].','The starkest contrast appeared in gaming: men spent 10 hours, more than three times the female figure of 3.'],
  ['C · переворот патерну','In contrast, [category] showed a reversed pattern: [group] [verb] [figure], [adverb] higher than [figure] for [group].','Reading showed a reversed pattern: women spent 7 hours against 4 for men.'],
  ['D · схожість','[Category] was broadly similar across the groups, ranging from [low] to [high].','Gas was broadly similar, ranging from 25% to 30%.'],
  ['Два роки: старт → фініш','In [year1], [X] stood at [A], but by [year2] it had [verb] to [B].','In 2010, 30% of over-65s used the internet; by 2023 the figure had risen to 64%.'],
  ['Два роки: розрив','The [N]-point gap between [A] and [B] narrowed / widened to [M] points.','The 62-point gap narrowed to 35 points.'],
  ['Правило','Два однакові шаблони підряд — це штамп. Міняй дієслова: attracted → recorded → posted.','']
]},
{ id:'traps', tier:'base', title:'Пастки для україномовних', cols:['✗ Неправильно','✓ Правильно','Чому'], rows:[
  ['two times more','twice as much / twice as high','калька «у два рази»'],
  ['in two times bigger','nearly double / twice as high','калька «в рази»'],
  ['more bigger · more higher','far higher · considerably bigger','подвійний comparative'],
  ['the most biggest amount','the largest amount / the highest figure','подвійний superlative'],
  ['spent for video games','spent on video games','spend + on'],
  ['spending rose with age (2022)','spending was higher among older groups','один рік: без трендів'],
  ['coffee overtook tea (діаграма за один рік)','coffee was the more popular drink from the 25–39 group onwards','overtook = зміна в часі'],
  ['grew by 29 percent (61% → 90%)','a rise of 29 percentage points','різниця відсотків = пункти'],
  ['the chart shows us','the chart shows','«нам» не потрібне'],
  ['the biggest slice (bar chart)','the highest bar / the largest category','slice — про pie chart'],
  ['A spent more, and B spent less','A spent £62, whereas B spent just £8','список без зв’язки'],
  ['The data shows','The data show','data — множина'],
  ['eight times (62 ÷ 8 = 7.75)','nearly eight times','чесне округлення'],
  ['In conclusion, men prefer gaming.','Overall, men led in gaming.','власна думка не потрібна']
]},
{ id:'extra-lexis', tier:'extra', title:'Додатково · Band 8 (за бажанням)', cols:['Слова','Значення','Коли вживати'], rows:[
  ['dwarfed · dwarfing','«меркне» поруч із','коли одна цифра в рази більша за іншу'],
  ['a negligible …','мізерний','для дуже малих цифр поруч із великими'],
  ['diverged most sharply on …','найбільше розійшлися на …','Overview: найбільший контраст'],
  ['strikingly opposite tendencies','разюче протилежні тенденції','коли групи показують дзеркальну картину'],
  ['the starkest contrast','найрізкіший контраст','суперлатив для головного контрасту'],
  ['by a substantial margin','з великим відривом','лідер далеко попереду'],
  ['closely matched','майже рівні','схожість двох груп'],
  ['outstripped','випередив','рідкісніший синонім outspent / exceeded']
]}
];
