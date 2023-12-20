import {makeAutoObservable} from 'mobx'

export default class TripStore{
    constructor(){
        this._trips = [

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