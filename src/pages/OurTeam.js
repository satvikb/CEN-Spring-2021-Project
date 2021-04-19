import EBoardCard from "../components/EBoardCard";

function OurTeam() {
  return (

    <div className="OurTeam" >

    <div className="OurTeamBackgroundImage">
        <div className="BannerTitle">
          <h1 className="BannerTitleText">OUR TEAM</h1>
        </div>
      </div>

        <div className="EBoardCardRow">
        <EBoardCard firstname = 'Blair' lastname = 'Wales' position = 'President'></EBoardCard>
        <EBoardCard firstname = 'Jordana' lastname = 'Schube' position = 'Vice President'></EBoardCard>
        <EBoardCard firstname = 'Jobeth' lastname = 'Liss' position = 'Director of Fund'></EBoardCard>
        <EBoardCard firstname = 'Lauren' lastname = 'Hetzroni' position = 'Director of Consulting'></EBoardCard>
        </div>

        <div className="EBoardCardRow">
        <EBoardCard firstname = 'Camila' lastname = 'Tarantini' position = 'Director of Programming'></EBoardCard>
        <EBoardCard firstname = 'Shea' lastname = 'Berman' position = 'Director of Recruitment'></EBoardCard>
        <EBoardCard firstname = 'William' lastname = 'Bussey' position = 'New Member Educator'></EBoardCard>
        <EBoardCard firstname = 'Gabriella' lastname = 'Ben-Zion' position = 'Director of Marketing'></EBoardCard>
        </div>
      
    </div>
  );
}

export default OurTeam;
