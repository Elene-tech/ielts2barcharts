/* Діаграми Module 3 (Bar Charts). Один раз описані тут: використовуються в усіх уроках.
   bars.cats — категорії по осі X; bars.series[] — групи (кольорові стовпчики), values у тому ж порядку, що й cats.
   max — верх осі Y (беремо трохи більше за найбільше значення), step — крок сітки. */
(function () {
  var C = { blue: '#2E5A88', orange: '#B45F06', green: '#4A7C59', pink: '#C94F7C' };
  window.GRAPHS = {
    /* Практика · один рік, дві групи, п’ять категорій (Present/Past без трендів) */
    lg: {
      name: 'Leisure hours by gender', kind: 'static',
      title: 'Weekly Leisure Time by Activity and Gender, UK, 2022',
      svgTitle: 'Weekly leisure hours by gender, UK, 2022',
      bars: { yLabel: 'hours per week', max: 16, step: 5, suffix: '',
        cats: ['Watching TV', 'Reading', 'Sport', 'Socialising', 'Gaming'],
        series: [{ name: 'Men', color: C.blue, values: [15, 4, 8, 9, 10] }, { name: 'Women', color: C.orange, values: [13, 7, 4, 8, 3] }] }
    },
    /* Практика · ДВА роки, чотири вікові групи (тренди дозволені) */
    it: {
      name: 'Internet use, 2010 vs 2023', kind: 'time',
      title: 'Internet Use by Age Group, UK, 2010 and 2023',
      svgTitle: 'Internet usage by age group, UK, 2010 and 2023',
      bars: { yLabel: '% who had used the internet in the last 3 months', max: 110, step: 20, suffix: '%',
        cats: ['16–24', '25–44', '45–64', '65+'],
        series: [{ name: '2010', color: C.blue, values: [92, 85, 61, 30] }, { name: '2023', color: C.orange, values: [99, 97, 90, 64] }] }
    },
    /* Практика · один рік, чотири групи (міста), чотири категорії */
    tr: {
      name: 'Commuting in four cities', kind: 'static',
      title: 'Modes of Transport Used to Commute in Four European Cities, 2023',
      svgTitle: 'Transport used to commute in four European cities, 2023',
      bars: { yLabel: '% of commuters regularly using each mode', max: 60, step: 20, suffix: '%',
        cats: ['Car', 'Public transport', 'Bicycle', 'Walking'],
        series: [{ name: 'Manchester', color: C.blue, values: [52, 38, 22, 14] }, { name: 'Amsterdam', color: C.orange, values: [31, 41, 28, 24] },
                 { name: 'Copenhagen', color: C.green, values: [22, 28, 45, 18] }, { name: 'Warsaw', color: C.pink, values: [48, 25, 9, 30] }] }
    },
    /* Практика · один рік, дві «серії» (кава / чай) за віком */
    ct: {
      name: 'Coffee and tea', kind: 'static',
      title: 'Weekly Coffee and Tea Consumption by Age Group, Canada, 2022',
      svgTitle: 'Weekly coffee and tea consumption by age group, Canada, 2022',
      bars: { yLabel: 'cups per week', max: 16, step: 5, suffix: '',
        cats: ['18–24', '25–39', '40–54', '55–70'],
        series: [{ name: 'Coffee', color: C.blue, values: [7, 12, 15, 13] }, { name: 'Tea', color: C.orange, values: [11, 9, 8, 10] }] }
    },
    /* Практика · один рік, час онлайн */
    mo: {
      name: 'Time online', kind: 'static',
      title: 'Daily Minutes Online by Activity and Age Group, 2024',
      svgTitle: 'Daily minutes online by activity and age group, 2024',
      bars: { yLabel: 'minutes per day', max: 110, step: 20, suffix: '',
        cats: ['Social media', 'Video streaming', 'Online shopping', 'News'],
        series: [{ name: '18–29 year olds', color: C.blue, values: [95, 80, 35, 20] }, { name: '50–65 year olds', color: C.orange, values: [45, 60, 40, 35] }] }
    },
    /* Фінал 1 · один рік, з підказками */
    dv: {
      name: 'Household devices', kind: 'static',
      title: 'Households Owning Five Devices, Urban and Rural Areas, 2024',
      svgTitle: 'Households owning five devices, urban vs rural, 2024',
      bars: { yLabel: '% of households', max: 90, step: 20, suffix: '%',
        cats: ['Smart TV', 'Laptop', 'Tablet', 'Smart speaker', 'Games console'],
        series: [{ name: 'Urban', color: C.blue, values: [78, 72, 55, 48, 39] }, { name: 'Rural', color: C.orange, values: [74, 58, 41, 22, 18] }] }
    },
    /* Фінал 2 · ДВА роки, одна підказка */
    ob: {
      name: 'Online banking', kind: 'time',
      title: 'Adults Using Online Banking, by Age Group, 2015 and 2024',
      svgTitle: 'Adults using online banking, 2015 and 2024',
      bars: { yLabel: '% of adults', max: 110, step: 20, suffix: '%',
        cats: ['18–29', '30–49', '50–69', '70+'],
        series: [{ name: '2015', color: C.blue, values: [62, 50, 28, 12] }, { name: '2024', color: C.orange, values: [89, 84, 66, 46] }] }
    },
    /* Фінал 3 · один рік, як на іспиті */
    el: {
      name: 'Electricity sources', kind: 'static',
      title: 'Electricity Generation by Source in Four Countries, 2023',
      svgTitle: 'Electricity generation by source, four countries, 2023',
      bars: { yLabel: '% of electricity generated', max: 70, step: 20, suffix: '%',
        cats: ['Country A', 'Country B', 'Country C', 'Country D'],
        series: [{ name: 'Renewables', color: C.blue, values: [55, 30, 15, 40] }, { name: 'Coal', color: C.orange, values: [20, 45, 60, 30] }, { name: 'Gas', color: C.green, values: [25, 25, 25, 30] }] }
    }
  };
})();
