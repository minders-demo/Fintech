import React, { createContext, useContext, useState, useEffect } from 'react';
import { Movement } from '../types';

interface MovementsContextType {
  transactions: Movement[];
  addTransaction: (movement: Movement) => void;
  balance: number;
  updateBalance: (amount: number, operation?: 'add' | 'subtract') => void;
  getLatestTransaction: () => Movement | undefined;
}

const MovementsContext = createContext<MovementsContextType | undefined>(undefined);

const initialMockTransactions: Movement[] = [
  {
    id: '1',
    type: 'purchase',
    status: 'completed',
    amount: 4.5,
    formattedAmount: '- $4.50',
    recipientName: 'Starbucks Coffee',
    concept: 'Gastos diarios',
    category: 'Alimentación',
    createdAtISO: new Date().toISOString(),
    dateLabel: 'Hoy',
    timeLabel: '14:20',
    operationNumber: '#MP-123',
  },
  {
    id: '2',
    type: 'transfer_in',
    status: 'completed',
    amount: 125.00,
    formattedAmount: '+ $125.00',
    recipientName: 'Martin Arzuaga',
    concept: 'Transferencia Recibida',
    category: 'Transferencias',
    createdAtISO: new Date().toISOString(),
    dateLabel: 'Hoy',
    timeLabel: '09:15',
    operationNumber: '#MP-456',
  },
];

export const MovementsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Movement[]>(initialMockTransactions);

  // Balance inicial en USD
  const [balance, setBalance] = useState<number>(2847.50);

  const addTransaction = (movement: Movement) => {
    setTransactions(prev => [movement, ...prev]);
  };

  const updateBalance = (amount: number, operation: 'add' | 'subtract' = 'subtract') => {
    setBalance(prev =>
      operation === 'add' ? prev + amount : prev - amount
    );
  };

  const getLatestTransaction = () => transactions[0];

  return (
    <MovementsContext.Provider value={{ transactions, addTransaction, balance, updateBalance, getLatestTransaction }}>
      {children}
    </MovementsContext.Provider>
  );
};

export const useMovements = () => {
  const context = useContext(MovementsContext);
  if (!context) {
    throw new Error('useMovements must be used within a MovementsProvider');
  }
  return context;
};
