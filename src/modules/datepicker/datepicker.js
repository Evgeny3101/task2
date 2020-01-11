import 'air-datepicker/dist/js/datepicker.min.js'

export default class {
  constructor(mainElement, secondElement) {

    //  кнопка принять
    this.applyButton = document.createElement('span');
    this.applyButton.classList.add('datepicker--button','apply');
    this.applyButton.innerText = 'Применить';

    $(mainElement).datepicker({
      range: true,
      multipleDates: true,
      offset: 5,

      Date: new Date(),
      toggleSelected: false,

      showButtonPanel: true,
      clearButton: true,

      prevHtml: '<i class="month-selection__icon material-icons">arrow_back</i>',
      nextHtml: '<i class="month-selection__icon material-icons">arrow_forward</i>',

      navTitles: {
        days: 'MM yyyy',
      },

      onSelect: (date) => {
        const dateArray = date.split(",");

        if (dateArray.length > 1) {
          $(mainElement).val(dateArray[0]);
          $(secondElement).val(dateArray[1]);
        }

        else {
          $(secondElement).val("");
        }
      },


    });


    //  кнопка принять
    $('.datepicker--buttons').append(this.applyButton);

    this.applyButton.addEventListener('click',  () => {

      $(mainElement).datepicker().data('datepicker').hide();

      const dateArray = $(mainElement).val().split(",");
      if (dateArray.length > 1) {
        $(mainElement).val(dateArray[0]);
      }

    }, false);

    //  открывать при нажатии на 2й инпут
    // if(secondElement) {
    //   this.secondField = document.querySelector(secondElement)
    //   this.secondField.addEventListener('click',  () => {
    //     $(mainElement).datepicker().data('datepicker').show();

    //     const dateArray = $(mainElement).val().split(",");
    //     if (dateArray.length > 1) {
    //       $(mainElement).val(dateArray[0]);
    //     }

    //   }, false);
    // }

  }
};
