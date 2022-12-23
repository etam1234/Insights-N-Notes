/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

//module.exports = sidebars;

module.exports = {
  mySideBar:[
    'intro',
    'toDoList',
    'toDoListLEGACY',
    {
      type: 'category',
      label: 'TryHackMe',
      link: {
        type: 'doc',
        id: 'TryHackMe/introduction',
      },
      items: [
          {
            type: 'category',
            label: 'Advent Of Cyber 2021',
            link: {
              type: 'generated-index',
            },
            items: [
              {
                type: 'category',
                label: 'Days 1-7 ~ Web Exploitation',
                link: {
                  type: 'generated-index',
                },
                items: [
                  'TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 1',
                  'TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 2',
                  'TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 3',
                  'TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 4',
                  'TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 5',
                  'TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 6',
                  'TryHackMe/Advent-Of-Cyber-2021/Modules/Days 1-7 ~ Web Exploitation/Advent of Cyber 2021 Day 7',
                ]
              }
            ]
          }
      ],
    },
  ],
};