"use client";
import ErrorBoundary from './ErrorBoundary';

// Pequeño wrapper cliente para usar con dynamic() y evitar hydration mismatches.
export default function ClientErrorBoundary({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
