export const KEYPOINT_INDEXES = {
    'Nose': 0,
    'Neck': 1,
    'R-Sho': 2,
    'R-Elb': 3,
    'R-Wr': 4,
    'L-Sho': 5,
    'L-Elb': 6,
    'L-Wr': 7,
    'R-Hip': 8,
    'R-Knee': 9,
    'R-Ank': 10,
    'L-Hip': 11,
    'L-Knee': 12,
    'L-Ank': 13,
    'R-Eye': 14,
    'L-Eye': 15,
    'R-Ear': 16,
    'L-Ear': 17
};

export const KEYPOINTS = {
    [KEYPOINT_INDEXES['Nose']]: {'color': 'rgb(255, 0, 0)'},
    [KEYPOINT_INDEXES['Neck']]: {'color': 'rgb(255, 85, 0)'},
    [KEYPOINT_INDEXES['R-Sho']]: {'color': 'rgb(255, 170, 0)'},
    [KEYPOINT_INDEXES['R-Elb']]: {'color': 'rgb(255, 255, 0)'},
    [KEYPOINT_INDEXES['R-Wr']]: {'color': 'rgb(170, 255, 0)'},
    [KEYPOINT_INDEXES['L-Sho']]: {'color': 'rgb(85, 255, 0)'},
    [KEYPOINT_INDEXES['L-Elb']]: {'color': 'rgb(0, 255, 0)'},
    [KEYPOINT_INDEXES['L-Wr']]: {'color': 'rgb(0, 255, 85)'},
    [KEYPOINT_INDEXES['R-Hip']]: {'color': 'rgb(0, 255, 170)'},
    [KEYPOINT_INDEXES['R-Knee']]: {'color': 'rgb(0, 255, 255)'},
    [KEYPOINT_INDEXES['R-Ank']]: {'color': 'rgb(0, 170, 255)'},
    [KEYPOINT_INDEXES['L-Hip']]: {'color': 'rgb(0, 85, 255)'},
    [KEYPOINT_INDEXES['L-Knee']]: {'color': 'rgb(0, 0, 255)'},
    [KEYPOINT_INDEXES['L-Ank']]: {'color': 'rgb(85, 0, 255)'},
    [KEYPOINT_INDEXES['R-Eye']]: {'color': 'rgb(170, 0, 255)'},
    [KEYPOINT_INDEXES['L-Eye']]: {'color': 'rgb(255, 0, 255)'},
    [KEYPOINT_INDEXES['R-Ear']]: {'color': 'rgb(255, 0, 170)'},
    [KEYPOINT_INDEXES['L-Ear']]: {'color': 'rgb(255, 0, 85)'},
}

export const KEYPOINT_PAIRS = {
    [`${KEYPOINT_INDEXES['Nose']}-${KEYPOINT_INDEXES['R-Eye']}`]: {'color': 'rgba(85, 0, 255, 0.6)'},
    [`${KEYPOINT_INDEXES['R-Eye']}-${KEYPOINT_INDEXES['R-Ear']}`]: {'color': 'rgba(170, 0, 255, 0.6)'},

    [`${KEYPOINT_INDEXES['Nose']}-${KEYPOINT_INDEXES['L-Eye']}`]: {'color': 'rgba(255, 0, 255, 0.6)'},
    [`${KEYPOINT_INDEXES['L-Eye']}-${KEYPOINT_INDEXES['L-Ear']}`]: {'color': 'rgba(255, 0, 170, 0.6)'},

    [`${KEYPOINT_INDEXES['Neck']}-${KEYPOINT_INDEXES['Nose']}`]: {'color': 'rgba(0, 0, 255, 0.6)'},

    [`${KEYPOINT_INDEXES['Neck']}-${KEYPOINT_INDEXES['R-Sho']}`]: {'color': 'rgba(255, 0, 0, 0.6)'},
    [`${KEYPOINT_INDEXES['R-Sho']}-${KEYPOINT_INDEXES['R-Elb']}`]: {'color': 'rgba(255, 170, 0, 0.6)'},
    [`${KEYPOINT_INDEXES['R-Elb']}-${KEYPOINT_INDEXES['R-Wr']}`]: {'color': 'rgba(255, 255, 0, 0.6)'},

    [`${KEYPOINT_INDEXES['Neck']}-${KEYPOINT_INDEXES['L-Sho']}`]: {'color': 'rgba(255, 85, 0, 0.6)'},
    [`${KEYPOINT_INDEXES['L-Sho']}-${KEYPOINT_INDEXES['L-Elb']}`]: {'color': 'rgba(170, 255, 0, 0.6)'},
    [`${KEYPOINT_INDEXES['L-Elb']}-${KEYPOINT_INDEXES['L-Wr']}`]: {'color': 'rgba(85, 255, 0, 0.6)'},

    [`${KEYPOINT_INDEXES['Neck']}-${KEYPOINT_INDEXES['R-Hip']}`]: {'color': 'rgba(0, 255, 0, 0.6)'},
    [`${KEYPOINT_INDEXES['R-Hip']}-${KEYPOINT_INDEXES['R-Knee']}`]: {'color': 'rgba(0, 255, 85, 0.6)'},
    [`${KEYPOINT_INDEXES['R-Knee']}-${KEYPOINT_INDEXES['R-Ank']}`]: {'color': 'rgba(0, 255, 170, 0.6)'},

    [`${KEYPOINT_INDEXES['Neck']}-${KEYPOINT_INDEXES['L-Hip']}`]: {'color': 'rgba(0, 255, 255, 0.6)'},
    [`${KEYPOINT_INDEXES['L-Hip']}-${KEYPOINT_INDEXES['L-Knee']}`]: {'color': 'rgba(0, 170, 255, 0.6)'},
    [`${KEYPOINT_INDEXES['L-Knee']}-${KEYPOINT_INDEXES['L-Ank']}`]: {'color': 'rgba(0, 85, 170, 0.6)'},
};

