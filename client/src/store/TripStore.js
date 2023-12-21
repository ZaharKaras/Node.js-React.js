import {makeAutoObservable} from 'mobx'

export default class TripStore{
    constructor(){
        this._trips = [
            { name: 'Путешествие 1', price: 200, img: 'image1.jpg', rating: 4},
            { name: 'Путешествие 2', price: 150, img: 'image2.jpg', rating: 5}
        ]
        makeAutoObservable(this)
    }

    setTrips(trips)
    {
        this._trips = trips
    }
    

    
    get trips()
    {
        return this._trips
    }
}