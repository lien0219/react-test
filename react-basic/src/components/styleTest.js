import "../index.css";

const style = {
  color: "yellow",
  fontSize: "50px",
};

function StyleTest() {
  return (
    <div style={{ border: "1px solid green" }}>
      {/* 行内样式控制 */}
      <span style={{ color: "red", fontSize: "50px" }}>样式测试</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={style}>对象形式控制样式</span>
      <span className="foo">样式文件控制样式</span>
    </div>
  );
}

export default StyleTest;
