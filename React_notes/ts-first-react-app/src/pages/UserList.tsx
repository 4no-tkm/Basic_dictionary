import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: User[] = await response.json();
                console.log('Fetched data:', data);
                setUsers(data);
            } catch (err) {
                console.error("Failed to fetch users:", err);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (isLoading) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Loading users...</div>;
    }

    if (error) {
        return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>Error: {error}</div>;
    }

    return (
       <div style={{ border: '1px solid #dcdcdc', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3>UserList (Obtained from API)</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.map(user => (
                <li key={user.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '5px', backgroundColor: '#fff', color: '#333' }}>
                    <strong>ID:</strong> {user.id} <br />
                    <strong>Name:</strong> {user.name} <br />
                    <small>@{user.username} ({user.email})</small>
                </li>
                ))}
            </ul>
        </div> 
    );
};

export default UserList;
