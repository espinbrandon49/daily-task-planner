// connected moment.js to p element
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// connect hour to hour class
//let todayHours = moment().hour();
const clockClasses = (() => {
  const nowHour = moment().format('H')
  console.log(nowHour)
  const hourTime9 = (() => {
    if ($('#hourTime9').attr('value') < nowHour) {
      $('#textArea9').addClass('past')
    } else if ($('#hourTime9').attr('value') > nowHour) {
      $('#textArea9').addClass('future')
    } else {
      $('#textArea9').addClass('present')
    }
  })()

  const hourTime10 = (() => {
    if ($('#hourTime10').attr('value') < nowHour) {
      $('#textArea10').addClass('past')
    } else if ($('#hourTime10').attr('value') > nowHour) {
      $('#textArea10').addClass('future')
    } else {
      $('#textArea10').addClass('present')
    }
  })()

  const hourTime11 = (() => {
    if ($('#hourTime11').attr('value') < nowHour) {
      $('#textArea11').addClass('past')
    } else if ($('#hourTime11').attr('value') > nowHour) {
      $('#textArea11').addClass('future')
    } else {
      $('#textArea11').addClass('present')
    }
  })()

  const hourTime12 = (() => {
    if ($('#hourTime12').attr('value') < nowHour) {
      $('#textArea12').addClass('past')
    } else if ($('#hourTime12').attr('value') > nowHour) {
      $('#textArea12').addClass('future')
    } else {
      $('#textArea12').addClass('present')
    }
  })()

  const hourTime13 = (() => {
    if ($('#hourTime13').attr('value') < nowHour) {
      $('#textArea13').addClass('past')
    } else if ($('#hourTime13').attr('value') > nowHour) {
      $('#textArea13').addClass('future')
    } else {
      $('#textArea13').addClass('present')
    }
  })()

  const hourTime14 = (() => {
    if ($('#hourTime14').attr('value') < nowHour) {
      $('#textArea14').addClass('past')
      console.log('past')
    } else if ($('#hourTime14').attr('value') > nowHour) {
      $('#textArea14').addClass('future')
      console.log('future')
    } else {
      $('#textArea14').addClass('present')
      console.log('present')
    }
  })()

  const hourTime15 = (() => {
    if ($('#hourTime15').attr('value') < nowHour) {
      $('#textArea15').addClass('past')
    } else if ($('#hourTime15').attr('value') > nowHour) {
      $('#textArea15').addClass('future')
    } else {
      $('#textArea15').addClass('present')
    }
  })()

  const hourTime16 = (() => {
    if ($('#hourTime16').attr('value') < nowHour) {
      $('#textArea16').addClass('past')
    } else if ($('#hourTime16').attr('value') > nowHour) {
      $('#textArea16').addClass('future')
    } else {
      $('#textArea16').addClass('present')
    }
  })()

  const hourTime17 = (() => {
    if ($('#hourTime17').attr('value') < nowHour) {
      $('#textArea17').addClass('past')
    } else if ($('#hourTime17').attr('value') > nowHour) {
      $('#textArea17').addClass('future')
    } else {
      $('#textArea17').addClass('present')
    }
  })()
})()

//localStorage.setItem('textAreas', textAreas)

function localStorageFunction() {
  const textAreas = ''
  textAreas=$('#textArea9').text()
  localStorage.setItem('button9', textAreas)
  console.log('pink')
}
$('#button9').on('click', localStorageFunction)


