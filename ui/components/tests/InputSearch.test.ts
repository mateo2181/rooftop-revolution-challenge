// @vitest-environment nuxt
import { describe, test, expect } from "vitest";
import InputSearch from "../InputSearch.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

describe('InputSearch component', () => {

    test('should renders the placeholder correctly', async () => {
        const placeholderText = 'Search by CUPS';
        const component = await mountSuspended(InputSearch, { props: { placeholder: placeholderText } });

        const input = component.find('input');
        expect(input.attributes('placeholder')).toBe(placeholderText);
    });

    test('should emits the search event with input value on button click', async () => {
        const component = await mountSuspended(InputSearch);
        const searchValue = '123456';

        await component.find('input').setValue(searchValue);
        await component.find('button').trigger('click');

        expect(component.emitted().search).toBeTruthy();
        expect(component.emitted().search[0]).toEqual([searchValue]);
    });

    test('should emits the search event with input value on Enter key', async () => {
        const component = await mountSuspended(InputSearch);
        const searchValue = '123456';

        await component.find('input').setValue(searchValue);
        await component.find('input').trigger('keyup.enter');

        expect(component.emitted().search).toBeTruthy();
        expect(component.emitted().search[0]).toEqual([searchValue]);
    });
});