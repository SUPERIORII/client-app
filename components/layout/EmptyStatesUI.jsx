import { Newspaper } from "lucide-react";

const EmptyStateUI = () => {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 mb-6">
        <Newspaper className="w-12 h-12 text-emerald-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        No News Available
      </h3>
      <p className="text-gray-600 max-w-md mx-auto">
        Check back soon for the latest updates on environmental initiatives and
        stories from the field.
      </p>
    </div>
  );
};

export default EmptyStateUI;
