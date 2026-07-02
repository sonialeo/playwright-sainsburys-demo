import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async getUsers(page: number = 2) {
    return this.request.get(`https://reqres.in/api/users?page=${page}`, {
      headers: {
        'x-api-key': 'reqres_78937f34eb3c4dc380c02ae979ea75f9'
      }
    });
  }
}