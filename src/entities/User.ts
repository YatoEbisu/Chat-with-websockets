import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"
import { v4 as uuid_v4 } from "uuid";

@Entity("users")
class User{
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
          this.id = uuid_v4()
        }
    }
}

export { User }