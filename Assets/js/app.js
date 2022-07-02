// sets current day in jumbotron using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

const timeBlocks = (() => {
  //current hour from moment.js
  const nowHour = moment().hours()
  console.log(nowHour)

  //changes textarea className dependant on nowHour variable value
  const taskStatus = (() => {
    $('textarea').each(function () {
      if ($(this).attr('value') < nowHour) {
        $(this).addClass('past')
      } else if ($(this).attr('value') > nowHour) {
        $(this).addClass('future')
      } else {
        $(this).addClass('present')
      }
    })
  })()

  $('button').on('click', function () {
    var textVal = $(this).prev().val();
    var btnId = $(this).attr('id');
    //console.log(btnId)
    localStorage.setItem(btnId, textVal);
  })
  
  $('textarea').each(function (i, val) {
    console.log($(this))
    var btnId = $(this).next().attr('id')
    $(this).val(localStorage.getItem(btnId))
  })

})()


// something that i can use the buttons but only triggers inside the div their in.









