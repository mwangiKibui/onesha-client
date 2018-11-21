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
                ],
            },
        ],
    },
    {
        category: 'Graphics design',
        slug: 'grpahic-design',
        description: 'Graphic Design enables you to reach your clients online ... bla bla bla ...',
        avatar: {
            path: 'ni ni-ruler-pencil'
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
                ],
            },
        ]
    },
    {
        category: 'Motion Graphics',
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
                ],
            },
            {
                title: 'Intro/Outro Video',
                slug: 'intro-video',
                description: 'Description of what intro video is ...',
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
                ],
            },
        ],
    },
];

export default template

