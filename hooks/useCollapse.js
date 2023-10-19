import { useState } from "react";

const useCollapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapsed = () => {
    setIsCollapsed((prevState) => !prevState);
  };


  return [isCollapsed, handleCollapsed];
};

export default useCollapse;
