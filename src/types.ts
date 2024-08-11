export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
    imageId: number;


  }
  
  export interface Photo {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  }