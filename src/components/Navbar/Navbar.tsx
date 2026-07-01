const Navbar = () => {
  return (
    <nav
  className="
fixed
top-5
left-1/2
-z-0
w-[92%]
max-w-7xl
-translate-x-1/2
rounded-full
border
border-white/30
bg-white/15
backdrop-blur-xl
shadow-lg
z-50
"
>
      <div className="flex items-center justify-between px-10 py-4">

        <h1 className="text-[34px] font-light tracking-tight">
          Happiness Project
        </h1>

        <div className="hidden gap-10 text-sm md:flex">

          <a href="#">Begin</a>

          <a href="#">Why We Exist</a>

          <a href="#">Healing</a>

          <a href="#">People</a>

          <a href="#">Reach Out</a>

        </div>

        <button
  className="
    rounded-full
    border
    border-white/40
    bg-white/20
    backdrop-blur-xl
    px-7
    py-3
    text-[15px]
    font-medium
    text-[#24332F]
    transition-all
    duration-300
    hover:bg-white/40
    hover:scale-105
  "
>
  Book Session →
</button>

      </div>
    </nav>
  )
}

export default Navbar