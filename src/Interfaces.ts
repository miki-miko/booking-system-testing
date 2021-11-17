export interface TableI {
  id: number;
  name: string;
  img: string;
  capacity: number;
  isAvailable: boolean;
  location: string;
}

export interface TableFilteredI {
  id: number;
  name: string;
  img: string;
  capacity: number | string;
  isAvailable: boolean;
  location: string;
}

export interface BookingI {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export interface DefaultStateI {
  tables: TableI[];
  tablesFiltered: TableFilteredI[];
  bookings: BookingI[];
  error: null | boolean;
  loading: boolean;
}

export interface NewTableI {
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
  };
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
