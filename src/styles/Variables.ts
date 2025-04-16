import { css } from "styled-components";

export const Variables = css`
  // primary -- основний колір
  // secondary -- допоміжний колір (другий за важливістю, доповнює primary)
  // accent -- акцентний колір (для ховера)
  // tertiary -- колір для тіней (запасний)
  :root {
    --font-family: "Manrope", sans-serif;
    /*  Theme light */
    --bgBody: #dde7f9;
    --colorText: #2e2e36;
    --primary: #0f171f; // основний колір
    --secondary: #141c22; //допоміжний колір (другий за важливістю, доповнює primary)
    --accent: #222831; // акцентний колір
    --tertiary: #fdfdfe; // колір для тіней (запасний)
    --hover: #5bc305; // (для ховера)

    /*  Theme dark */
    /* --bgBody2: #171b22; */
    --bgBody2: #10161e;
    --colorText2: #00bcd4;
    --primary2: #11171e;
    --secondary2: #1b222a;
    /* --accent2: #141a22; */
    --accent2: #1951c5;
    --tertiary2: #141a22;
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
    --hover3: #5ba221;
  }
`;
