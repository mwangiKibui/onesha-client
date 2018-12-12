const template = [
    {
        category: 'Social Media',
        slug: 'social-media',
        description: 'Social media enables you to reach your clients online ... bla bla bla ...',
        avatar: {
            path: 'ni ni-settings'
        },
        jobtypes: [
            {
                title: 'Social media audit',
                slug: 'social-media-audit',
                description: 'Description of what social media audit is ...',
                jobs: [
                    {
                        title: 'Facebook audit',
                        slug: 'facebook-audit',
                        description: 'Get audit for your facebook to understand ...',
                        template: [
                            {
                                title: 'How often do you post on facebook?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                    {
                        title: 'Twitter audit',
                        slug: 'twitter-audit',
                        description: 'We will manage your Twitter handle ...',
                        template: [
                            {
                                title: 'How often do you post on twitter?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Account Management',
                slug: 'account-management',
                description: 'Description of what account management is ...',
                jobs: [
                    {
                        title: 'Twitter handle management',
                        slug: 'twitter-handle-management',
                        description: 'We will manage your Twitter handle ...',
                        template: [
                            {
                                title: 'How often do you post on twitter?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                    {
                        title: 'Facebook page management',
                        slug: 'facebook-page-management',
                        description: 'We will manage your Facebook page ...',
                        template: [
                            {
                                title: 'How often do you post on Facebook?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                ]
            },
            {
                title: 'Content Plan',
                slug: 'content-plan',
                description: 'Description of what content plan is ...',
                jobs: [
                    {
                        title: 'Twitter content plan',
                        slug: 'twitter-content-plan',
                        description: 'We will manage your Twitter handle ...',
                        template: [
                            {
                                title: 'How often do you post on twitter?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                    {
                        title: 'Facebook content plan',
                        slug: 'facebook-content',
                        description: 'We will create your Facebook content ...',
                        template: [
                            {
                                title: 'How often do you post on Facebook?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                ]
            }
        ],
    },
    {
        category: 'Graphic design',
        slug: 'graphic-design',
        description: 'Graphic Design enables you to reach your clients online ... bla bla bla ...',
        avatar: {
            path: 'ni ni-ruler-pencil'
        },
        jobtypes: [
            {
                title: 'Business Profile',
                slug: 'business-profile',
                description: 'Description of what business profile is ...',
                jobs: [
                    {
                        title: 'Business Profile',
                        slug: 'startup-profile',
                        description: 'We will manage your Startup profile ...',
                        template: [
                            {
                                title: 'How often do you update your profile?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Logo Design',
                slug: 'business-logo',
                description: 'Description of what logo design is ...',
                jobs: [
                    {
                        title: 'Business Logo',
                        slug: 'logo-1',
                        description: 'Get a logo for your business to attract ...',
                        template: []
                    }
                ]
            },
            {
                title: 'Poster Design',
                slug: 'poster-design',
                description: 'Description of what poster design is ...',
                jobs: [
                    {
                        title: 'Web Poster',
                        slug: 'logo-1',
                        description: 'Get a poster for your business to attract ...',
                        template: []
                    },
                    {
                        title: 'Print Poster',
                        slug: 'logo-1',
                        description: 'Get a poster for your business to attract ...',
                        template: []
                    }
                ]
            }
        ]
    },
    {
        category: 'Animated Videos',
        slug: 'motion-graphics',
        description: 'Motion Graphics is the next big thing in advertising ... bla bla bla ...',
        avatar: {
            path: 'ni ni-atom',
        },
        jobtypes: [
            {
                title: 'Explainer Video',
                slug: 'explainer-video',
                description: 'Description of what explainer is ...',
                jobs: [
                    {
                        title: 'Group video',
                        slug: 'group-video',
                        description: 'Get video for your facebook audience to understand ...',
                        template: [
                            {
                                title: 'How often do you post on facebook?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                    {
                        title: 'Product video ',
                        slug: 'product-video',
                        description: 'We will create your product video ...',
                        template: [
                            {
                                title: 'How often do you post on twitter?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Intro/Outro Video',
                slug: 'intro-video',
                description: 'Description of what intro video is ...',
                jobs: [
                    {
                        title: 'Facebook page video',
                        slug: 'facebook-page',
                        description: 'Get audit for your facebook to understand ...',
                        template: [
                            {
                                title: 'How often do you post on facebook?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                    {
                        title: 'Twitter page video',
                        slug: 'twitter-page',
                        description: 'We will manage your Twitter video ...',
                        template: [
                            {
                                title: 'How often do you post on twitter?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Promo Video',
                slug: 'promo-video',
                description: 'Description of what intro video is ...',
                jobs: [
                    {
                        title: 'Facebook promo video',
                        slug: 'facebook-promo',
                        description: 'Get a video for your facebook to understand ...',
                        template: [
                            {
                                title: 'How often do you post on facebook?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                    {
                        title: 'Twitter promo video',
                        slug: 'twitter-promo',
                        description: 'We will create your Twitter video ...',
                        template: [
                            {
                                title: 'How often do you post on twitter?',
                                feedback: 'single-select',
                                options: [
                                    {
                                        option: 'I post daily.',
                                    },
                                    {
                                        option: 'I post after every two days.',
                                    },
                                    {
                                        option: 'I post weekly',
                                    },
                                    {
                                        option: 'I post once in a while',
                                    },
                                ],
                            },
                            {
                                title: 'What would you say about your current audience?',
                                feedback: 'prompt', // would require a text entry field on the UI
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export default template

