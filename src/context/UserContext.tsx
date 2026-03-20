import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dni: string;
}

interface UserContextType {
  user: UserProfile;
  updateUser: (newData: Partial<UserProfile>) => void;
  getInitials: () => string;
  getFullName: () => string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile>({
    firstName: 'María',
    lastName: 'Rodríguez',
    email: 'maria.rodriguez@email.com',
    phone: '+57 300 456 7890',
    dni: '12.345.678',
  });

  const updateUser = (newData: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  const getInitials = () => {
    const first = user.firstName.charAt(0).toUpperCase();
    const last = user.lastName.charAt(0).toUpperCase();
    return `${first}${last}`;
  };

  const getFullName = () => {
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <UserContext.Provider value={{ user, updateUser, getInitials, getFullName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
