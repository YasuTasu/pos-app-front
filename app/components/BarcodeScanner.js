"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export default function BarcodeScanner({ onScan }) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => onScan(decodedText),
      (errorMessage) => console.log(errorMessage)
    );

    return () => scanner.clear();
  }, [onScan]);

  return <div id="reader" className="p-4"></div>;
}
