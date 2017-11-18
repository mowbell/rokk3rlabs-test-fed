import {ZONES_ID} from '../constants';
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
      return {
        zoneId: zone,
        data: {
          count: getCountRandom(),
          speed: getSpeedRandom(),
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

function getSpeedRandom() {
  return Math.floor((1 + (100 * Math.random())) * 100) / 100;
}
