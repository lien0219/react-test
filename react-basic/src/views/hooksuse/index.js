import useToggle from "../../hoooks/useToggle";

function HookTest() {
  const { value, toggle } = useToggle();
  return (
    <div style={{ background: "red" }}>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default HookTest;
