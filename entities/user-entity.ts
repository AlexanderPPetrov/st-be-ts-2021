import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class User {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ unique: true})
    email: string;

    @Field()
    @Property()
    password: string;

    @Field()
    @Property()
    firstName: string;

    @Field()
    @Property()
    lastName: string;

    @Field(type => [String], {nullable: true})
    @Property({ type: () => [String] })
    roles?: [string];

    @Field({nullable: true})
    @Property()
    workPlace?: string;


}

export const UserModel = getModelForClass(User);