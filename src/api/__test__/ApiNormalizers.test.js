import {
  normalizeRestaurants,
} from '../ApiNormalizers';

describe("ApiNormalizer", () => {
  /**
   * Test | Normalize Category
   */
  describe("normalizeRestaurants", () => {
    test("it returns an array of restaurants", () => {
      //Arrange 
      const payload = {
        restaurants: [
          {
            id: "100",
            name: "MyRestaurant1",

            address: "2005 SE 192nd St",
            city: "Vancouver",
            state: "BC",
            area: "West Vancouver",
            postal_code: "V6H 3R9",
            country: "Canada",

            phone: "6046874400",
            lat: "45.606539",
            lng: "-122.475339",
            price: "2",
            reserve_url: "RESERVE URL",
            mobile_reserve_url: "MOBILE RESERVE URL",
            image_url: "IMAGE URL"
          }
        ]
      };
      //Act
      const actual = normalizeRestaurants(payload);
      //Asert
      console.log(actual);
      expect(actual[0].id).toEqual("100");
      expect(actual[0].name).toEqual("MyRestaurant1");
      expect(actual[0].imageUrl).toEqual("IMAGE URL");
      expect(actual[0].fullAddress.city).toEqual("Vancouver");
    });

    test(" should return null if there is no restaurant", () => {
      const actual = normalizeRestaurants({});
      expect(actual).toEqual(null);
    });
  });
});
