import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address, phone, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <span className="text-sm text-gray-500">#{id}</span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-600 w-16">Email:</span>
          <span className="text-sm text-gray-800">{email}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-600 w-16">Phone:</span>
          <span className="text-sm text-gray-800">{phone}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-600 w-16">Website:</span>
          <a 
            href={`https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {website}
          </a>
        </div>
      </div>
      
      <div className="border-t pt-3">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Address:</h4>
        <p className="text-sm text-gray-800">
          {address.street}, {address.suite}<br />
          {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
