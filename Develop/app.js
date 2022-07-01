// connected moment.js to p element
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//let todayHours = moment().hour();
const clockClasses = (() => {
  const nowHour = moment().format('H')
  console.log(nowHour)

  const hourTime9 = (() => {
    const textArea9Status = (() => {
      if ($('#hourTime9').attr('value') < nowHour) {
        $('#textArea9').addClass('past')
      } else if ($('#hourTime9').attr('value') > nowHour) {
        $('#textArea9').addClass('future')
      } else {
        $('#textArea9').addClass('present')
      }
    })()
    const button9On = (() => {
      $('#button9').on('click', function () {
        let textAreas9 = ''
        textAreas9 += $('#textArea9').val()
        localStorage.setItem('button9', textAreas9)
        console.log('nine')
      })
    })()
    $('#textArea9').val(localStorage.getItem('button9'))
  })()

  const hourTime10 = (() => {
    const textArea10Status = (() => {
      if ($('#hourTime10').attr('value') < nowHour) {
        $('#textArea10').addClass('past')
      } else if ($('#hourTime10').attr('value') > nowHour) {
        $('#textArea10').addClass('future')
      } else {
        $('#textArea10').addClass('present')
      }
    })()
    const button10On = (() => {
      $('#button10').on('click', function () {
        let textAreas10 = ''
        textAreas10 += $('#textArea10').val()
        localStorage.setItem('button10', textAreas10)
        console.log('ten')
      })
    })()
    $('#textArea10').val(localStorage.getItem('button10'))
  })()

  const hourTime11 = (() => {
    const textArea11Status = (() => {
      if ($('#hourTime11').attr('value') < nowHour) {
        $('#textArea11').addClass('past')
      } else if ($('#hourTime11').attr('value') > nowHour) {
        $('#textArea11').addClass('future')
      } else {
        $('#textArea11').addClass('present')
      }
    })()
    const button11On = (() => {
      $('#button11').on('click', function () {
        let textAreas11 = ''
        textAreas11 += $('#textArea11').val()
        localStorage.setItem('button11', textAreas11)
        console.log('eleven')
      })
    })()
    $('#textArea11').val(localStorage.getItem('button11'))
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







