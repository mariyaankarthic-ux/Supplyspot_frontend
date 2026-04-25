import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: "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",
});

async function main() {
  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      messages: [
        { role: "user", content: "Explain TDS filing in India" }
      ],
    });

    console.log(msg.content[0].text);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
