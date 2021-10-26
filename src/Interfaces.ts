
export interface tableI {
  
    id: number;
    name: string;
    img: string;
    capacity: number;
    isAvailable: boolean;
    location: string;
 
  }


export interface newTableI {
    name: string;
    location: string;
    imageUrl: string;
    capacity: string;
  
  }
  


export interface tableCardDetailsI {
  show: boolean;
  handleClose: () => void;
  table: {
    id: number;
    name: string;
    capacity: number;
    isAvailable: boolean;
    location: string;
  }
}

