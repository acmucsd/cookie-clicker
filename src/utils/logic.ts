enum BaseCosts {
  CursorUpgrade = 15,
  DiamondStaff = 1e2,
  DiningHalls = 11e2,
  SideProjectTeams = 12e3,
  ThreeDPrinter = 13e4,
  ACMEvent = 14e5,
  ACMAICompetition = 20e6,
  BreadCon = 33e7,
  UCCampus = 51e8,
  Country = 75e9,
  TypeScriptConsole = 1e11,
  ACMHackEvent = 14e11,
  ACMHypercube = 17e12,
}

enum CostReference {
  million = 1e6,
  billion = 1e9,
  trillion = 1e12,
  quadrillion = 1e15,
  quintillion = 1e18,
  sextillion = 1e21,
}

const cumulativeBuildingPrice = (baseCost: number, numOwned: number, numWanted: number) => {
  return (baseCost * (1.15 ** numOwned - 1.15 ** (numOwned + numWanted))) / 0.15;
};

export { BaseCosts, CostReference, cumulativeBuildingPrice };
