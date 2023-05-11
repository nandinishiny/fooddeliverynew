import { useState,useEffect } from "react";
const useOnline = () => {
    const [isOnline,setIsOnline] = useState(navigator.onLine);
    useEffect(()=>{
        const handleOnline = () => {
            setIsOnline(true);
          };
          const handleOffline = () => {
            setIsOnline(false);
          };
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);//it will removes after once it calls.this is the bettter practice.
          };

    },[]);
    return isOnline;
  
}

export default useOnline;