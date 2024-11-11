export default TabForm2;

function TabForm2() {
  return (
    <>
      <TabTitle />
      <br />
      <TabBody />
    </>
  );
}

function TabTitle() {
  return <h1>WE MET ON BUMBLE AND IT JUST WENT</h1>;
}

function TabBody() {
  return (
    <>
      <p>
        Our journey is not yet done and as such, we cannot provide a full story
        here yet
      </p>
      <p>
        Please be understanding as we are both still young and have a lot of
        pages left in our biographies{" "}
      </p>
    </>
  );
}
