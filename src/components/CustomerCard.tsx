import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  customer: Customer;
  isSelected: boolean;
  onSelect: (customer: Customer) => void;
}

const CustomerCard: React.FC<Props> = ({ customer, isSelected, onSelect }) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(customer)}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;