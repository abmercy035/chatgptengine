import { Injectable } from '@nestjs/common';
import {Item } from "./interfaces/item.interface"

@Injectable()
export class ItemsService {
 private readonly item = [
  {
   id: "2345458484",
   name: "item one",
   qty: 100,
   description: "This is Item one"
  },
  {
   id: "2345458584",
   name: "item two",
   qty: 100,
   description: "This is Item two"
  }
 ];

 findAll(): Item[] {
  return this.item;
 }

}
