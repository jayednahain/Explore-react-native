import { useState, useCallback, useEffect, useRef } from 'react';

function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // Store the latest asyncFunction in a ref to avoid dependency issues
  const asyncFunctionRef = useRef(asyncFunction);

  // Update ref when asyncFunction changes
  useEffect(() => {
    asyncFunctionRef.current = asyncFunction;
  }, [asyncFunction]);

  // Execute the async function
  const execute = useCallback(
    async (...args) => {
      setStatus('pending');
      setValue(null);
      setError(null);
      try {
        const response = await asyncFunctionRef.current(...args);
        setValue(response);
        setStatus('success');
        return response;
      } catch (error) {
        setError(error);
        setStatus('error');
        throw error;
      }
    },
    [], // Empty dependencies - execute function never changes
  );

  // Execute on mount if immediate is true
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
}

export default useAsync;
