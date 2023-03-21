# 1. NestJs project in memory db

### Goal

The Goal is to create a basic CRUD app for three data models and this models are vehicles, users, customers

### Note

- A nest `resource` contains the following things

  1. DTO (Data Transfer Object)

     - A DTO is an object that defines how the data will be sent over the network, we can determine the DTO schema by using **Typescript** interfaces, or by simple classes

  2. Entity

  3. Controller

     - A controller is basically an HTTP layer for the resource, where HTTP requests and responses are handled in this layer, this layer only worries for HTTP requests and nothing else.

  4. Module

     - As the name indicates a `Module` is responsible to make the services, controllers and other things accessable for other classes, or it exports the inner services for external modules

       ```tsx
       //customer.module.ts
       import { Module } from '@nestjs/common';
       import { CustomerService } from './customer.service';
       import { CustomerController } from './customer.controller';

       @Module({
         controllers: [CustomerController],
         providers: [CustomerService],
       })
       export class CustomerModule {}
       ```

  5. Service

     - A service is responsible to handle the business logic of the project, for example it creates a customer and stores it in the database.

  6. Test files

     - This files are responsible for unit and integration tests

- Everything in nest is implemented in **Typescript** and in TS we need to have Type for every data model

  ```tsx
  //this kind of instantiation is wrong, you need to declare a type for the array
  private readonly customers: []
  ```

### Questions

1. How to modify my Body data when some one sends a request from the client side

   - This is how we get data in our service

     ```ts
     create(createCustomerDto: CreateCustomerDto) {
         this.customers.push(createCustomerDto)
         return createCustomerDto
       }
     ```

   -

### Steps

1. Generated a nest js boiler plate setup with the nest command

   ```
   nest new <project name>
   ```

2. The goal is to create a CRUD api for **vehicles**, so first we will setup a controller, a controller is an HTTP layer for nest where HTTP requests and responses are handled.

   ```
   npx nest g resource vehicle
   ```

   **Issue**: the command `nest g controller vehicles` was supposed to create a vehicles controller but the command is not working but when i use `npx` it works fine.

   - What you need to create is a resource not a controller

3. Create a resource for `customers`

   ```
   npx nest g resource customer
   ```
