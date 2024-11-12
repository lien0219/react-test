import { useState } from "react";

type User = {
  name: string;
  age: number;
};
function App() {
  // const [value, toggle] = useState(false);

  // const [list, setList] = useState([1, 2, 3]);

  // const changeValue = () => {
  //   toggle(true);
  // };

  // const changeList = () => {
  //   setList([2]);
  // };

  //泛型传递
  // const [user, setUser] = useState<User>({
  //   name: "李四",
  //   age: 18,
  // });

  // const [user, setUser] = useState<User>(() => {
  //   return {
  //     name: "李四",
  //     age: 18,
  //   };
  // });

  const [user, setUser] = useState<User | null>(null);

  const changeUser = () => {
    setUser({
      name: "哈哈哈",
      age: 28,
    });
  };

  return (
    <>
      app{user?.name}-{user?.age}
      <button onClick={changeUser}>改变user</button>
    </>
  );
}

export default App;
