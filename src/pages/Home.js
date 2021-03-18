import UpdateRow from '../components/UpdateRow'

function Home() {
  return (
    <div className="Home">
      <div className="HomeBackgroundImage">
        <div className="BannerTitle">
          <h1 className="BannerTitleText">Tamid @ UF</h1>
        </div>
      </div>

      <div className="HomeContent">
        <p className="TextTitle">About Us</p>
        <p className="TextDetail">Club about us text</p>

        <p className="TextTitle">Updates</p>
        <div className="UpdatesContainer">
          <UpdateRow title="Title" text="Update text" time="3/18 5pm"></UpdateRow>
          <UpdateRow title="Title2" text="Update text2" time="3/15 2pm"></UpdateRow>
        </div>
      </div>

    </div>
  );
}

export default Home;
