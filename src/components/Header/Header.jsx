import profile from "../../assets/images/profile.jpg";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-6 border-b-4 border-gray-400 max-w-7xl mx-auto">
      <h2 className="text-6xl font-extrabold text-green-800">Knowledge Cafe</h2>
      <img className="w-20 h-20 rounded-full" src={profile} alt="Profile" />
    </header>
  );
};

export default Header;
