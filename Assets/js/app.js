// sets current day in jumbotron using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

const timeBlocks = (() => {
  //current hour from moment.js
  const nowHour = moment().hours();

  // Loads tasks from local storage
  const tasks = (() => {
    $('textarea').each(function (i, val) {
      const btnId = $(this).next().attr('id')
      $(this).val(localStorage.getItem(btnId))
    })
  })()

  // Changes textarea className to color code tasks depending on the time 
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

  // saves task when save button is clicked 
  const saveTask = (() => {
    $('button').on('click', function () {
      const textVal = $(this).prev().val()
      const btnId = $(this).attr('id')
      localStorage.setItem(btnId, textVal)
    })
  })()
})()










