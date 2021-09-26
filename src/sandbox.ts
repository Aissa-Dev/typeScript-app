type stringOrnumber = number | string;
type nameAndUid = { name: string; uid: stringOrnumber };

const logDetails = (uid: stringOrnumber, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: nameAndUid) => {
  console.log(`${user.name} says hello`);
};
