import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="mb-6 bg-white shadow transition md:mb-12 dark:bg-gray-800">
      <div className="mx-auto px-5 md:mx-10 md:px-0 lg:mx-20">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
export default Header;
