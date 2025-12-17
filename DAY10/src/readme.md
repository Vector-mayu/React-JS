# useMemo Hook in React.js
-> useMemo is react hook which lets u cache the result of a calculation between re-renders

-> in simpler terms it acts same as useCallback but ,
~ useMemo → memoizes a value
~ useCallback → memoizes a function

-> Use cases
  ✅ Expensive calculations
  ✅ Derived data (filtered lists, computed values)
  ❌ Not meant for functions passed as props

  