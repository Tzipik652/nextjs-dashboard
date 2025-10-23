import localFont from 'next/font/local';

export const inter = localFont({
    src: [
        {
            path: '../../public/fonts/inter-v20-latin-regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
});

export const lusitana = localFont({
    src: [
        {
            path: '../../public/fonts/lusitana-v14-latin-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/lusitana-v14-latin-700.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});
