import { css } from "styled-components";

export const Variables = css`
  :root {
    /* --font-family: "Manrope", sans-serif; */
    /* --font-family: "Inter", sans-serif; */
    --font-family: "MonaSans", sans-serif;

    /*  Theme light */
    --bgBody: #fafafa;
    --colorText: #00bcd4;
    --primary: #0f171f;

    --secondary: #141c22;
    --accent: #222831;
    --tertiary: #fdfdfe;

    --svg2: #00bfa5;
    --hover: #5bc305;

    --gradient: conic-gradient(from 0deg, #ff007a, #1951c5, #00bcd4, #ff007a);

    /*  Theme dark */
    --bgBody2: #10161e;
    --colorText2: #00bcd4;
    --primary2: #11171e;

    --secondary2: #1b222a;
    --accent2: #1951c5;
    --tertiary2: #141a22;

    --svg2: #00bfa5;
    --hover2: #007c91;

    --gradient: conic-gradient(from 0deg, #ff007a, #1951c5, #00bcd4, #ff007a);

    /*  Theme grey */
    --bgBody3: #1f2836;
    --colorText3: #fafafa;
    --primary3: #0f171f;

    --secondary3: #0b131b9c;
    --accent3: #677a9ec6;
    --tertiary3: #fdfdfe;

    --svg2: #00bfa5;
    --hover3: #5ba221;

    --gradient: conic-gradient(from 0deg, #ff007a, #1951c5, #00bcd4, #ff007a);
  }
`;

// primary -- основний колір
// secondary -- допоміжний колір (другий за важливістю, доповнює primary)
// accent -- акцентний колір (для ховера)
// tertiary -- колір для тіней (запасний)
