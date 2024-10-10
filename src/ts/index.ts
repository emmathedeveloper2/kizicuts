
const toggleMenuIcons = document.querySelectorAll('.hamburger-icon, .nav-links a')

const mapIframe = document.querySelector('.location-map iframe');

const locationButtons = document.querySelectorAll('.location-button');

const API_KEY = import.meta.env.VITE_MAP_API_KEY;

const mapIframeSources = [
    {
        address: '9, 11 Balogun St, Ifako-Ijaiye, Lagos 101232, Lagos',
        iframeSrc: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw_hSe7mWOxARKexB-S9f-C0&key=${API_KEY}`,
    },
    {
        address: '7 Wasiu Popoola St, Lekki 105101, Lagos',
        iframeSrc: `https://www.google.com/maps/embed/v1/place?q=place_id:EjA3IFdhc2l1IFBvcG9vbGEgU3QsIExla2tpIDEwNTEwMSwgTGFnb3MsIE5pZ2VyaWEiMBIuChQKEglzYtibGP47EBF8yrotkPOq5BAHKhQKEgkjaLyCGP47EBGhcdbfKzrV5Q&key=${API_KEY}`,
    },
    {
        address: 'Ring Rd, Lagos',
        iframeSrc: `https://www.google.com/maps/embed/v1/place?q=place_id:Eh5SaW5nIFJkLCBJa295aSwgTGFnb3MsIE5pZ2VyaWEiLiosChQKEgmHoN7HGYs7EBEf-a4XfpZ2cBIUChIJ9fyVms_0OxAR0rBRTLHEZ6E&key=${API_KEY}`,
    },
]

toggleMenuIcons.forEach(icon => {
    icon.addEventListener('click', toggleMenu);
});

locationButtons.forEach((button , idx) => {

    (button.querySelector('.address p') as HTMLElement).innerHTML = mapIframeSources[idx].address;

    button.addEventListener('click', () => changeLocation(idx));
});

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu?.classList.toggle('active');
}

function changeLocation(idx: number) {
    mapIframe?.setAttribute('src', mapIframeSources[idx].iframeSrc);
    locationButtons.forEach(button => button.classList.remove('active'));
    locationButtons[idx].classList.add('active');
}

changeLocation(0);