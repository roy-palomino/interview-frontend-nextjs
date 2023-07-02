export interface User {
  id: {
    name: string;
    value: string;
  };
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
