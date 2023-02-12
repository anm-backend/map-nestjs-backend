/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiOptions, UploadApiResponse } from 'cloudinary';
export declare class CloudinaryService {
    uploadImage(file: Express.Multer.File, options?: UploadApiOptions): Promise<UploadApiResponse | UploadApiErrorResponse>;
    destroyImage(public_id: string): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
