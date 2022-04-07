import plants from '../mock/plants.js'

const getPlants = () => {
    return new Promise((resolve, reject) => {
        const ok = true;
        setTimeout(() => {
            if(ok) {
                resolve(plants);
            } else {
                reject('error');
            }

        }, 4000);
    })
}

export default getPlants;