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
    /* --colorText2: #fdfdfe; */
    --colorText2: #00bcd4;
    --primary2: #11171e;
    --secondary2: #1b222a;
    /* --accent2: #141a22; */
    --accent2: #1951c5;
    --tertiary2: #141a22;
    /* --hover2: #1951c5; */
    --hover2: #007c91;

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
// бордер 242E39
// &:hover {
//   color: #008c9e;
//   transform: translateY(-5px);
// }
//   --accent:rgb(80, 177, 0);
//   --gray: #96ba74c7;
//   --hover-color: #5bc305;
//   --text-color: #2e2e36;
//   --second-text-color: #c5e1a6;
//   --border-color: #96be7e;
//   --bg-first-color: #fbfbfb;
//   --bg-second-color: #b2ef8079;
//   --bg-body-color: #fbfbfb;
//   --shadow-color: #535b50;
//   --shadow-color-light: #0000000d;

//   --accent-color: #72b63b;
//   --gray-color: #677a9ec6;
//   --hover-color: #5ba221;
//   --text-color: #fafafa;
//   --second-text-color: #4d5e79;
//   --border-color: #476565;
//   --bg-first-color: #3f4c61;
//   --bg-second-color: #0b131b9c;
//   --bg-body-color: #1f2836;
//   --shadow-color: #eff1ef;
//   --shadow-color-light: #ffffff0d;
