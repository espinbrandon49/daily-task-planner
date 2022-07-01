// sets current day in jumbotron using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

const timeBlocks = (() => {
  //current hour from moment.js
  const nowHour = moment().format('H')
  console.log(nowHour)

  // a time block
  const hourTime9 = (() => {
    // updates the background color based on current hour
    const textArea9Status = (() => {
      if ($('#hourTime9').attr('value') < nowHour) {
        $('#textArea9').addClass('past')
      } else if ($('#hourTime9').attr('value') > nowHour) {
        $('#textArea9').addClass('future')
      } else {
        $('#textArea9').addClass('present')
      }
    })()
    // sets event handler for time block save button
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

  // another time block
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
    const textArea12Status = (() => {
      if ($('#hourTime12').attr('value') < nowHour) {
        $('#textArea12').addClass('past')
      } else if ($('#hourTime12').attr('value') > nowHour) {
        $('#textArea12').addClass('future')
      } else {
        $('#textArea12').addClass('present')
      }
    })()
    const button12On = (() => {
      $('#button12').on('click', function () {
        let textAreas12 = ''
        textAreas12 += $('#textArea12').val()
        localStorage.setItem('button12', textAreas12)
        console.log('twelve')
      })
    })()
    $('#textArea12').val(localStorage.getItem('button12'))
  })()

  const hourTime13 = (() => {
    const textArea13Status = (() => {
      if ($('#hourTime13').attr('value') < nowHour) {
        $('#textArea13').addClass('past')
      } else if ($('#hourTime13').attr('value') > nowHour) {
        $('#textArea13').addClass('future')
      } else {
        $('#textArea13').addClass('present')
      }
    })()
    const button13On = (() => {
      $('#button13').on('click', function () {
        let textAreas13 = ''
        textAreas13 += $('#textArea13').val()
        localStorage.setItem('button13', textAreas13)
        console.log('thirteen')
      })
    })()
    $('#textArea13').val(localStorage.getItem('button13'))
  })()

  const hourTime14 = (() => {
    const textArea14Status = (() => {
      if ($('#hourTime14').attr('value') < nowHour) {
        $('#textArea14').addClass('past')
      } else if ($('#hourTime14').attr('value') > nowHour) {
        $('#textArea14').addClass('future')
      } else {
        $('#textArea14').addClass('present')
      }
    })()
    const button14On = (() => {
      $('#button14').on('click', function () {
        let textAreas14 = ''
        textAreas14 += $('#textArea14').val()
        localStorage.setItem('button14', textAreas14)
        console.log('fourteen')
      })
    })()
    $('#textArea14').val(localStorage.getItem('button14'))
  })()

  const hourTime15 = (() => {
    const textArea15Status = (() => {
      if ($('#hourTime15').attr('value') < nowHour) {
        $('#textArea15').addClass('past')
      } else if ($('#hourTime15').attr('value') > nowHour) {
        $('#textArea15').addClass('future')
      } else {
        $('#textArea15').addClass('present')
      }
    })()
    const button15On = (() => {
      $('#button15').on('click', function () {
        let textAreas15 = ''
        textAreas15 += $('#textArea15').val()
        localStorage.setItem('button15', textAreas15)
        console.log('fifteen')
      })
    })()
    $('#textArea15').val(localStorage.getItem('button15'))
  })()

  const hourTime16 = (() => {
    const textArea16Status = (() => {
      if ($('#hourTime16').attr('value') < nowHour) {
        $('#textArea16').addClass('past')
      } else if ($('#hourTime16').attr('value') > nowHour) {
        $('#textArea16').addClass('future')
      } else {
        $('#textArea16').addClass('present')
      }
    })()
    const button16On = (() => {
      $('#button16').on('click', function () {
        let textAreas16 = ''
        textAreas16 += $('#textArea16').val()
        localStorage.setItem('button16', textAreas16)
        console.log('sixteen')
      })
    })()
    $('#textArea16').val(localStorage.getItem('button16'))
  })()
})()








