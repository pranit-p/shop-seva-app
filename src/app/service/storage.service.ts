import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) 
  { }
  async set(key: string, value: any): Promise<any> 
  {
    try 
    {
      const result = await this.storage.set(key, value);
      console.log('set string in storage: ' + result);
      return true;
    } 
    catch (reason) 
    {
      console.log(reason);
      return false;
    }
  }
  async get(key: string): Promise<any> 
  {
    try 
    {
      const result = await this.storage.get(key);
     // console.log('storageGET: ' + key + ': ' + result);
      if (result != null) 
      {
        return result;
      }
      return null;
    } 
    catch (reason) 
    {
     // console.log(reason);
      return null;
    }
  }
}
