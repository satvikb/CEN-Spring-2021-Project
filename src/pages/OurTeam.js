import EBoardCard from "../components/EBoardCard";

function OurTeam() {
  return (

    <div className="OurTeam" >

    <div className="OurTeamBackgroundImage">
        <div className="BannerTitle">
          <h1 className="BannerTitleText">Our Team</h1>
        </div>
      </div>

        <div className="EBoardCardRow">
        <EBoardCard firstname = 'FirstName' lastname = 'LastName' position = 'Position'></EBoardCard>
        <EBoardCard firstname = 'FirstName' lastname = 'LastName' position = 'Position'></EBoardCard>
        <EBoardCard firstname = 'FirstName' lastname = 'LastName' position = 'Position'></EBoardCard>
        </div>

        <div className="EBoardCardRow">
        <EBoardCard firstname = 'FirstName' lastname = 'LastName' position = 'Position'></EBoardCard>
        <EBoardCard firstname = 'FirstName' lastname = 'LastName' position = 'Position'></EBoardCard>
        <EBoardCard firstname = 'FirstName' lastname = 'LastName' position = 'Position'></EBoardCard>
        </div>
      
    </div>
  );
}

export default OurTeam;
