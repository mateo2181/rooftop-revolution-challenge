import { describe, test, expect } from "vitest";
import { mountSuspended } from '@nuxt/test-utils/runtime';
import ClientInformation from "../ClientInformation.vue";

describe('ClientInformation component', () => {
    const client = {
        full_name: 'Terry Evans',
        address: 'Potato street, 4',
        cups: 123456,
        role: 'customer',
        building_type: 'house'
    };

    const supplyPoint = {
        cups: 123456,
        tariff: "One price",
        invoiced_amount: "50.00",
        power: {
            p1: "4500",
            p2: "4200"
        },
        neighbors: ["321654", "345678"]
    };

    const offer = {
        name: 'Special Discount',
        discount: 12,
    };

    test('should render the client data when is provided', async () => {
        const component = await mountSuspended(ClientInformation, { props: { client, supplyPoint, offer } })
        expect(component.text()).toContain("Terry Evans");
        expect(component.text()).toContain("Potato street, 4");
        expect(component.text()).toContain("house");
    });

    test('should render the supply point data when is provided', async () => {
        const component = await mountSuspended(ClientInformation, { props: { client, supplyPoint, offer } })
        expect(component.text()).toContain("One price");
        expect(component.text()).toContain("50.00 €");
    });

    test('should render the offer when is provided', async () => {
        const component = await mountSuspended(ClientInformation, { props: { client, supplyPoint, offer } })
        expect(component.text()).toContain("Special Discount");
        expect(component.text()).toContain("12%");
    });

    test('should render the offer not found message when offer is not provided', async () => {
        const component = await mountSuspended(ClientInformation, { props: { client, supplyPoint } })
        expect(component.text()).toContain("No podemos hacer una oferta al cliente");
    });
})