// 

function travelDistance(avgSpeed, travelTime) {
  const KM_PER_MILE = 1.609344;
  const speedInMph = avgSpeed * 1.15078
  const travelHours = travelTime / 60;
  const travelMiles = speedInMph * travelHours;
  const travelKms   = travelMiles * KM_PER_MILE;
  return travelKms;
}