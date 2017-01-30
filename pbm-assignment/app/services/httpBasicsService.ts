import {Injectable} from "@angular/core";
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class HttpBasicsService{
     constructor(private _http: Http){
    }
    public setbidConfig(){
        return this._http.get("http://localhost:9999/bidConfig").map((res: Response) => res.json())
    }
    
}