import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
  Req,
} from '@nestjs/common';
import OpenAI from 'openai';
import { CreateItemDto } from './dto/create-item.dto';
import { Response, Request } from 'express';
@Controller('items')
export class ItemsController {
  @Get(':item')
  async findOne(
    @Param("item") item,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const openai = new OpenAI({
      apiKey: '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',
    });
      async function main() {
      console.log(item);
      // const completion = await openai.chat.completions.create({
      //   messages: [
      //     { role: 'system', content: 'You are a helpful assistant.' },
      //     {
      //       role: 'user',
      //       content: item.toString(),
      //     },
      //   ],
      //   model: 'gpt-3.5-turbo',
      //   temperature: 0.7,
      // });
      // return completion.choices[0].message;
      return item.toString();
    }
    return res.send(await main());
  }

  //  @Get(":id")
  //  findOne(@Param() param): string {
  //  return `Item ${param.id}`
  //  }
  //Shorter Method
  /*
  @Get(":id") 
 findOne(@Param("id") id): string {
  return `Item ${id}`;
 }
  */

  //  @Post()
  //  create(@Body() createItemEDto: CreateItemDto): string {
  //  return `Name: ${createItemEDto.name} Desc: ${createItemEDto.description}`
  //  }

  //  @Delete(":id")
  //  delete(@Param("id") id): string {
  //   return `Delete ${id}`;
  //  }

  //  @Put(":id")
  //  update(@Body() updateItemDto: CreateItemDto, @Param("id") id): string {
  //   return `Update ${id} - Name ${updateItemDto.name} `;
  //  }
}
