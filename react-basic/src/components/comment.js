import avatar from "../images/bozai.png";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import "./scss/comment.scss";
import { useState, useRef } from "react";
import _ from "lodash";
import classNames from "classnames";
import { v4 as uuidV4 } from "uuid";
import dayjs from "dayjs";
/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: "13258165",
      avatar: two,
      uname: "周杰伦",
    },
    // 评论内容
    content: "哎哟，不错哦",
    // 评论时间
    ctime: "10-18 08:15",
    like: 78,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: one,
      uname: "许嵩",
    },
    content: "我寻你千百度 日出到迟暮",
    ctime: "11-13 11:29",
    like: 98,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "张三",
    },
    content: "前端真的卷",
    ctime: "10-19 09:00",
    like: 106,
  },
];
// 当前登录用户信息
const user = {
  // 用户id
  uid: "30009257",
  // 用户头像
  avatar,
  // 用户昵称
  uname: "张三",
};

// 导航 Tab 数组
const tabs = [
  { type: "hot", text: "最热" },
  { type: "time", text: "最新" },
];
const Comment = () => {
  const [commentList, setCommentList] = useState(
    _.orderBy(defaultList, "like", "desc")
  );

  //  删除
  const handledel = (id) => {
    // console.log(id);
    setCommentList(commentList.filter((item) => item.rpid !== id));
  };

  //   tab
  const [type, setType] = useState("hot");
  const handleTabChange = (type) => {
    setType(type);
    // 排序
    if (type === "hot") {
      // 根据点赞数量
      setCommentList(_.orderBy(commentList, "like", "desc"));
    } else {
      // 根据创建时间
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };

  // 发表评论
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidV4(), //随机id
        user: {
          uid: "36080105",
          avatar: one,
          uname: "测试",
        },
        content: content,
        ctime: dayjs(new Date()).format("MM-DD HH:mm"), //月-日   时：分
        like: 100,
      },
    ]);
    setContent("");
    inputRef.current.focus();
  };
  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map((item) => (
              <span
                onClick={() => handleTabChange(item.type)}
                key={item.text}
                // 方法一
                // className={`nav-item ${type === item.type && "active"}`}
                // 方法二
                className={classNames("nav-item", {
                  active: type === item.type,
                })}
              >
                {item.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={inputRef}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div onClick={handlePublish} className="send-text">
                发布
              </div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map((item) => (
            <div key={item.rpid} className="reply-item">
              {/* 头像 */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                    src={item.user.avatar}
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    {/* 评论时间 */}
                    <span className="reply-time">{item.ctime}</span>
                    {/* 评论数量 */}
                    <span className="reply-time">点赞数:{item.like}</span>
                    {/* 只有自己的评论才能显示删除按钮 */}
                    {user.uid === item.user.uid && (
                      <span
                        onClick={() => handledel(item.rpid)}
                        className="delete-btn"
                      >
                        删除
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
