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

//props和ts下的特殊的children类型
type Props1 = {
  className: string;
  children: React.ReactNode;
};

function Button1(props1: Props1) {
  const { className, children } = props1;
  return <button className={className}>{children}</button>;
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
      <Button1 className="test">
        <span>this is span</span>
      </Button1>
    </>
  );
}

export default App;
