-> Create a Global file and by using createContext ...create a context for any thing and provide the data

-> now by importing Global context in parent or child now we can use the variables which are created in Global file

HOW TO GIVE CONTEXT FROM PARENT FILE TO CHILDREN
-> create 
<GLobalContext.Provider>
  here pass the child files where u want to use that context of parent
  ex:- <first>, <Second>, <Body>, <Footer>
<GlobalContext.Provider>

-> And now the child elements can use that Variables in thier file using Global context and useContext Hooks

-> while consuming it we have to import useContext Hook 
-> const {count, setCount} = useContext(GlobalContext);
