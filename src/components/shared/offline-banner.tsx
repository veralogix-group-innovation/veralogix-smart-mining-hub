'use client';

import { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const setOnline = () => setIsOffline(false);
    const setOffline = () => setIsOffline(true);

    // Check on mount
    if (typeof window !== 'undefined' && !window.navigator.onLine) {
      setOffline();
    }

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  if (!isOffline) {
    return null;
  }

  return (
    <Alert variant="destructive" className="mb-4">
      <WifiOff className="h-4 w-4" />
      <AlertTitle>You are offline</AlertTitle>
      <AlertDescription>
        Some features may be unavailable. Please check your connection.
      </AlertDescription>
    </Alert>
  );
}
