import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-300 flex items-center justify-center relative overflow-hidden">
      <Loader className="animate-spin w-16 h-16 text-gray-600" />
    </div>
  );
};

export default Loading;