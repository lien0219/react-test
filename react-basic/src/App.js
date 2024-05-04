import Test from "./components/test";
import StyleTest from "./components/styleTest";
import Comment from "./components/comment";
import Form from "./components/form/form";
import Father from "./components/valueTransmission/father";
import Parent from "./components/valueTransmission/childrenExplain";
import Fat from "./components/valueTransmission/fromSonToFather";
import Zuapp from "./components/valueTransmission/brotherCommunication";
import FaApp from "./components/valueTransmission/context";
import UseEffect from "./components/useEffect";
// view
import HookTest from "./views/hooksuse";
import CommentNew from "./views/comment";
import { useEffect, useState } from "react";

// 使用全局状态管理器
import { useSelector, useDispatch } from "react-redux";
// 导入actionCreater
import { inscrement, decrement, addToNum } from "./store/modules/counterStore";
import { fetchChannlList } from "./store/modules/channelStore";

const count = 100;
function getName() {
  return "张三";
}

const list = [
  { id: 1001, name: "vue" },
  { id: 1002, name: "react" },
  { id: 1003, name: "angular" },
  { id: 1004, name: "js" },
];

const isLogin = true;

// 类型
const articleType = 1; //0 1 3
function getArticleTem() {
  if (articleType === 0) {
    return <div>无图文章</div>;
  } else if (articleType === 1) {
    return <div>单图文章</div>;
  } else {
    return <div>三图文章</div>;
  }
}

function App() {
  // 全局状态
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { channelList } = useSelector((state) => state.channel);
  useEffect(() => {
    dispatch(fetchChannlList());
  }, [dispatch]);

  // 点击
  const clickHandle = () => {
    console.log("button按钮点击了");
  };
  const clickHandleParmes = (e) => {
    console.log("参数:", e);
  };
  const clickHandleCustom = (name) => {
    console.log("自定义参数:", name);
  };
  const clickHandleCustomAndParmes = (name, e) => {
    console.log("自定义参数:", name, e);
  };

  // 返回顶部
  const [top, setTop] = useState(false);
  window.onscroll = function () {
    const res = document.documentElement.scrollTop;
    // console.log(res, "----");
    if (res > 350) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  const goTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="App">
      {top && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            right: "10px",
            color: "goldenrod",
            fontSize: "24px",
          }}
          className="goTop"
          onClick={goTop}
        >
          返回顶部
        </div>
      )}

      {count}
      <hr></hr>
      {getName()}
      <hr></hr>
      {new Date().getDate()}
      <hr></hr>
      <div style={{ color: "red" }}>app</div>
      <hr></hr>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <hr></hr>
      {isLogin && <span>isLogin测试</span>}
      <hr></hr>
      {isLogin ? <span>isLogin是true</span> : <span>isLogin是false</span>}
      <hr></hr>
      <h3>模板测试</h3>
      {getArticleTem()}
      <hr></hr>
      <button onClick={clickHandle} type="button">
        点击
      </button>
      <button onClick={clickHandleParmes} type="button">
        事件默认参数
      </button>
      <button onClick={() => clickHandleCustom("张三")} type="button">
        事件自定义参数
      </button>
      <button
        onClick={(e) => clickHandleCustomAndParmes("张三", e)}
        type="button"
      >
        同时传递事件对象和自定义参数
      </button>
      <hr></hr>
      <h1>自定义组件测试</h1>
      <Test />
      <h1>样式测试</h1>
      <StyleTest />
      <h1>评论demo</h1>
      <Comment />
      <h1>受控和非受控表单</h1>
      <Form />
      <h1>父子组件传值</h1>
      <Father />
      <h1>父传子children说明</h1>
      <Parent />
      <h1>子传父</h1>
      <Fat />
      <h1>兄弟组件传值</h1>
      <Zuapp />
      <h1>context机制跨层传递数据</h1>
      <FaApp />
      <h1>useEffect的使用</h1>
      <UseEffect />
      <h1>自定义hook</h1>
      <HookTest />
      <h1>评论demo2.0</h1>
      <CommentNew />
      <h1>全局状态管理器测试</h1>
      <div className="store">
        <button
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(decrement())}
          type="button"
        >
          -
        </button>
        {count}
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(inscrement())}
          type="button"
        >
          +
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(addToNum(10))}
          type="button"
        >
          +10
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(addToNum(20))}
          type="button"
        >
          +20
        </button>
        <ul>
          {channelList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
