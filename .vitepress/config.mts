import {defineConfig} from 'vitepress';

export default defineConfig({
    title: 'Pedro Pathing',
    description: 'Pedro Pathing Documentation',
    base: '/',
    head: [["link", {rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico"}]],
    lastUpdated: true,
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/Pedro-Pathing/Documentation/edit/master/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {text: "Home", link: "/"},
            {text: "Pedro", link: "/pedro/prerequisites", activeMatch: "^/pedro/"},
            {text: "General FTC", link: "/general/adb", activeMatch: "^/general/"},
            {text: "JavaDoc", link: "https://pedropathing.com/java/index.html"},
            {text: "Quickstart", link: "https://github.com/Pedro-Pathing/Quickstart/"},
            {text: "Discord", link: "https://discord.gg/2GfC4qBP5s"}
        ],
        sidebar: {
            '/pedro/': [
                {
                    text: 'Setup',
                    items: [
                        {text: 'Overview', link: '/pedro/overview'},
                        {text: 'Prerequisites', link: '/pedro/prerequisites'},
                        {text: 'Migrating from the Old Quickstart', link: '/pedro/migrating'},
                    ],
                },
                {
                    text: 'Localization',
                    items: [
                        {text: 'Pick your localizer', link: '/pedro/localization/pick'},
                        {text: 'Setup your localizer', link: '/pedro/localization/setup'},
                        {text: 'Drive Encoder Localizer', link: '/pedro/localization/driveEncoder'},
                        {text: 'Two Wheel Localizer', link: '/pedro/localization/twoWheel'},
                        {text: 'Three Wheel Localizer', link: '/pedro/localization/threeWheel'},
                        {text: 'Three Wheel + IMU Localizer', link: '/pedro/localization/threeWheelImu'},
                        {text: 'OTOS Localizer', link: '/pedro/localization/otos'},
                        {text: 'Pinpoint Localizer', link: '/pedro/localization/pinpoint'},
                    ],
                },
                {
                    text: 'Automatic Tuners',
                    items: [
                        {text: 'Prerequisites', link: '/pedro/automatic/prerequisites'},
                        {text: 'Forward Velocity', link: '/pedro/automatic/forwardvelocity'},
                        {text: 'Strafe Velocity', link: '/pedro/automatic/strafevelocity'},
                        {text: 'Forward Zero Power', link: '/pedro/automatic/forwardzeropower'},
                        {text: 'Lateral Zero Power', link: '/pedro/automatic/lateralzeropower'},
                    ],
                },
                {
                    text: 'PIDF Tuners',
                    items: [
                        {text: 'Intro', link: '/pedro/pidf/intro'},
                        {text: 'Translational', link: '/pedro/pidf/translational'},
                        {text: 'Heading', link: '/pedro/pidf/heading'},
                        {text: 'Drive', link: '/pedro/pidf/drive'},
                        {text: 'Centripetal', link: '/pedro/pidf/centripetal'},
                        {text: 'Test', link: '/pedro/pidf/test'},
                    ],
                },
                {
                    text: 'Examples',
                    items: [
                        {text: 'Writing a PedroPathing Autonomous', link: '/pedro/examples/buildauto'},
                        {text: 'Example Auto', link: '/pedro/examples/auto'},
                        {text: 'Example Teleop', link: '/pedro/examples/teleop'},
                    ],
                },
                {
                    text: 'Common Issues',
                    items: [
                        {text: 'Path Overshoots at the End', link: '/pedro/commonissues/pathovershoot'},
                        {text: 'Convert Path(s) to a PathChain', link: '/pedro/commonissues/pathtopathchain'},
                    ],
                },
                {
                    text: 'Miscellaneous',
                    items: [
                        {text: 'Local Changes to the Library', link: '/pedro/misc/localchanges'},
                        {text: 'Constants Class Overview', link: '/pedro/misc/constants'},
                        {text: 'Callbacks', link: '/pedro/misc/callbacks'},
                        {text: 'Discord Shortcuts', link: '/pedro/misc/shortcuts'},
                    ],
                }
            ],
            '/general/': [
                {text: 'ADB Tutorial', link: '/general/adb'},
                {text: 'Pinpoint NAN Error', link: '/general/pinpointNAN'},
                {text: 'XML Configuration Tutorial', link: '/general/xml'},
                {
                    text: 'Github',
                    items: [
                        //{text: 'GitHub Organizations', link: '/general/GitHub/GitHub_Organization'},
                        //{text: 'GitHub Permissions', link: '/general/GitHub/GitHub_Permissions'},
                        {text: 'GitHub Teams', link: '/general/GitHub/GitHub_Teams'},
                    ],
                },
            ],
        }
    },
});
