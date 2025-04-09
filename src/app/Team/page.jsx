'use client';

import React from "react";
import "../../../styles/teamSection.css";
import teamData from '../../components/teamData.json'

const githubIcon = "/icons/github.png";
const linkedinIcon = "/icons/linkedin.png";

const Team = () => {
  const finalYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 4
  );
  const thirdYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 3
  );
  const secondYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 2
  );
  const firstYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 1
  );

  const renderTeamSection = (title, members) => (
    <div className="team-category">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 mt-16 text-center  text-gray-200 glow animate-pulse">
        {title}
      </h2>
      <div className="team-grid">
        {members.length > 0 ? (
          members.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <div className="profile-img-container">
                    <img
                      src={member.imageURL || "/path/to/default-image.jpg"}
                      alt={member.name || "Team Member"}
                      className="profile-img"
                    />
                  </div>
                  <h2 className="name">{member.name || "Unknown Name"}</h2>
                  <h3 className="position">{member.position || "Unknown Position"}</h3>
                  <h4 className="tagline">{member.tagline || "No Tagline Provided"}</h4>
                </div>

                {/* Back Side */}
                <div className="card-back">


                  <div className="links">
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No members found.</p>
        )}
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen text-white flex flex-col justify-center items-center text-center font-poppins">
      {/* Background Video */}
     {/*} <video
        className="absolute inset-0 w-full h-full  object-cover "
        src="/bgVideo.mp4"
        autoPlay
        muted
        loop
        style={{ filter: 'brightness(0.5)' ,
          transform: 'scale(1)', // Adjust scale for quality
        }} // Adjust brightness and scale for quality
        playbackrate={0.2} // Slow down the video
      />*/}
      <div className="">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-16 p-16 fontdiner-swanky-regular bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title leading-tight">
          Meet Our Team
        </h1>
      </div>

      {renderTeamSection("Final Year Members", finalYearMembers)}
      {renderTeamSection("Coordinators", thirdYearMembers)}
      {renderTeamSection("Executive Members", secondYearMembers)}
      {renderTeamSection("Volunteers", firstYearMembers)}
    </section>
  );
};

export default Team;