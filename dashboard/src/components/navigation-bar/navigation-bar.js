import './navigation-bar.scss';

class NavigationBar {
    render(navigationItems) {
        const listItem = navigationItems.map(navigationItem => {
            return `
                <li>
                    <a href="${navigationItem.url}">${navigationItem.title}</a>
                </li>
            `
        })

        const ul = document.createElement('ul');
        const body = document.querySelector('body');

        ul.innerHTML = listItem.join('');
        ul.classList.add('navigation-bar');
        body.appendChild(ul);
    }
}

export default NavigationBar;
