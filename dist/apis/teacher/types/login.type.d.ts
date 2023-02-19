export type LoginResult = {
    success: boolean;
    user: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        userId: string;
        password: string;
        __v: number;
    };
    token: string;
};
