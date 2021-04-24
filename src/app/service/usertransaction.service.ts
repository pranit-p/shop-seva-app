import { Injectable } from '@angular/core';
import { Globalconstant } from './../class/globalconstant';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsertransactionService {

  constructor(private http:HttpClient) 
  { }

  fsavepassword(password,fmobilenumber)
  {
    const apiUrl = Globalconstant.webApi+"fchangepassword.php";
    let postParams = {password:password,fmobilenumber:fmobilenumber};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }
  fverifyusermobilenumber(mobileno)
  {
    const apiUrl = Globalconstant.webApi+"fverifyUserMobileNumber.php";
    let postParams = {mobileno:mobileno};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  getProfileData(EntityID)
  {
    const apiUrl = Globalconstant.webApi+"getProfileData.php";
    let postParams = {EntityID:EntityID};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  getVersion()
  {
    const apiUrl = Globalconstant.webApi+"getVersion.php";
    let postParams = {};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }


  verifyMobileNumber(mobileno)
  {
    const apiUrl = Globalconstant.webApi+"verifyMonilenumber.php";
    let postParams = {mobileno:mobileno};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  verifyUser(username,password)
  {
    const apiUrl = Globalconstant.webApi+"verifycustomer.php";
    let postParams = {username:username,password:password};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  createCustomer(fullname,mobileno,password,gaonid)
  {
    const apiUrl = Globalconstant.webApi+"createcustomer.php";
    let postParams = {fullname:fullname,mobileno:mobileno,password:password,gaonid:gaonid};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }
  updateCustomer(fullname,password)
  {
    const apiUrl = Globalconstant.webApi+"updateCustomerData.php";
    let postParams = {fullname:fullname,password:password,gaonid:Globalconstant.goanid,CustID:Globalconstant.CustID};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  getgaonlist()
  {
    const apiUrl = Globalconstant.webApi+"getgaonlist.php";
    let postParams = {};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  sendSms(mobileno)
  {
    const apiUrl = Globalconstant.webApi+"sendSMS.php";
    let postParams = {mobileno:mobileno};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }



}
