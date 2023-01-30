<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
    
    @ManyToOne (type => User, user => user.mesages)
    user: User;
    
=======
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
    
    @ManyToOne (type => User, user => user.mesages)
    user: User;
    
>>>>>>> ab0f2bdbbf6de442d61fe53a1f48585a95031836
}