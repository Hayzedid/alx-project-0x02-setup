// Card component props
export interface CardProps {
  title: string;
  content: string;
}

// Button component props
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Post component props
export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

// User component props
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}
