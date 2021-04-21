import * as Alexa from "ask-smapi-sdk";

// specify the refreshTokenConfig with clientId, clientSecret and refreshToken generated in the previous step
const refreshTokenConfig: Alexa.RefreshTokenConfig = {
  clientId: "amzn1.application-oa2-client.d83a0639b98f44028cdd852caa84b80d",
  clientSecret:
    "7fa8608c7377013e66b2a1c685d69e0d245de828b36cb73ccf35ac67dedf2abb",
  refreshToken:
    "Atzr|IwEBIDAsUsfZb12cE0X7dgQ2dxrnIPVAljz_0fzx0RrPwwlDJxBsqspNv9qCU4JO41UdynWI1vHr3l7VJwkK0lBEML9KnOSomtJ8JP05zCtXz9PbbBMIEB6Cg9LCglHHWif6OFgubzz1rgutS4dhnxOrXd09RXnZUAHLM0EwqglVZbdxQwVheGCQ570aQoLv4JwJqcvjTBOfOtTNmiaqo6Y1LwWIFkoJd4yo2Anyqc0Dd-8uF9MIFuBtsuFBrfh_MRyphSC4D5M2a0rz4mbH9o2JI9PJmx6XQX8Ev6r4hfJ4RoVjISypj8RYDfDAGixv8_6FwMDa-HvAWvX-LW_sMOqIjqAMZXNFcuplnalsugQ5j7DIhb2f4eR6ALjnbtL91ARO-nZSx6-6NoR3s8ivRa1dEe-5Cagc9557OjGELqumUzmqyzqXlU0fwvacb7-C908h3UWl1Mhbp33EeXYJd1JOJQla76nPzoisOQJWUnKpi-VF27SspWHuFIxKThWorstR2ICIpvbTYIzYdZ-M3ug4cQk-IhEPZh5tjvMB2tI9DDnZ7MoF9ZlnIZ3xmP_ZaIuihJIbVyAlLIiJ1A7OZev-q0W2KLwANOMV8N7MuT5d-kibeuXDCGWX_1QUmF16kgnoQlDmZL0FuphbSr7uo232K-_O6_6YdUKaW5SkojPTBVhSZQ",
};

const VENDOR_ID = `MFK9FRHA1CAIO`;

const smapiClient = new Alexa.StandardSmapiClientBuilder()
  .withRefreshTokenConfig(refreshTokenConfig)
  .client();

(async () => {
  const results = await smapiClient.listSkillsForVendorV1(VENDOR_ID);
  console.log(results.skills);

  const manifest = {
    vendorId: VENDOR_ID,
    manifest: {
      publishingInformation: {
        locales: {
          "en-US": {
            summary: "This is a sample Alexa skill.",
            examplePhrases: [
              "Alexa, open sample skill.",
              "Alexa, turn on kitchen lights.",
              "Alexa, blink kitchen lights.",
            ],
            keywords: ["Smart Home", "Lights", "Smart Devices"],
            name: "Sample custom skill name.",
            description:
              "This skill has basic and advanced smart devices control features.",
          },
        },
        isAvailableWorldwide: false,
        testingInstructions:
          "1) Say 'Alexa, discover my devices' 2) Say 'Alexa, turn on sample lights'",
        category: "SMART_HOME",
      },
      apis: {
        custom: {
          endpoint: {
            uri:
              "arn:aws:lambda:us-east-1:032174894474:function:ask-custom-custome_cert",
          },
        },
      },
      manifestVersion: "1.0",
      privacyAndCompliance: {
        allowsPurchases: false,
        locales: {
          "en-US": {
            termsOfUseUrl: "http://www.termsofuse.sampleskill.com",
            privacyPolicyUrl: "http://www.myprivacypolicy.sampleskill.com",
          },
        },
        isExportCompliant: true,
        isChildDirected: false,
        usesPersonalInfo: false,
      },
    },
  };

  // const res = await smapiClient.createSkillForVendorV1(manifest);
  // console.log(res);
})();

const RandomBlock = {
  type: "random",
  pickFrom: [],
};

// list types
/*

Quiz List:
[
{question: 'some text', answers: [{text: 'a', isAnswer: true}]}
]

Name List:
[
  'name'
]


*/

/* TODO:
- create a skill programatically

then:
using gained knowledge write API for creating skill project & creating skill

*/
