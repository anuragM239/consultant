import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Consultant {
  consultantId: number;
  userId: number;
  profileInfo: string;
  rating: number;
  totalProjects: number;
}

interface usr{
  userId: number,
  userName: string,
  phoneNum: number,
  userEmailId: string,
  userPassword: string,
  userRole: string
}

interface client{
  clientId: number,
  userId: number,
  walletBalance: number,
}

@Injectable({
  providedIn: 'root'
})


export class OperationsService {
  dataFromApi:any;
  dataFromApiAgain:any;
  _http:HttpClient;
  consID=2;
  userData:any;
  cliname="JohnDoe"

  constructor(_httpRef:HttpClient)
  {
    this._http=_httpRef;
  }

  getDetails()
  {
    this._http.get("https://consultantwebapiazure.azurewebsites.net/api/consultants")
    .subscribe((data)=>{ 
      this.dataFromApi=data;
    })
  }

  dummy:any = [
    {consultantId:1, profileInfo:"im the first", totalProjects:2},
    {consultantId:2, profileInfo:"im the second", totalProjects:3},
    {consultantId:3, profileInfo:"im the third", totalProjects:4}
    ]

  getClients()
  {
    // console.log(this._http.get("https://consultantwebapiazure.azurewebsites.net/api/clients")
    this._http.get<client>(`https://consultantwebapiazure.azurewebsites.net/api/clients/${this.consID}`)
    .subscribe((data: client)=>{ 
      this.dataFromApiAgain=data;
      
      console.log("USERid: ",this.dataFromApiAgain.userId);
      this.getUserById(this.dataFromApiAgain.userId);
     
    });
  }
 
  getConsultantById() {
    this._http.get<Consultant>(`https://consultantwebapiazure.azurewebsites.net/api/consultants/${this.consID}`)
      .subscribe((data: Consultant) => {
        this.dataFromApi = data;
        console.log("output: ",this.dataFromApi.userId);
        this.getUserById(this.dataFromApi.userId);
      });
  }

  getUserById(userId: number){
    this._http.get(`https://consultantwebapiazure.azurewebsites.net/api/users/${userId}`)
    .subscribe((userData) => {
      this.userData=userData;
      console.log("user data: ", this.userData);
    });
  }
}


