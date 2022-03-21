import React from "react";

const MainHeader: React.FC<{value: string}> = ({ value }) => {
  return (
    <header className="header">
      <h1 className="header-name">{value}</h1>
    </header>
  );
};

export default MainHeader;
