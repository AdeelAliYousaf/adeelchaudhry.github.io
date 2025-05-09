importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([
    { url: 'assets/index-tmf22Og0.js', revision: '29753023fee7bbb694c758573cb74a8c' },
    { url: 'assets/index-IxjdLbYX.css', revision: '1ec34dce4b7610db58c2a04ae1792d39' },
    { url: 'index.html', revision: '6752fdb224be2506340a6d786a784a83' },

    // Add your new assets here
    { url: 'assets/CV-N1hSmp1K.pdf', revision: 'new-revision-1' },
    { url: 'assets/fav-m1VK2A68.png', revision: 'new-revision-2' },
    { url: 'assets/APS-nb8YMKYh.jpg', revision: 'new-revision-3' },
    { url: 'assets/AWT-Bj3N1VTn.png', revision: 'new-revision-4' },
    { url: 'assets/github-BXq_Yy1q.png', revision: 'new-revision-5' },
    { url: 'assets/LGS-Bj6y6YZD.jpeg', revision: 'new-revision-6' },
    { url: 'assets/PGC-rnC3jh3D.png', revision: 'new-revision-7' },
    { url: 'assets/TIWL-Dg32wYmH.png', revision: 'new-revision-8' },
    { url: 'assets/USKT-XMICVP6r.png', revision: 'new-revision-9' },
    { url: 'assets/menarebrave-BnbHV_-c.mp3', revision: 'new-revision-10' },
    { url: 'assets/hockeypads-D6Tj7hp9.mp3', revision: 'new-revision-11' }
  ]);
} else {
  console.error('Workbox failed to load');
}
