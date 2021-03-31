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
        <p className="TextDetail">With unprecedented pacing in the world of technology comes a need to engage in business in new ways. Join us in developing solutions for fast-moving ventures and in meeting new challenges from experienced investors and entrepreneurs. We offer initiatives to engage in Israeli business and a strong network to aid in future development.

TAMID is a comprehensive business and technology group that uses Israel as an economic lens to consult leading companies on the forefront of innovation.</p>

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
