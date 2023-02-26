import { SetMetadata } from "@nestjs/common";
import { isPublicKey } from "src/config/configuration";

export const PublicTransaction = () => SetMetadata(isPublicKey, true);