import { useState } from "react";

const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(null);

    return [isAdmin, setIsAdmin];
};

export default useAdmin;
