import UpdateRow from '../components/UpdateRow'

function Home() {
  return (
    <div className="Home">
      <div className="HomeBackgroundImage">

      </div>
      <p className="TextTitle">About Us</p>
      <p className="TextDetail">Club about us text</p>

      <p className="TextTitle">Updates</p>
      <div className="UpdatesContainer">
        <UpdateRow title="Title" text="Update text"></UpdateRow>
        <UpdateRow title="Title2" text="Update text2"></UpdateRow>

      </div>

    </div>
  );
}

export default Home;
