This React project demonstrates ten common mistakes
like incorrect hook usage, infinite loops, 
unnecessary code, spelling errors, and omitted code
to showcase intentional bugs for learning purposes.

Mistake 1: Incorrect useMemo hook usage 
Using useMemo incorrectly to wrap state variable.
Remove useMemo.

Mistake 2: Missing dependencies in useEffect 
Forgetting dependencies in useEffect causes infinite loop.
Add dependencies.

Mistake 3: Unnecessary JSX parentheses 
Parentheses around JSX not needed.
Remove parentheses.

Mistake 4: Unclosed JSX tag
Unclosed <p> tag. 
Close with </p>.

Mistake 5: Non-inline handler 
Handler is a separate function and not inline.
Change to inline arrow function.

Mistake 6: Unnecessary React fragment 
Fragment not required for single child.
Remove fragment.

Mistake 7: Missing prop 
Missing count prop for ChildComponent.
Pass count prop.

Mistake 8: Unused variables 
unusedCount variable declared but not used.
Remove unused variable.

Mistake 9: Misspelled prop name 
Prop count misspelled as county in ChildComponent.
Fix spelling.
