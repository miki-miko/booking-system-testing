
export interface tableI {
  table: {
    id: number;
    name: string;
    img: string;
    capacity: number;
    isAvailable: boolean;
    location: string;
  }
  }


export interface newTableI {
  table: {
    name: string;
    location: string;
    imageUrl: string;
    capacity: number;
  }
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

