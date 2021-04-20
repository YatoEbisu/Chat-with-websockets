import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid_v4 } from "uuid";

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @CreateDateColumn()
  update_at: Date;

  @UpdateDateColumn()
  created_at: Date;

  constructor(){
      if(!this.id){
        this.id = uuid_v4()
      }
  }
}

export { Setting };
