export interface Friend {
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
  matches: { friend: Friend; score: number }[] | null;
}

function calculateSimilarity(friend1: Friend, friend2: Friend) {
  let score = 0;
  if (friend1.pets === friend2.pets) {
    score += 3; // Can change score values to change weight of factors
  }
  if (friend1.sleepSchedulePreferences === friend2.sleepSchedulePreferences) {
    score += 2;
  }
  if (isWithinRange(friend1.cleanliness, friend2.cleanliness, 5)) {
    score += 1;
  }
  if (
    isWithinRange(
      friend1.overnightGuestsFrequency,
      friend2.overnightGuestsFrequency,
      5
    )
  ) {
    score += 1;
  }
  if (
    isWithinRange(friend1.studyNoisePreference, friend2.studyNoisePreference, 5)
  ) {
    score += 2;
  }
  if (
    isWithinRange(
      friend1.studyLocationPreference,
      friend2.studyLocationPreference,
      5
    )
  ) {
    score += 1;
  }
  if (
    isWithinRange(friend1.friendsOverFrequency, friend2.friendsOverFrequency, 5)
  ) {
    score += 2;
  }
  if (friend1.smoke === friend2.smoke) {
    score += 3;
  }
  if (friend1.comfortableWithSmokers === friend2.comfortableWithSmokers) {
    score += 1;
  }
  if (
    isWithinRange(friend1.alcoholComfortLevel, friend2.alcoholComfortLevel, 5)
  ) {
    score += 3;
  }
  if (friend1.conflictResolution === friend2.conflictResolution) {
    score += 2;
  }
  if (friend1.locationPreference === friend2.locationPreference) {
    score += 1;
  }

  // Non negotiable factors
  if (friend1.comfortableWithSmokers !== friend2.comfortableWithSmokers) {
    score = -1;
  }

  return score;
}

function isWithinRange(value1: number, value2: number, range: number) {
  return Math.abs(value1 - value2) <= range;
}

export default function pairFriends(friends: Friend[]) {
  for (let i = 0; i < friends.length; i++) {
    const friend1 = friends[i];
    const scores = [];

    for (let j = 0; j < friends.length; j++) {
      if (i !== j) {
        const friend2 = friends[j];
        const score = calculateSimilarity(friend1, friend2);
        if (score !== -1) {
          scores.push({ friend: friend2, score });
        }
      }
    }

    // Sort matches by score in descending order
    scores.sort((a, b) => b.score - a.score);

    // Keep only the top 3 matches
    const top5Matches = scores.slice(0, 3);

    // Add matches to user's data
    friend1.matches = top5Matches;
  }
}
