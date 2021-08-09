
import { heroes } from '../data/heroes';


export const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics','Marvel Comics'];

    if ( !validPublishers.includes(publisher) ){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter ((hero) => hero.publisher === publisher)
    // return heroes.filter(hero => {
    //     if (hero.publisher === publisher) {
    //         return true
    //     }
    //     return false
    // })
   
} 