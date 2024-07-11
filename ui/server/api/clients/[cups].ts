import clients from '../clients.json';

export default defineEventHandler((event) => {
    const cups = getRouterParam(event, 'cups');
    const client = clients.find(c => c.cups === cups);
    return client;
})