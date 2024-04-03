export interface Friend {
  fullName: string;
  email: string;
  personalityType: number;
  matchPersonalityType: number;
  hobbies: String[];
  favoriteMusicGenres: String[];
  academicStanding: String[];
  communicationPreference: String[];
  matches: { friend: Friend; score: number }[] | null;
}

function calculateSimilarity(friend1: Friend, friend2: Friend) {
  let score = 0;
  if (isWithinRange(friend1.personalityType, friend2.personalityType, 5)) {
    score += 3; // Can change score values to change weight of factors
  }

  if (
    isWithinRange(friend1.matchPersonalityType, friend2.matchPersonalityType, 5)
  ) {
    score += 3;
  }

  score += multiSelectSimilarity(friend1.hobbies, friend2.hobbies);
  score += multiSelectSimilarity(
    friend1.favoriteMusicGenres,
    friend2.favoriteMusicGenres
  );
  score += multiSelectSimilarity(
    friend1.academicStanding,
    friend2.academicStanding
  );
  score += multiSelectSimilarity(
    friend1.communicationPreference,
    friend2.communicationPreference
  );

  // Non negotiable factors

  return score;
}

function isWithinRange(value1: number, value2: number, range: number) {
  return Math.abs(value1 - value2) <= range;
}

function multiSelectSimilarity(value1: String[], value2: String[]) {
  // Find common responses by filtering one array based on the presence in the other array
  const commonResponses = value1.filter((response) =>
    value2.includes(response)
  );

  return commonResponses.length;
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
