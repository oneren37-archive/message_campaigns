import { DB } from '../utils/db';

export abstract class AbstractModel {
  protected DB;

  protected constructor() {
    this.DB = new DB();
  }
}
