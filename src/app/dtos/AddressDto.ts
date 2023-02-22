import {GeoDto} from "./GeoDto";

export interface AddressDto {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoDto
}
