window.wized_config = window.wized_config || [];
window.wized_config.push({
  createdTimestamp: 1678497349,
  type: "development",
  requests: [
    {
      rest__method: "post",
      "rest__perform-server-request": true,
      "http-body": [
        {
          "http-body__rest__field-value": "text-davinci-003",
          "http-body__rest__field-key": "model",
        },
        {
          "http-body__rest__field-value":
            '{{\n`Explain this text with bullet points: ${i["prompt"]}`\n}}',
          "http-body__rest__field-key": "prompt",
        },
        {
          "http-body__rest__field-value": "3450",
          "http-body__rest__field-key": "max_tokens",
        },
        {
          "http-body__rest__field-value": "0",
          "http-body__rest__field-key": "temperature",
        },
        {
          "http-body__rest__field-value": "1",
          "http-body__rest__field-key": "top_p",
        },
      ],
      number: 1,
      rest__endpoint: "/completions",
      "http-headers": [
        {
          "http-headers__rest__field-key": "Content-Type",
          "http-headers__rest__field-value": "application/json",
        },
      ],
      name: "Send Prompt to AI",
      appId: "d45d1f2d-41c7-48a4-bc4b-fd0388a8debf",
      id: "41dfbaa9-913a-40ba-9af5-b1f76b59225e",
      type: "data-out",
    },
  ],
  projectId: "8dkgLJeTTIDIRVjodlDX",
  updatedTimestamp: 1678499695,
  showBranding: true,
  cookies: [],
  id: "jhpQO7lR6qq50RAzyBOI",
  folders: [],
  actions: [{ attributes: [{}], id: "055aa95c-c5ac-40c6-bb21-380255aae6d0" }],
  variables: [],
  parameters: [],
  apps: [
    {
      id: "d45d1f2d-41c7-48a4-bc4b-fd0388a8debf",
      icon: "rest",
      type: "rest",
      baseUrl: "https://api.openai.com/v1",
    },
  ],
  auth: { "access-control": [], appId: "" },
});
