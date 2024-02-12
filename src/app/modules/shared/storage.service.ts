import { Injectable } from '@angular/core';
const { v4: uuidv4 } = require('uuid');

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static STORAGE_KEYS = {
    RENTING: 'renting'
  };

  getById(key: string, id: string): any {
    const items = this.getAll(key);
    return items.find((item: any) => item.id === id);
  }

  getAll(key: string): any {
    const item = localStorage.getItem(key);
    if(item) {
      return JSON.parse(item);
    }
    return [];
  }

  save(key: string, item: any): void {
    const items = this.getAll(key);
    if(item.id) {
      const index = items.findIndex((i: any) => i.id === item.id);
      if(index !== -1) {
        items[index] = item;
      }
    } else {
      item.id = uuidv4();
      items.push(item);
    }
    localStorage.setItem(key, JSON.stringify(items));
  }

  delete(key: string, id: string): void {
    const items = this.getAll(key);
    const index = items.findIndex((item: any) => item.id === id);
    if(index !== -1) {
      items.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(items));
    }
  }

}
