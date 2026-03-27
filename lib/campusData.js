export const campusData = {
    "Poornima_University": {
        slug: "Poornima_University",
        name: "Poornima University",
        badge: "Poornima University Campus",
        description: "An advanced technological and research university committed to excellence in education, innovation, and empowering the next generation of industry leaders.",
        footerText: "Unified Campus Experience • Poornima University Central Catalog",
        catalogItems: [
            {
                id: 'resources',
                title: "Resources",
                iconName: 'BookOpen',
                color: "blue",
                componentName: 'Resourcemain',
                link: "/resources",
                props: { user: "Poornima" }
            },
            {
                id: 'connection',
                title: "Connections",
                iconName: 'Users',
                color: "indigo",
                componentName: 'Connection',
                props: { user: "Poornima" }
            },
            {
                id: 'leaderboard',
                title: "Leaderboard",
                iconName: 'Trophy',
                color: "amber",
                componentName: 'Leaderboard',
                props: {}
            },
            {
                id: 'colx',
                title: "ColX",
                iconName: 'Layers',
                color: "rose",
                componentName: 'Colx',
                props: {}
            },
            {
                id: "semester-overview",
                title: "Semester Overview",
                iconName: 'Layers',
                color: "rose",
                componentName: null,
                props: {}
            }
        ]
    }
};
