import React from 'react';

const ZenLeaf = () => {
  return (
    <div className="w-8 h-8 relative">
      <div className="absolute inset-0 border-2 border-current rounded-full flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
          <div className="w-2 h-2 bg-current rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ZenLeaf;