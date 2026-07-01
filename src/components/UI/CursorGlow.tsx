import useMouse from "../../hooks/useMouse";

export default function CursorGlow() {
  const { x, y } = useMouse();

  return (
    <div
      className="pointer-events-none fixed z-0 h-[300px] w-[300px] rounded-full bg-[#E8C9B7]/40 blur-[120px] transition-all duration-300"
      style={{
        left: x - 150,
        top: y - 150,
      }}
    />
  );
}