import NavigationBar from './components/navigation-bar/navigation-bar.js'

const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'Hello world page'
    },
    {
        url: '/banana-page',
        title: 'Banana page'
    }
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if(url === '/hello-world-page') {
    import ('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    });
}

if (url === '/banana-page') {
    import ('BananaApp/BananaPage').then(BananaPageModule => {
        const BananaPage = BananaPageModule.default;
        const bananaPage = new BananaPage();
        bananaPage.render();
    });
}


