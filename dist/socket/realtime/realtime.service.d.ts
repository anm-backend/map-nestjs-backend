import { CreateRealtimeDto } from './dto/create-realtime.dto';
import { UpdateRealtimeDto } from './dto/update-realtime.dto';
export declare class RealtimeService {
    create(createRealtimeDto: CreateRealtimeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRealtimeDto: UpdateRealtimeDto): string;
    remove(id: number): string;
}
