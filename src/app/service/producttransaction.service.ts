import { Injectable } from '@angular/core';
import { Globalconstant } from './../class/globalconstant';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProducttransactionService {

  constructor(private http:HttpClient) { }

  getBannerImage()
  {
    const apiUrl = Globalconstant.webApi+"getBannerImage.php";
    let postParams = {};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }
  getCategory(CategoryID)
  {
    const apiUrl = Globalconstant.webApi+"getCategory.php";
    let postParams = {CategoryID:CategoryID};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }
  getsearchvalue(searchvalue)
  {
    const apiUrl = Globalconstant.webApi+"getsearchvalue.php";
    let postParams = {goanid:Globalconstant.goanid,searchvalue:searchvalue};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  getNews()
  {
    const apiUrl = Globalconstant.webApi+"getNews.php";
    let postParams = {};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

  getShopList(CategoryID,ParentCategoryID)
  {
    const apiUrl = Globalconstant.webApi+"getShopList.php";
    let postParams = {CategoryID:CategoryID,ParentCategoryID:ParentCategoryID};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }
  getShopInformation(ShopID)
  {
    const apiUrl = Globalconstant.webApi+"getShopdetail.php";
    let postParams = {ShopID:ShopID};
    return this.http.post(apiUrl,JSON.stringify(postParams));
  }

}
