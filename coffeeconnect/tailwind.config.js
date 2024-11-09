/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT({ 
  content: ["./index.html",
           "./src/**/*.{js,ts,jsx,tsx}",
           // Flowbite 컴포넌트 경로 추가 
           'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', //타입스크립트 지원
           "./node_modules/flowbite/**/*.js", //자바스크립트 지원
         
            // Material Tailwind 경로
        "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Flowbite 플러그인 추가
    require('flowbite/plugin')
  ],
});

