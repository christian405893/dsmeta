import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    // o fragment -> <></> usa-se para poder suportar mais de uma tag ai bota as tag entre eles
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
