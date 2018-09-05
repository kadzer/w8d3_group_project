use bucket_list;
db.dropDatabase();

db.list.insertMany([
  {name: "Base Jumping",
  description: "Mad people doing mad jumps."},
  {name: "Visit all 5 continents",
  description: "Make a journey to at least one country in each continent."},
  {name: "Software Development Course",
  description: "Finish intensive course intact."},
  {name: "Shakespeare",
  description: "Read all of Shakespeare's works."}
]);
