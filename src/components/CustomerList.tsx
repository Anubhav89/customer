import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import CustomerCard from './CustomerCard';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
  imageId: number;
}

interface Props {
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<Props> = ({ onSelectCustomer }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    const dummyCustomers: Customer[] = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: `Customer ${i + 1}`,
      title: `Title ${i + 1}`,
      address: `Address ${i + 1}`,
      imageId: Math.floor(Math.random() * 1000),
    }));
    setCustomers(dummyCustomers);
  }, []);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomerId(customer.id);
    onSelectCustomer(customer);
  };

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const customer = customers[index];
    return (
      <div style={style}>
        <CustomerCard
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onSelect={handleSelectCustomer}
        />
      </div>
    );
  };

  return (
    <div className="customer-list">
      <h2 style={{ padding: '20px', margin: 0, borderBottom: '1px solid var(--border-color)' }}>
        Customer List
      </h2>
      <List
        height={window.innerHeight - 70}
        itemCount={customers.length}
        itemSize={70}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
};

export default CustomerList;