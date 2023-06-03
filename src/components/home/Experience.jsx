const Experience = () => {
  const experiences = [
    {
      id: 1,
      startDate: 'Sep 2020',
      endDate: ' - Present',
      company: 'Liquid Instruments Pty Ltd.',
      jobTitle: 'UI Developer',
      description: [
        'Designing and coding new features to create an intuitive user interface for the application.',
        'Developing the desktop application using C++ and Qt framework.',
        'Reviewing new code written by peers to find potential problems and improvements.',
        'Writing unit tests to confirm that the code achieves the desired behaviour.',
        'Following agile methodology for design, development, testing and release of the products and features.',
        'Working with a team and utilizing collaborative tools such as Jira.',
        'Writing and maintaining documentation to clearly explain the purpose of the code.',
        'Using image editor software such as GIMP to make icons.'
      ]
    },
    {
      id: 2,
      startDate: 'Feb 2019',
      endDate: ' - Dec 2020',
      company: 'the Australian National University',
      jobTitle: 'Master of Computing ',
      description: [
        
      ]
    },
    {
      id: 3,
      startDate: 'May 2016',
      endDate: ' - Jan 2019',
      company: 'Carl Zeiss (Shanghai) Co., Ltd.',
      jobTitle: 'Accountant',
      description: [
        'Posting incoming/cash transactions in SAP.',
        'Writing monthly cash flow forecasts and dunning reports.',
        'Monitoring the balance of bank accounts and providing purchasing advice for financial products.',
        'Preparing supporting files to guarantee foreign exchange payments are paid on time.',
        'Performing administrative tasks such as updating company information with banks.'
      ]
    },
    {
      id: 4,
      startDate: 'Sep 2012',
      endDate: ' - Jul 2016',
      company: 'East China University of Political Science and Law',
      jobTitle: 'Bachelor of Finance',
      description: [
        
      ]
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
                <ul className="bullet-points">
                  {experience.description.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
