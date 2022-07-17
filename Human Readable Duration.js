// Testing Solution

function formatDuration (test) {
    if (test == 0){return 'now'};
    var years = ((Math.floor(test/31536000)) + ' year').split(""), days = ((Math.floor((Math.floor(test % 31536000))/86400)) + ' day').split(""),  hours = (Math.floor((test-((Math.floor(test/31536000))*31536000+(Math.floor((Math.floor(test % 31536000))/86400)*86400)))/3600) + ' hour').split(""), minutes = ((Math.floor((test % 3600)/60)) + ' minute').split(""), seconds = ((test-((Math.floor((test/3600))*3600)+(Math.floor((test % 3600)/60)*60))) + " second").split(""), output = [], foutput = [];
    output.push(years,days,hours,minutes,seconds);
    for (let i = 0; i<output.length; i++){
        if (parseInt(output[i])!=0){
        for (let plural = 0; plural<output.length; plural++){
          if (output[plural].join("").replace(/\D/g, "")>1&&output[plural][output[plural].length-1]!='s'){
            output[plural].push('s')}};
          }
    }
    for (let i = 0; i<output.length; i++){
      if (parseInt(output[i].join("").replace(/\D/g, "")) != 0){
        foutput.push(output[i])
      }
      else {
        console.log(output[i].join("").replace(/\D/g, ""), isNaN(parseInt(output[i])), parseInt(output[i]))}
    }
    console.log(foutput)
    if (foutput.length>1){
      foutput[foutput.length-2].splice(foutput[foutput.length-2].length,0,[' and']);
    };
    foutput = foutput.map(e=>e.join('')).join(', ');
    return foutput.replace(/,([^,]*)$/, '$1')
  }

function formatDuration (test) {
    if (test == 0){return 'now'};
    var years = ((Math.floor(test/31536000)) + ' year').split(""), days = ((Math.floor((Math.floor(test % 31536000))/86400)) + ' day').split(""),  hours = (Math.floor((test-((Math.floor(test/31536000))*31536000+(Math.floor((Math.floor(test % 31536000))/86400)*86400)))/3600) + ' hour').split(""), minutes = ((Math.floor((test % 3600)/60)) + ' minute').split(""), seconds = ((test-((Math.floor((test/3600))*3600)+(Math.floor((test % 3600)/60)*60))) + " second").split(""), output = [], foutput = [];
    output.push(years,days,hours,minutes,seconds);
    for (let i = 0; i<output.length; i++){
        if (parseInt(output[i])!=0){
        for (let plural = 0; plural<output.length; plural++){
          if (output[plural].join("").replace(/\D/g, "")>1&&output[plural][output[plural].length-1]!='s'){
            output[plural].push('s')}};
          }
    }
    for (let i = 0; i<output.length; i++){
      if (parseInt(output[i].join("").replace(/\D/g, "")) != 0){
        foutput.push(output[i])
      }
      else {
        console.log(output[i].join("").replace(/\D/g, ""), isNaN(parseInt(output[i])), parseInt(output[i]))}
    }
    console.log(foutput)
    if (foutput.length>1){
      foutput[foutput.length-2].splice(foutput[foutput.length-2].length,0,[' and']);
    };
    foutput = foutput.map(e=>e.join('')).join(', ');
    return foutput.replace(/,([^,]*)$/, '$1')
  }
// Efficiently formatted
  function formatDuration (test) {if (test == 0){return 'now'};
    var years = ((Math.floor(test/31536000)) + ' year').split(""), days = ((Math.floor((Math.floor(test % 31536000))/86400)) + ' day').split(""),  hours = (Math.floor((test-((Math.floor(test/31536000))*31536000+(Math.floor((Math.floor(test % 31536000))/86400)*86400)))/3600) + ' hour').split(""), minutes = ((Math.floor((test % 3600)/60)) + ' minute').split(""), seconds = ((test-((Math.floor((test/3600))*3600)+(Math.floor((test % 3600)/60)*60))) + " second").split(""), output = [years,days,hours,minutes,seconds], foutput = [];
    for (let i = 0; i<output.length; i++){
        if (parseInt(output[i])!=0){
        for (let plural = 0; plural<output.length; plural++){
          if (output[plural].join("").replace(/\D/g, "")>1&&output[plural][output[plural].length-1]!='s'){
            output[plural].push('s')}};}}
    for (let i = 0; i<output.length; i++){
      if (parseInt(output[i].join("").replace(/\D/g, "")) != 0){
        foutput.push(output[i])}}
    if (foutput.length>1){foutput[foutput.length-2].splice(foutput[foutput.length-2].length,0,[' and']);};
    return foutput.map(e=>e.join('')).join(', ').replace(/,([^,]*)$/, '$1')}
