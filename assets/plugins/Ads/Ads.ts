export interface Ad {
    imageUrl: string;
    title: string;
    body: string;
    url: string;
}

const ALL_ADS: Ad[] = [{
    imageUrl: 'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    body: 'Mi pelicula',
    title: 'Mi Cinta',
    url: 'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
};

class Ads {
    private static instance: Ads;
    private ads: Ad[]
    private constructor(){
        this.initAds();
    }
    static getInstance() {
        if(!Ads.instance)
            Ads.instance = new Ads();

        return Ads.instance;
    }
    private initAds() {
        this.ads = [ ...ALL_ADS];
    }
    getAd() {
        if(this.ads.length === 0)
            this.initAds();
        return this.ads.pop();
    }
}

export default Ads;