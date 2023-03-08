export declare enum UserRole {
    Admin = "Admin",
    Moderator = "Moderator",
    User = "User"
}
export declare class RequestRegisterTeacherDto {
    firstName: string;
    lastName: string;
    gender: UserRole;
    email: string;
    phone: string;
    userId: string;
    password: string;
}
