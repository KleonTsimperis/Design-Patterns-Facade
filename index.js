/*
 *** FACADE - STRUCTURAL ***
 *
 * The face of a building with all kinds of shenaningans, corruption
 * and complexity that the end user shouldn't be concerned about. It's
 * a simplified API to hide other low level details in your code base
 * Every package installed with Javascript can be considered a FACADE
 * in some way
 */

 class PlumbingSystem {
  // low level access to plumbing system
  setPressure(value) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // low level access to electrical system
  setVoltage(value) {}
  turnOn() {}
  turnOff() {}
}

// People leaving in the House don't need to have access/knowledge to the internals of the electrical and plumbing system
class House {
  plumbing = new PlumbingSystem();
  electrical = new ElectricalSystem();

  turnOnSystems() {
    this.electrical.setVoltage(220);
    this.electrical.turnOn();

    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  shutDown() {
    this.electrical.turnOff();
    this.plumbing.turnOff();
  }
}

const house = new House();
house.turnOnSystems();
house.shutDown();
