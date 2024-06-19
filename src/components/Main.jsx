import Header from "./Header";
import Home from "./Home";

const Main = () => {
  return (
    <section className="grid grid-cols-12 gap-5 pt-[74px]">
      <div className="col-span-12 md:col-span-2 max-md:hidden">
        <Header />
      </div>
      <div className="col-span-12 md:col-span-10">
        <Home />
      </div>
    </section>
  );
};

export default Main;
