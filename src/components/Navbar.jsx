export const Navbar = () => {
  return (
    <header className="w-full h-20 bg-transparent fixed top-0 left-0 flex justify-between items-center px-4 z-99">
      <div className="uppercase">To Infinity<br />& beyond</div>

      <div>
        {/* <img className="h-15" src="medha2.png" alt="" /> */}
        <h3 className="uppercase text-3xl">Medha .25</h3>
      </div>

      <button
        className="cursor-pointer bg-linear-to-br from-[#5C6691] via-50% to-[#E8EDFF] text-gray-900 tracking-wide font-semibold px-3 py-2 rounded-lg transition-all duration-300 transform shadow-lg hover:shadow-xl"
        onClick={() => window.open('https://konfhub.com/medha-2k25', '_blank')}
      >
        Register
      </button>

    </header>
  )
}