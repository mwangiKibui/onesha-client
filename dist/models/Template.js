"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Template = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    jobtypes: [
        {
            title: { type: String },
            slug: { type: String },
            description: { type: String },
            jobs: [
                {
                    title: { type: String },
                    slug: { type: String },
                    description: { type: String },
                    template: [
                        {
                            title: { type: String },
                            feedback: {
                                type: String,
                                enum: ['prompt', 'single-select', 'multiple-select'],
                            },
                            options: [
                                {
                                    option: { type: String },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
});
exports.default = mongoose_1.model('Template', Template);
const template = [
    {
        category: 'Social Media',
        slug: 'social-media',
        description: 'Social media enables you to reach your clients online ... bla bla bla ...',
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
                                feedback: 'prompt',
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
                                feedback: 'prompt',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
template[0].jobtypes[0].jobs[0].template[0].options[0].option;
