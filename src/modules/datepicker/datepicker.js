import 'air-datepicker/dist/js/datepicker.min.js'

function createDatePicker(config, mainField, secondField) {
  const $mainField = $(mainField);
  const $secondField = $(secondField);
  const datepicker = $mainField.datepicker(config).data('datepicker');
  const clearButtonDOM = document.querySelector('span.datepicker--button[data-action="clear"]');

  function onSelect (date) {
    // показать/спрятать кнопку очистить
    if(date) {
      clearButtonDOM.classList.remove('datepicker--button_hide')
    } else {
      clearButtonDOM.classList.add('datepicker--button_hide')
    }

    if(secondField) {
      // выставлять значения во 2й инпут
        const dateArray = date.split(",");

        if (dateArray.length > 1) {
          $mainField.val(dateArray[0]);
          $secondField.val(dateArray[1]);
        } else {
          $secondField.val("");
        }
      }
  }

  datepicker.update('onSelect', onSelect)

  // кнопка принять
  $('.datepicker--buttons').append('<span class="datepicker--button apply">Применить</span>')
  const applyButtonDOM = document.querySelector('span.datepicker--button.apply')

  applyButtonDOM.addEventListener('click',  () => {
    $mainField.datepicker().data('datepicker').hide();

    // если есть 2й инпут выставит одно значение
    if(secondField) {
      const dateArray = $mainField.val().split(",");
      if (dateArray.length > 1) {
        $mainField.val(dateArray[0]);
      }
    }
  }, false);


  if(secondField) {
    //  открыть при нажатии на 2й инпут
    const secondFieldDOM = document.querySelector(secondField)

    $mainField.on('focusin', function(){$(secondFieldDOM).addClass('text-field_checked');})
    .on('focusout', function(){$(secondFieldDOM).removeClass('text-field_checked');})

    $(secondFieldDOM).on('focusin', function(){$mainField.addClass('text-field_checked');})
    .on('focusout', function(){$mainField.removeClass('text-field_checked');});

    secondFieldDOM.addEventListener('click',  () => {
      $mainField.datepicker().data('datepicker').show();

      const dateArray = $mainField.val().split(",");
      if (dateArray.length > 1) {
        $mainField.val(dateArray[0]);
      }

    }, false);
  }


  return datepicker;
}


export default createDatePicker;