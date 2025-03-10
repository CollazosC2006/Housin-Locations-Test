import { TestBed } from '@angular/core/testing';
import { HousingService } from './housing.service';
import { HousingLocation } from './housinglocation';

describe('HousingService', () => {
  let service: HousingService;

  beforeEach(() => {
    //Configure the test module using TestBed
    TestBed.configureTestingModule({});
    // We get a Service instance
    service = TestBed.inject(HousingService);
  });

  it('GIVEN that we have the HousingService with the houses list, WHEN we call the getAllHousingLocation method, THEN We get the list with all house locations ', () => {
    // Given
    const expectedHousingLocations = service['housingLocationList'];

    // When
    const result = service.getAllHousingLocations();

    // Then
    expect(result).toEqual(expectedHousingLocations); //Jasmine Affirmation
  });

  it('GIVEN that we want to see a specific house location, WHEN we call the getHousingLocationById method with a specific ID, THEN we get the house location with that ID', () => {
    // Given
    const expectedHousingLocation = service['housingLocationList'][0];

    // When
    const result = service.getHousingLocationById(expectedHousingLocation.id);

    // Then
    expect(result).toEqual(expectedHousingLocation); //Jasmine Affirmation 
  });
  
  it('GIVEN that we want to see a house location that doesnt exist, WHEN we call the getHousingLocationById method with a specific ID didnt register, THEN we get no house', () => {
    // Given
    const nonExistentId = 999;

    // When
    const result = service.getHousingLocationById(nonExistentId);

    // Then
    expect(result).toBeUndefined(); //Jasmine Affirmation
  });
});