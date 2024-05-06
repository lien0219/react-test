import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      登录页
      {/* 声明式 */}
      <Link to="/article">跳转文章</Link>
      {/* 编程式 */}
      <button type="button" onClick={() => navigate("/article")}>
        编程式跳转
      </button>
      <button
        type="button"
        onClick={() => navigate("/article?id=1001&name=jack")}
      >
        searchParams传参
      </button>
      <button type="button" onClick={() => navigate("/article/1001/lisi")}>
        params传参
      </button>
    </div>
  );
};

export default Login;
