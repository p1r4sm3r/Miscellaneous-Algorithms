function humanReadable (seconds) {
  var hours = (Math.floor(seconds/3600)), minutes = (Math.floor((seconds % 3600)/60)), seconds = (seconds-((Math.floor((seconds/3600))*3600)+(Math.floor((seconds % 3600)/60)*60)));
  loop = [hours, minutes, seconds]
  for (let i = 0; i <= loop.length; i++){
    if (loop[i] < 10) {
      loop[i] = '0'+loop[i]
    }
  }
  return loop.join(':')
}

// initial try
function ahumanReadable (seconds) {
  let template = ['0','0',':','0','0',':','0','0']
  template.splice(0,2,(Math.floor(seconds/3600)));
  template.splice(2,2,(Math.floor((seconds % 3600)/60)));
  template.splice(4,2,(seconds-((Math.floor((seconds/3600))*3600)+(Math.floor((seconds % 3600)/60)*60))));
  return template.join('')
}
