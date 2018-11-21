const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeys = this.journeys
  const results = journeys.map((journey) => {
    const startLocations = journey.startLocation;
    return startLocations
  })
  return results
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeys = this.journeys
  const results = journeys.map((journey) => {
    const endLocations = journey.endLocation;
    return endLocations
  })
  return results
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys
  let results = journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return results
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys
  let results = journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return results
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeys = this.journeys;
  let result = journeys.reduce((accum, journey) => {
    return accum + journey.distance
  }, 0)
  return result;
};

Traveller.prototype.getListOfTransportsForAllJourneys = function () {
  const journeys = this.journeys;
  const results = journeys.map((journey) => {
    const transport = journey.transport;
    return transport
  })
  return results
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  const journeys = this.journeys;
  const allTransport = journeys.getListOfTransportsForAllJourneys;

    const results = journeys.map((journey) => {
      const transport = journey.transport;
      return transport
    })
    results

  const uniqueArray = results.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  })
  return uniqueArray
};

Traveller.prototype.getUniqueModesOfTransport2 = function () {
  const journeys = this.journeys;
  const allTransport = journeys.getListOfTransportsForAllJourneys;

    const results = journeys.map((journey) => {
      const transport = journey.transport;
      return transport
    })
    results

  const uniqueArray = Array.from(new Set(results));

  return uniqueArray
};



module.exports = Traveller;
