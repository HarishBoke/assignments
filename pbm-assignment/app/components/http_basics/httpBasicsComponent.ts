import {Component} from "@angular/core";
import {HttpBasicsService} from "./../../services/HttpBasicsService";

@Component({
    selector: 'http-basic-get',
    templateUrl: 'app/components/http_basics/httpBasics.html'
})
export class HttpBasicComponent{
    public incomeData:any = [];
    public incomeDataTable = false;
    constructor(private _httpBasicSvc: HttpBasicsService){

    }
//    public  ngOnInit(){
//        setInterval(()=> this.getBinConfig(), 10000);
//     }
    public sortByDate(e){
        alert("sort by function "+ e);
        // if(){

        // }
    } 
    public getBinConfig(){
        this.incomeDataTable = true;
        this._httpBasicSvc.setbidConfig().subscribe((response) => {
            this.incomeData = response;
            console.log(response);        
        });
    }
}