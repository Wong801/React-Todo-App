module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            /*
              smartphones,
              iPhone,
              portrait 480x320 phones
            */
            'xs': "320px",
            /*
              portrait e-readers (Nook/Kindle),
              smaller tablets @ 600 or @ 640 wide.
            */
            'sm': "481px",
            /*
              portrait tablets,
              portrait iPad,
              landscape e-readers,
              landscape 800x480 or 854x480 phones
            */
            'md': "768px",
            /*
              tablet,
              landscape iPad,
              lo-res laptops ands desktops 
            */
            'lg': "1024px",
            /*
              big landscape tablets,
              laptops,
              and desktops
            */
            'xl': "1920px",
            /* 
              hi-res laptops and desktops
            */
            '2xl': "1440px",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    // mode: 'jit'
}