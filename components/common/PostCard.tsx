import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">Post #{id}</span>
        <span className="text-sm text-blue-600">User {userId}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed line-clamp-3">{content}</p>
    </div>
  );
};

export default PostCard;
