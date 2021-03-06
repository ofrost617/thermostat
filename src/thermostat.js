var Thermostat = function(temperature = 20, mintemp = 10, maxtemp = 25){

  this.temperature = temperature;
  this.minTemp = mintemp;
  this.maxTemp = maxtemp;
  this.powerDefaultMode = 'Power saving mode on';

  this.up = function (number){
    this.temperature += number;
  };

  this.down = function (number){
    if (this.temperature - number < 10) {
      throw 'cannot decrease temperature lower than min';
    } else {
      this.temperature -= number;
    };
  };

  this.powerSaveOff = function() {
    this.maxTemp = 32;
  };

  this.powerSaveOn = function() {
    this.maxTemp = 25;
  };

  this.resetTemp = function() {
    this.temperature = 20;
  };

  this.energyUsage = function() {
    if (this.temperature < 18) {
      return 'low';
    }else if (this.temperature < 25 ){
      return 'medium';
    }else{
      return 'high';
    };
  };

};
// $("p").css("background-color", "yellow")
$("p").css({"background-color": "yellow", "font-size": "200%"});
// $( "temperature-up" ).slideUp( 800 );
$("temperature-up").click(function(){
    var txt = "";
    txt += "Width: " + $("#div1").width() + "</br>";
    txt += "Height: " + $("#div1").height();
    $("#div1").html(txt);
});


// Thermostat.prototype.up = function(degrees) {
//   this.temperature += number;
// };
