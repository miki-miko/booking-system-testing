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

export interface NewTableI {
  name: string;
  location: string;
  imageUrl: string;
  capacity: string;
}

export interface BookingI {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

// Component Interfaces

export interface TableFilterProps {
  handleTables: () => void;
}

export interface TableCardDetailsProps {
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

export interface TableProps {
  table: {
    id: number;
    name: string;
    img: string;
    capacity: number;
    isAvailable: boolean;
    location: string;
  };
}

export interface TableFormProps {
  show: boolean;
  handleClose: () => void;
  onInputChange: any;
  addPost: (e: Event) => void;
}

export interface ErrorBannerProps {
  message: string;
  handleErrorBanner: (b: boolean) => void;
}
