import { useState } from "react";

// type Props = {
//   className: string;
// };
interface Props {
  className: string;
  title?: string;
}

function Button(props: Props) {
  const { className } = props;
  return <button className={className}>click me</button>;
}

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
      <Button className="test" title="this is button" />
    </>
  );
}

export default App;
