import { DB } from '../utils/db';

export abstract class AbstractModel {
  protected DB;

  constructor() {
    this.DB = new DB();
  }
}
