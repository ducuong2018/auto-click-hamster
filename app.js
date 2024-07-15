const axios = require("axios");

let availableTaps = 0;
let balanceCoins = 0;
const callApi = async () => {
  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.hamsterkombatgame.io/clicker/tap",
      headers: {
        "Accept-Language": "en,vi-VN;q=0.9,vi;q=0.8,en-US;q=0.7",
        Connection: "keep-alive",
        Origin: "https://hamsterkombat.io",
        Referer: "https://hamsterkombat.io/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        accept: "application/json",
        authorization:
          "Bearer 1718107994142vfQU0LcmfdovKBAzsiaV45CuHrcRYRVdmHsAHqQKDWluc3Dl2mFnDl3pZ8DROlAh1300269773",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
      },
      data: {
        count: Math.floor(Math.random() * 10) + 1,
        availableTaps,
        timestamp: Math.floor(Date.now() / 1000),
      },
    });

    availableTaps = data?.clickerUser?.availableTaps || 0;
    balanceCoins = data?.clickerUser?.balanceCoins || 0;
    console.log({ balanceCoins });
  } catch (error) {
    console.error(error);
  }
};

setInterval(callApi, 2000);
