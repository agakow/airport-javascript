'use strict';

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function() {return this._hangar;};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
      throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot take off during storm');
  }
var indexOfplane = this._hangar.indexOf(plane);
this._hangar.splice(indexOfplane, 1);
};

Airport.prototype.isStormy = function() {
  return false;
};
