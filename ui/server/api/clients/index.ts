import clients from '../clients.json';

export default defineEventHandler((event) => {
    return clients;
})