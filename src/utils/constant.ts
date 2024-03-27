export enum LoginStatus {
  TOURIST = 1,
  ADMIN = 2,
  SuperAdmin = 3
}

export enum ChatType {
  SystemBroadCast = 1,
  SystemIsBusy = 2,
  GroupMessage = 3,
  ToPeopleMessage = 4
}


export enum QueryOperation {
  Equal = 1, // =
  NotEqual = 2,           // !=
  GreaterThan = 3,       //>
  GreaterEqual = 4,    //>=
  LessThan = 5,  //<
  LessEqual = 6, //<=
  Like = 7,// like
  In = 8,
  NotIn = 9
}
