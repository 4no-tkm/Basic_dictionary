import { createContext, useContext } from 'react';

interface User {
    name: string;
    role: string;
}

const UserContext = createContext<User | null>(null);

export const useUser = () => {
    const user = useContext(UserContext);
    if (!user) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return user;
};

export default UserContext;