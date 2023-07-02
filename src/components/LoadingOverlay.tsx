import { FC } from "react";

const LoadingOverlay: FC<{ loading: boolean }> = ({ loading }) => {
  if (loading)
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
        <div className="aspect-square rounded-md bg-gray-100 flex justify-center items-center p-6">
          Cargando ...
        </div>
      </div>
    );
  return null;
};

export default LoadingOverlay;
