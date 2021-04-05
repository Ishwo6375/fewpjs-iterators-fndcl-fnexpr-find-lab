function superbowlWin(record){
 let result = record.find(x => x.result === "W");
  return !!result ? result.year : undefined
}