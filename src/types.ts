export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
  }
  
  export interface Photo {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  }