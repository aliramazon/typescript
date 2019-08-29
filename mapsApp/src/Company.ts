import faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    color: string = 'red';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lng: parseFloat(faker.address.longitude()),
            lat: parseFloat(faker.address.latitude())
        };
    }

    markerContent(): string {
        return `
            <div>
                <h3>Company Name: ${this.companyName}</h3>
                <h4>Catchphrase: ${this.catchPhrase}</h4>
            </div>
        `;
    }
}
