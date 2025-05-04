const job = {
    id: 17,
    user_id: null,
    company_name: 'Fragility',
    job_title: 'Shop Owner',
    status: 'interview',
    application_date: '2025-05-31',
    job_link: '',
    notes: 'test adding new notes to the application.',
    priority: 'high',
    created_at: '2025-05-01T06:55:39.000Z'
  }

  const jobs = [
    {
      id: 16,
      user_id: null,
      company_name: 'Spacious',
      job_title: 'Software Engineer',
      status: 'interviewed',
      priority: 'medium',
      job_link: 'https://hk.jobsdb.com/job/83709588?ref=search-standalone&type=standard&origin=showNewTab#sol=0adb675772f1e958ec4a9d50ce52680d0d58738e',
      notes: 'testing',
    },
    {
      id: 19,
      user_id: null,
      company_name: 'Shiji',
      job_title: 'Programmer (JAVA)',
      status: 'applied',
      priority: 'medium',
      job_link: 'https://hk.jobsdb.com/job/83773337?ref=search-standalone&type=standard&origin=showNewTab#sol=d50313004511a0726207d86ba0981f13f1e22cb2',
      notes: 'JAVA, agile scrum, multi threads, RDB',
    },
    {
      id: 21,
      user_id: null,
      company_name: 'Shopify',
      job_title: 'Account associate',
      status: 'applied',
      priority: 'medium',
      job_link: '',
      notes: '',
    }
  ]


  const jobStatus = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});
  
  // jobs.map(job => 
  //   !jobStatus[job.status] ? jobStatus[job.status] = 1 : jobStatus[job.status] += 1
  // );

  jobStatus.map((key, value) => console.log(key+": "+value))








// const newJob = Object.fromEntries(
//     Object.entries(job).filter(
//         ([_, value]) => value !== null && value !== ''
//     )
// )

// const newJob = Object.fromEntries(
//     Object.entries(job).filter(([_, value]) => value !== null && value !== '')
//   );

