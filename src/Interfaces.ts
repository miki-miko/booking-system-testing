
export interface tableI {
    id: number;
    name: string;
    img: string;
    capacity: number;
    isAvailable: boolean;
    location: string;
  }

  export interface BookingI {
    name: string;
    surname: string;
    email: string;
    phone: string;
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


export interface TableFormProps {
  show: boolean;
  handleClose: () => void;
  onInputChange: any;
  addPost: any;
}


export interface HomeProps {
  show: boolean;
  handleClose: () => void;
  onInputChange: any;
  addPost: any;
}


export interface BookingProps {
  onInputChange: any;
  addBooking: any;
  setBooking: any;
}
