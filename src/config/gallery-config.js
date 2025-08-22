// Gallery Configuration (JavaScript version for build scripts)
// This file allows you to customize how folders are mapped to headers
// and combine/rename headers as needed

// Main gallery configuration
const galleryConfig = [
  {
    id: '2018-2019',
    label: '2018/2019',
    mediaFolder: 'media19',
    folderMappings: [
      { folderNames: '', displayName: '' },
      { folderNames: 'Build_Season', displayName: 'BUILD SEASON' },
      { folderNames: 'Competition_Photos', displayName: 'COMPETITION SEASON' },
      { folderNames: 'Random_Photos', displayName: 'RANDOM PHOTOS' }
    ]
  },
  {
    id: '2019-2020',
    label: '2019/2020',
    mediaFolder: 'media20',
    folderMappings: [
      { folderNames: '', displayName: '' },
      { folderNames: 'UBC_ROCKET_EVENT', displayName: 'UBC ROCKET EVENT' }
    ]
  },
  {
    id: '2020-2021',
    label: '2020/2021',
    mediaFolder: 'media21',
    folderMappings: [
      { folderNames: '', displayName: '' }
    ]
  },
  {
    id: '2021-2022',
    label: '2021/2022',
    mediaFolder: 'media22',
    folderMappings: [
      { folderNames: '', displayName: '' },
      { folderNames: 'Cellula_trip', displayName: 'CELLULA TRIP' },
    ]
  },
  {
    id: '2022-2023',
    label: '2022/2023',
    mediaFolder: 'media23',
    folderMappings: [
      { folderNames: '', displayName: '' },
      { folderNames: 'Build_Season', displayName: 'BUILD SEASON' },
      { folderNames: 'Competition', displayName: 'COMPETITION SEASON' },
      { folderNames: 'Translink', displayName: 'TRANSLINK TOUR' },
      { folderNames: 'YVR', displayName: 'YVR TOUR' }
    ]
  },
  {
    id: '2023-2024',
    label: '2023/2024',
    mediaFolder: 'media24',
    folderMappings: [
      { folderNames: '', displayName: '' },
      { folderNames: 'Pre_Season', displayName: 'PRE SEASON' },
      { folderNames: 'Build_Season', displayName: 'BUILD SEASON' },
      { folderNames: 'Competition_Season', displayName: 'COMPETITION SEASON' },
      { folderNames: 'Off_Season', displayName: 'OFF SEASON' },
      { folderNames: ['Selected_Photos', 'The_20_photos', 'edited_and_chosen_photos_(for_sponsorship_package)'], displayName: 'MISCELLANEOUS' },
    ]
  },
  {
    id: '2024-2025',
    label: '2024/2025',
    mediaFolder: 'media25',
    folderMappings: [
      { folderNames: '', displayName: '' },
      { folderNames: 'Pre_Season', displayName: 'PRE SEASON' },
      { folderNames: 'Build_Season', displayName: 'BUILD SEASON' },
      { folderNames: ['Competition_Season', 'Competition_(Camera)', 'Colour_Graded'], displayName: 'COMPETITION SEASON' },
      { folderNames: 'Post_Season', displayName: 'POST SEASON' },
      // Example of multiple folders under one header:
      // { folderNames: ['Team Photos', 'Workshops', 'Outreach'], displayName: 'Team Activities' }
    ]
  }
];

module.exports = { galleryConfig };
