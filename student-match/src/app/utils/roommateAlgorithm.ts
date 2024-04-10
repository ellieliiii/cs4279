export interface Roommate {
  fullName: string;
  vanderbiltEmail: string;
  vunetId: string;
  pets: string;
  sleepSchedulePreferences: string;
  cleanliness: number;
  overnightGuestsFrequency: number;
  studyNoisePreference: number;
  studyLocationPreference: number;
  friendsOverFrequency: number;
  smoke: string;
  comfortableWithSmokers: string;
  alcoholComfortLevel: number;
  conflictResolution: string;
  locationPreference: string;
  matches: { roommate: Roommate; score: number }[] | null;
}

function calculateSimilarity(roommate1: Roommate, roommate2: Roommate) {
  let score = 0;
  if (roommate1.pets === roommate2.pets) {
    score += 3; // Can change score values to change weight of factors
  }
  if (
    roommate1.sleepSchedulePreferences === roommate2.sleepSchedulePreferences
  ) {
    score += 2;
  }
  if (isWithinRange(roommate1.cleanliness, roommate2.cleanliness, 5)) {
    score += 1;
  }
  if (
    isWithinRange(
      roommate1.overnightGuestsFrequency,
      roommate2.overnightGuestsFrequency,
      5
    )
  ) {
    score += 1;
  }
  if (
    isWithinRange(
      roommate1.studyNoisePreference,
      roommate2.studyNoisePreference,
      5
    )
  ) {
    score += 2;
  }
  if (
    isWithinRange(
      roommate1.studyLocationPreference,
      roommate2.studyLocationPreference,
      5
    )
  ) {
    score += 1;
  }
  if (
    isWithinRange(
      roommate1.friendsOverFrequency,
      roommate2.friendsOverFrequency,
      5
    )
  ) {
    score += 2;
  }
  if (roommate1.smoke === roommate2.smoke) {
    score += 3;
  }
  if (roommate1.comfortableWithSmokers === roommate2.comfortableWithSmokers) {
    score += 1;
  }
  if (
    isWithinRange(
      roommate1.alcoholComfortLevel,
      roommate2.alcoholComfortLevel,
      5
    )
  ) {
    score += 3;
  }
  if (roommate1.conflictResolution === roommate2.conflictResolution) {
    score += 2;
  }
  if (roommate1.locationPreference === roommate2.locationPreference) {
    score += 1;
  }

  // Non negotiable factors
  if (roommate1.comfortableWithSmokers !== roommate2.comfortableWithSmokers) {
    score = -1;
  }

  return score;
}

function isWithinRange(value1: number, value2: number, range: number) {
  return Math.abs(value1 - value2) <= range;
}

export default function pairRoommates(roommates: Roommate[]) {
  let matches = new Map();
  for (let i = 0; i < roommates.length; i++) {
    const roommate1 = roommates[i];
    const scores = [];

    for (let j = 0; j < roommates.length; j++) {
      if (i !== j) {
        const roommate2 = roommates[j];
        const score = calculateSimilarity(roommate1, roommate2);
        if (score !== -1) {
          scores.push({ roommate: roommate2, score });
        }
      }
    }

    // Sort matches by score in descending order
    scores.sort((a, b) => b.score - a.score);

    // Keep only the top 3 matches
    const topMatches = scores.slice(0, 3);

    // Add matches to user's data
    roommate1.matches = topMatches;

    matches.set(roommate1.vanderbiltEmail, topMatches);
  }

  return matches;
}
