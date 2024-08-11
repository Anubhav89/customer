import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
  imageId: number;
}

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <div className="app">
      <div className="customer-list-container">
        <CustomerList onSelectCustomer={setSelectedCustomer} />
      </div>
      <div className="customer-details-container">
        {selectedCustomer ? (
          <CustomerDetails customer={selectedCustomer} />
        ) : (
          <p>Select a customer to view details</p>
        )}
      </div>
    </div>
  );
};

export default App;