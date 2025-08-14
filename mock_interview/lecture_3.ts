// given events as minutes-from-midnight and now (same units),
// return the title of the soonest event with start ≥ now; if none, return null.
// return the title of the event thats start is graterdan or equal to now
// return null

const events = [
  { title: "standup", start: 540 },   // 9:00
  { title: "1:1",     start: 600 },   // 10:00
  { title: "retro",   start: 900 },    // 15:00
  { title: "happy hour", start: 1100},
];

const now = 601; // 10:01

const findSoonestEvent = (events) => {
  for (const event in events) {
    console.log(events[event].start)
    if (now <= events[event].start) {
      return events[event].title
    }
  }
    return null;
};

console.log(findSoonestEvents(events))

// expected: "retro"  // 600 has passed; next is 900
