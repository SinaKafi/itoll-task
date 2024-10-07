"use client";
import { useEffect, useState } from "react";

export default function RegisterServiceWorker() {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    const registerSW = async () => {
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.register("/sw.js");
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );

        // Force update check on initial load
        registration.update();

        registration.onupdatefound = () => {
          const newSW = registration.installing;
          if (newSW) {
            newSW.onstatechange = () => {
              if (newSW.state === "installed" && navigator) {
                // A new update is available
                setIsUpdateAvailable(true);
              }
            };
          }
        };
      }
    };

    registerSW();
  }, []);

  const handleUpdate = () => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage("SKIP_WAITING"); // Activate the new service worker
        }
      });
    }
    setIsUpdateAvailable(false); // Reset update state
    window.location.reload(); // Reload the page to apply the update
  };

  return (
    <>
      {isUpdateAvailable && (
        <div className="fixed bottom-0 left-0 right-0 bg-yellow-300 text-center p-4 z-10">
          <span>A new version is available!</span>
          <button
            onClick={handleUpdate}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Update
          </button>
        </div>
      )}
    </>
  );
}
