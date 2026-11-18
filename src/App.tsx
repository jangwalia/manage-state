import Like from "./components/Like/Like";
import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <>
      <Like />
      <ExpandableText
        children="lorem ipsum dolor sit amet consectetur adipiscing elit eu qui tempore non quos autem cum fugiat dolor accusamus et consequatur reprehenderit tempore aut vel pariatur qui vero consequatur non duis autem sunt qui nihil adipiscing est irure facere et quas animi veniam dignissimos similique officia et voluptas praesentium deserunt fugiat"
        max={50}
      />
    </>
  );
}

export default App;
