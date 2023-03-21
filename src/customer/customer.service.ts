import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from "./interfaces/customer.interface"

import {v4} from "uuid"

@Injectable()
export class CustomerService {
  private readonly customers: Customer[] = [];

  create(createCustomerDto: CreateCustomerDto) {
    const data = {id: v4(), ...createCustomerDto }
    this.customers.push(data)
    return data
  }

  findAll() {
    return this.customers
  }

  findOne(id: string) {
    const data = this.customers.filter((customer) => {
      if (customer.id === id) {
        return customer
      }
    })
    return data
  }

  //TODO: implement and update service for customers
  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
