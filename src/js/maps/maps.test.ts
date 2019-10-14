import { ILocation, initMap } from "./maps";

describe("Maps tests", () => {
  let testLocation: ILocation;
  beforeEach(() => {
    testLocation = {lat: 0, lng: 50}
  });

  test("Map initialisation with initMap()", () => {
    expect(initMap(testLocation)).toBeTruthy();
    // Further tests for Map object could go here
  });
});
