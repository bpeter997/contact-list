import {AddressDto} from "./AddressDto";
import {CompanyDto} from "./CompanyDto";

export interface ContactDto {
  id: number,
  name: string,
  username: string,
  email: string,
  address: AddressDto,
  phone: string,
  website: string,
  company: CompanyDto
}
