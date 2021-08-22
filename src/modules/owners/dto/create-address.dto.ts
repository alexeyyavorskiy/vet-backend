export class CreateAddressDto {
  readonly country: string;
  readonly city: string;
  readonly street: string;
  readonly zipCode: string;
  ownerId: number;
}
