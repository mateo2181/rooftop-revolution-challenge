import supplyPoints from '../supply-points.json';

export default defineEventHandler((event) => {
    const cups = getRouterParam(event, 'cups');
    const supplyPoint = supplyPoints.find(sp => sp.cups === cups);
    return supplyPoint;
})