export const POSES = [
    {
        name: 'tpose_01',
        tags: [
            'standing',
            't-pose',
        ],
    },
    {
        name: 'tpose_02',
        tags: [
            'standing',
            't-pose',
        ],
    },
    {
        name: 'standing_01',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_02',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_03',
        tags: [
            'standing',
            'crossed_arms',
        ],
    },
    {
        name: 'standing_04',
        tags: [
            'standing',
            'raised_arms',
        ],
    },
    {
        name: 'standing_05',
        tags: [
            'standing',
            'raised_arms',
        ],
    },
    {
        name: 'standing_06',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_07',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_08',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_09',
        tags: [
            'standing',
            'raised_arms',
        ],
    },
    {
        name: 'standing_10',
        tags: [
            'standing',
            'leaning',
            'crossed_arms',
        ],
    },
    {
        name: 'standing_13',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_14',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_15',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_16',
        tags: [
            'standing',
            'raised_arms'
        ],
    },
    {
        name: 'standing_17',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_18',
        tags: [
            'standing',
            'crossed_arms',
        ],
    },
    {
        name: 'standing_19',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_20',
        tags: [
            'standing',
        ],
    },
    {
        name: 'standing_21',
        tags: [
            'standing',
        ],
    },
    {
        name: 'flexing_01',
        tags: [
            'standing',
            'flexing',
            'raised_arms',
        ],
    },
    {
        name: 'flexing_02',
        tags: [
            'standing',
            'flexing',
            'raised_arms',
        ],
    },
    {
        name: 'flexing_03',
        tags: [
            'standing',
            'flexing',
            'raised_arms',
        ],
    },
    {
        name: 'laying_02',
        tags: [
            'laying',
        ],
    },
    {
        name: 'laying_03',
        tags: [
            'laying',
        ],
    },
    {
        name: 'laying_05',
        tags: [
            'laying',
        ],
    },
    {
        name: 'jumping_01',
        tags: [
            'jumping',
            'raised_arms',
        ],
    },
    {
        name: 'jumping_02',
        tags: [
            'jumping',
            'raised_arms',
        ],
    },
    {
        name: 'jumping_03',
        tags: [
            'jumping',
            'raised_arms',
        ],
    },
    {
        name: 'jumping_04',
        tags: [
            'jumping',
        ],
    },
    {
        name: 'jumping_05',
        tags: [
            'jumping',
            'raised_arms',
        ],
    },
    {
        name: 'dance_01',
        tags: [
            'dancing',
            'standing',
        ],
    },
    {
        name: 'dance_02',
        tags: [
            'dancing',
            'standing',
        ],
    },
    {
        name: 'dance_03',
        tags: [
            'dancing',
            'standing',
            'raised_arms',
        ],
    },
    {
        name: 'dance_04',
        tags: [
            'dancing',
            'standing',
            'raised_arms',
        ],
    },
    {
        name: 'dance_05',
        tags: [
            'dancing',
            'standing',
        ],
    },
    {
        name: 'sitting_01',
        tags: [
            'sitting',
        ],
    },
    {
        name: 'sitting_02',
        tags: [
            'sitting',
        ],
    },
    {
        name: 'sitting_03',
        tags: [
            'sitting',
        ],
    },
    {
        name: 'sitting_05',
        tags: [
            'sitting',
        ],
    },
    {
        name: 'sitting_06',
        tags: [
            'sitting',
        ],
    },
    {
        name: 'sitting_11',
        tags: [
            'sitting',
            'kneeling',
        ],
    },
    {
        name: 'sitting_14',
        tags: [
            'sitting',
            'kneeling',
        ],
    },
    {
        name: 'sitting_15',
        tags: [
            'sitting',
            'kneeling',
        ],
    },
    {
        name: 'sitting_16',
        tags: [
            'sitting',
        ],
    },
];