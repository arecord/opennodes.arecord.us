var i = 0;

var intervalId = setInterval(function(){
  if(i >=5) clearInterval(intervalId);
  console.log(i);
  i++;
});
