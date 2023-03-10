import { Pipe, PipeTransform } from '@angular/core';
import { AddressDto } from '../../dtos/AddressDto';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: AddressDto | undefined, ...args: unknown[]): string {
    return value!.city + ', ' + value!.street + ' ' + value!.suite;
  }
}
