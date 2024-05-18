import { NavBar, DatePicker } from "antd-mobile";
import "./index.scss";

import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
// import _ from "lodash";
import { groupBy } from "lodash";
import DailyBill from "./components/DayBill/index";

const Month = () => {
  // 按月数据分组
  const billList = useSelector((state) => state.bill.billList);

  const monthGroup = useMemo(() => {
    // return出去计算后的值
    return groupBy(billList, (item) => dayjs(item.date).format("YYYY-MM"));
  }, [billList]);
  // console.log(monthGroup);

  // 时间弹窗
  const [dateVisible, setDateVisible] = useState(false);

  // 时间显示
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format("YYYY-MM");
  });

  const [currentMonthList, setCurrentMonthList] = useState([]);
  const monthResult = useMemo(() => {
    // 支出、收入、结余
    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0);
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [currentMonthList]);

  // 初始化显示当月统计数据
  useEffect(() => {
    const nowDate = dayjs().format("YYYY-MM");
    // 边界控制
    if (monthGroup[nowDate]) {
      setCurrentMonthList(monthGroup[nowDate]);
    }
  }, [monthGroup]);

  const onConfirm = (date) => {
    setDateVisible(false);

    const formatDate = dayjs(date).format("YYYY-MM");
    // console.log(formatDate);
    // 边界控制
    if (monthGroup[formatDate]) {
      setCurrentMonthList(monthGroup[formatDate]);
    }

    setCurrentDate(formatDate);
  };

  // 分组
  const dayGroup = useMemo(() => {
    let groupData = groupBy(currentMonthList, (item) =>
      dayjs(item.date).format("YYYY-MM-DD")
    );
    const keys = Object.keys(groupData);
    return {
      keys,
      groupData,
    };
  }, [currentMonthList]);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentDate + ""}月账单</span>
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
        {/* 单日列表统计 */}
        {dayGroup.keys.map((key) => {
          return (
            <DailyBill
              key={key}
              date={key}
              billList={dayGroup.groupData[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Month;
