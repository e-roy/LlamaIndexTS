import { OpenAI } from "llamaindex";

(async () => {
  const llm = new OpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0.1,
    additionalChatOptions: { frequency_penalty: 0.1 },
    additionalSessionOptions: {
      defaultHeaders: { "X-Test-Header-Please-Ignore": "true" },
    },
  });

  // complete api
  const response1 = await llm.complete("How are you?");
  console.log(response1.message.content);

  // chat api
  const response2 = await llm.chat([
    { content: "Tell me a joke!", role: "user" },
  ]);
  console.log(response2.message.content);
})();
