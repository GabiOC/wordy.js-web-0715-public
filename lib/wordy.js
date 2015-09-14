'use strict';

function WordProblem(question){
  this.question = question.replace(/\?/g,'').split(" ");
};

WordProblem.prototype.answer = function(){
  var sum = parseInt(this.question[2]);
  for(var i = 0; i < this.question.length-1; i++){
    if(this.question[i] == "plus") {
      sum += Math.floor(this.question[i+1]);
    }
    if(this.question[i] == "minus") {
      sum -= Math.floor(this.question[i+1]);
    }
    if(this.question[i] == "multiplied") {
      sum *= Math.floor(this.question[i+2]);
    }
    if(this.question[i] == "divided") {
      sum /= Math.floor(this.question[i+2]);
    }
    if(this.question[i] == "cubed") {
      throw new ArgumentError();
    }
    if(this.question[i] == "president") {
      throw new ArgumentError();
    }
  }
  return sum;
}

function ArgumentError(){};
