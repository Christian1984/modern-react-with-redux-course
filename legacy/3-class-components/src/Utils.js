async function getGeolocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            e => resolve(e),
            err => reject(err)
        );
    });
}

async function mockGeolocation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            coords: {
                precision: 15.663,
                latitude: 50.8037693,
                longitude: 6.9836105
            }
        }), 1000);
    });
}

export { getGeolocation, mockGeolocation }