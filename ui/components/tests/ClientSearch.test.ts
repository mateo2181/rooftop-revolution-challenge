// @vitest-environment nuxt
import { describe, expect, vi, test } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import { createI18n } from 'vue-i18n';
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ClientSearch from "../ClientSearch.vue";

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            searchTitle: 'Search Title',
        }
    },
    missing: (_, key) => key,
});

const mountComponent = async (initialStatePinia: unknown) => {
    const wrapper = await mountSuspended(ClientSearch, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        clients: initialStatePinia
                    }
                }),
                i18n,
            ],
        },
    });
    return wrapper;
}

describe('ClientSearch component', () => {

    test('should renders the title correctly', async () => {
        const wrapper = await mountComponent({});
        expect(wrapper.text()).toContain('Search Title');
    });

    test('should render client information when client data is available', async () => {
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
        const wrapper = await mountComponent({
            client,
            supplyPoint,
            offer
        })
        expect(wrapper.findComponent({ name: 'ClientInformation' }).exists()).toBe(true);
    });

    test('should render error message when error is set', async () => {
        const wrapper = await mountComponent({
            error: 'Client not found'
        })
        expect(wrapper.text()).toContain('Client not found');
    });
});
