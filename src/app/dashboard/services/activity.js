const ZONES_ID = ['Calle 85', 'Salitre plaza', 'Parque 93', 'Calle 80', 'Centro'];
const lastZoneSpeeds = {};
export default class Activity {
  getNewData() {
      /* return [
          {"zoneId":"Calle 85", "data":{"count":1,"speed":10,"time":1466781876681}},
          {"zoneId":"Salitre plaza", "data":{"count":2,"speed":8.5,"time":1466781876681}},
          {"zoneId":"Parque 93", "data":{"count":4,"speed":15,"time":1466781876681}},
          {"zoneId":"Calle 80", "data":{"count":3,"speed":13.5,"time":1466781876681}},
          {"zoneId":"Centro", "data":{"count":1,"speed": 9 ,"time":1466781876681}}
      ] */

    return ZONES_ID.map(zone => {
      lastZoneSpeeds[zone] = getSpeedRandom(lastZoneSpeeds[zone]);
      return {
        zoneId: zone,
        data: {
          count: getCountRandom(),
          speed: lastZoneSpeeds[zone],
          time: getTime()
        }

      };
    });
  }
}

function getTime() {
  return new Date().getTime();
}

function getCountRandom() {
  return 1 + Math.floor(5 * Math.random());
}

function getSpeedRandom(lastSpeed) {
  if (lastSpeed === undefined) {
    return Math.floor(((100 * Math.random())) * 100) / 100;
  }
  const increment = Math.floor(((10 * Math.random())) * 100) / 100;
  let newSpeed = lastSpeed + Math.pow(-1, Math.round(Math.random())) * increment;
  newSpeed = (newSpeed > 100) ? 100 : ((newSpeed < 0) ? 0 : newSpeed);
  return newSpeed;
}
