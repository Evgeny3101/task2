$(document).ready( function() {


  let countingMenuArray       = document.querySelectorAll('.dropdown-menu');
  let writingConditionsArray  =  [
    [
      [
        {
          whenTo: 1,
          write: 'взрослый',
        },
        {
          whenTo: Infinity,
          write: 'взрослых',
        },
      ], [
        {
          whenTo: 1,
          write: 'ребенок',
        },
        {
          whenTo: Infinity,
          write: 'детей',
        },
      ], [
        {
          whenTo: 1,
          write: 'младенец',
        },
        {
          whenTo: 4,
          write: 'младенца',
        },
        {
          whenTo: Infinity,
          write: 'младенцев',
        },
      ],
    ], [
      [
        {
          whenTo: 1,
          write: 'спальня',
        },
        {
          whenTo: 4,
          write: 'спальни',
        },
        {
          whenTo: Infinity,
          write: 'спален',
        },
      ], [
        {
          whenTo: 1,
          write: 'кровать',
        },
        {
          whenTo: 4,
          write: 'кровати',
        },
        {
          whenTo: Infinity,
          write: 'кроватей',
        },
      ], [
        {
          whenTo: 1,
          write: 'ванная комната',
        },
        {
          whenTo: 4,
          write: 'ванные комнаты',
        },
        {
          whenTo: Infinity,
          write: 'ванных комнаты',
        },
      ],
    ],
  ];

  for(k = 0; k < countingMenuArray.length; k++) {

    let countMenu             =   countingMenuArray[k];
    let countBtn              =   countMenu.querySelector('.dropdown');
    let countResult           =   countMenu.querySelector('.text-field');
    let menuPlaceholder       =   countMenu.querySelector('.text-field').value;
    let writingConditions     =   writingConditionsArray[k];


    //  открыть, зактрыть


    countBtn.addEventListener('click', switchMenu);
    countMenu.addEventListener('mouseleave', closeMenu);


    function switchMenu() {
      countMenu.querySelector('.dropdown-menu-count').classList.toggle('current');
      countMenu.querySelector('input').classList.toggle('count-active');
    };


    function closeMenu() {
      countMenu.querySelector('.dropdown-menu-count').classList.remove('current');
      countMenu.querySelector('input').classList.remove('count-active');
    };


    //  + и -


    let itemsCount = countMenu.querySelectorAll('.item-count');

    for(i = 0; i < itemsCount.length; i++) {
      let plusBtn = itemsCount[i].querySelector('.item-count__plus-btn');
      let minusBtn = itemsCount[i].querySelector('.item-count__minus-btn');
      let result = itemsCount[i].querySelector('.item-count__result');

      plusBtn.addEventListener('click', plus);
      minusBtn.addEventListener('click', minus);

      function plus() {
        result.innerHTML = Number(result.innerHTML) + 1;

        if (result.innerHTML == 1) minusBtn.classList.remove('btn-deactive');
      };

      function minus() {
        if (result.innerHTML >= 1) result.innerHTML--;

        if (result.innerHTML == 0) minusBtn.classList.add('btn-deactive');
      };

      // при загрузке страницы, добавит стиль btn-deactive
      if (result.innerHTML == 0) minusBtn.classList.add('btn-deactive');

    };


    //  принять и очистить


    countMenu.querySelector('.js-clear').addEventListener('click', clearResult);
    countMenu.querySelector('.js-apply').addEventListener('click', applyResult);


    function clearResult() {
      let items = countMenu.querySelectorAll('.item-count__result');
      let minusBtn = countMenu.querySelectorAll('.item-count__minus-btn');

      for(i = 0; i < items.length; i++) {
        items[i].innerHTML = 0;
        minusBtn[i].classList.add('btn-deactive');
      };

      countResult.value = menuPlaceholder;
    };


    function applyResult() {
      let items = countMenu.querySelectorAll('.item-count__result');
      let result = '';

      for(i = 0; i < items.length; i++) {
        if(items[i].innerHTML == 0) continue;

        for(j = 0; j < writingConditions[i].length; j++) {
          if(items[i].innerHTML <= writingConditions[i][j].whenTo) {
            result += items[i].innerHTML + ' ' + writingConditions[i][j].write + ', ';
            break;
          };
        };
      };

      result = result.slice(0, -2);
      countResult.value = result;
      if(result == '') countResult.value = menuPlaceholder;
      closeMenu();
    };

    // при загрузке страницы, посчитает значение выставленые по умолчаню
    applyResult();

  }

})