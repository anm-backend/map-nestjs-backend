import { ObjectId } from 'mongoose';
import { CreateBaseDto } from './create-base.dto';
export declare class UpdateBaseDto extends CreateBaseDto {
    _id?: ObjectId;
}
