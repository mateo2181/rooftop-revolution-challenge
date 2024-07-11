import clients from '../clients.json';

export default defineEventHandler((_) => {
    return clients;
})