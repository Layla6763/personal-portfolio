import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      startDate: 'Jan 2019',
      endDate: ' - Present',
      company: 'ABC Company',
      jobTitle: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae commodo ligula.',
    },
    {
      id: 2,
      startDate: 'Jun 2017',
      endDate: ' - Dec 2018',
      company: 'XYZ Corporation',
      jobTitle: 'Frontend Developer',
      description: 'Praesent sagittis, enim eu cursus fringilla, elit urna iaculis lectus, vitae malesuada turpis sem et elit.',
    },
    {
      id: 3,
      startDate: 'Sep 2015',
      endDate: ' - May 2017',
      company: '123 Inc.',
      jobTitle: 'Web Developer',
      description: 'Vestibulum luctus, ipsum sed aliquam efficitur, justo elit aliquet mi, auctor interdum justo dolor at nisi.',
    },
  ];

  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Experience</h1>
      <div className="experience">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="timeline">
              <div className="circle" />
              <div className="line" />
            </div>
            <div className="experience-details">
              <div className="experience-period">
                <span className="start-date">{experience.startDate}</span>
                <span className="end-date">{experience.endDate}</span>
              </div>
              <div className="experience-info">
                <h3>{experience.company}</h3>
                <p className="job-title">{experience.jobTitle}</p>
                <p>{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Experience;
