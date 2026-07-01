const AmbientGlow = () => {
  return (
    <>
      <div
        className="
absolute
left-1/2
top-1/2
h-[700px]
w-[700px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-[#E8C9B7]/30
blur-[170px]
"
      />

      <div
        className="
absolute
left-[20%]
top-[30%]
h-[300px]
w-[300px]
rounded-full
bg-[#A26D5C]/20
blur-[130px]
animate-pulse
"
      />
    </>
  );
};

export default AmbientGlow;