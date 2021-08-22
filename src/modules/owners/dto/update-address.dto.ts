export class UpdateAddressDto {
  readonly id: number;
  readonly country: string;
  readonly city: string;
  readonly street: string;
  readonly zipCode: string;
  readonly ownerId: number;
}
