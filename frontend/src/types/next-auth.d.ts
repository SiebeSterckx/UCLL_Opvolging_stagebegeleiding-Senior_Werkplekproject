/* eslint-disable no-unused-vars */
import type { User } from 'next-auth';
import 'next-auth/jwt';
import { TRole } from './role.type';

// extending the default user type

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
    }
}

declare module 'next-auth' {
    interface Session {
        user: User;
    }
}
declare module 'next-auth' {
    interface User {
        role: string;
        accessToken: string;
        nummer:string;
        role: TRole;
    }
}
