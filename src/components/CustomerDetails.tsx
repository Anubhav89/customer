import React from 'react';
import PhotoGrid from './PhotoGrid';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
  imageId: number;
}

interface Props {
  customer: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p><strong>Title:</strong> {customer.title}</p>
      <p><strong>Address:</strong> {customer.address}</p>
      <h3>Photo Gallery</h3>
      <PhotoGrid imageId={customer.imageId} />
    </div>
  );
};

export default CustomerDetails;